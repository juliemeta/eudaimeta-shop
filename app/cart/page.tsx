"use client";

import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQty } = useCartStore();

  return (
    <>
      <div>
        <h1>Min indkøbskurv</h1>

        {items.length === 0 && <p>Din kurv er tom</p>}

        {items.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", gap: 16, marginBottom: 16 }}
          >
            {item.image && (
              <Image src={item.image} alt={item.name} width={80} height={80} />
            )}

            <div>
              <Link href={`/shop/${item.slug}`}>{item.name}</Link>

              <div>{item.price} kr.</div>

              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
              />

              <button onClick={() => removeFromCart(item.id)}>Fjern</button>
            </div>
          </div>
        ))}
      </div>
      <CartSummary />
    </>
  );
}
