import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const productId = searchParams.get("productId");

  const response = await fetch(
    `${process.env.WOOCOMMERCE_URL}/wp-json/wc/v3/products/reviews?product=${productId}`,
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`,
          ).toString("base64"),
      },
    },
  );

  const data = await response.json();

  return NextResponse.json(data);
}
