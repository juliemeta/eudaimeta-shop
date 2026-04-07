import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook verify error:", err);
    return new NextResponse("Webhook error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session & {
      shipping_details?: any;
    };

    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {
          limit: 100,
          expand: ["data.price.product"],
        },
      );

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wc/v3/orders`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`,
              ).toString("base64"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method: "stripe",
            payment_method_title: "Stripe",
            set_paid: true,

            // 🧑 Customer info (safe split)
            billing: {
              first_name: session.customer_details?.name?.split(" ")[0] ?? "",
              last_name:
                session.customer_details?.name?.split(" ").slice(1).join(" ") ??
                "",
              email: session.customer_details?.email ?? "",
            },

            // 📦 Shipping (kun hvis findes)
            ...(session.shipping_details && {
              shipping: {
                first_name: session.shipping_details.name?.split(" ")[0] ?? "",
                last_name:
                  session.shipping_details.name
                    ?.split(" ")
                    .slice(1)
                    .join(" ") ?? "",
                address_1: session.shipping_details.address?.line1 ?? "",
                address_2: session.shipping_details.address?.line2 ?? "",
                city: session.shipping_details.address?.city ?? "",
                postcode: session.shipping_details.address?.postal_code ?? "",
                country: session.shipping_details.address?.country ?? "",
              },
            }),

            // 🛒 Products
            line_items: lineItems.data.map((item: any) => ({
              product_id: Number(item.price.product.metadata.product_id),
              quantity: item.quantity,
            })),

            // 💸 Stripe reference
            meta_data: [
              {
                key: "stripe_session_id",
                value: session.id,
              },
              {
                key: "stripe_payment_intent",
                value: String(session.payment_intent ?? ""),
              },
            ],
          }),
        },
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Woo error:", res.status, text);
      }
    } catch (err) {
      console.error("Webhook processing error:", err);
    }
  }

  return NextResponse.json({ received: true });
}
