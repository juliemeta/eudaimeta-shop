"use client";

import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQty } = useCartStore();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "40px",
        alignItems: "start",
      }}
    >
      {/* 🛒 LEFT: CART ITEMS */}
      <div>
        <h1>Min indkøbskurv</h1>

        {items.length === 0 && <p>Din kurv er tom</p>}

        {items.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 20,
              borderBottom: "1px solid #eee",
              paddingBottom: 16,
            }}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{ borderRadius: 4 }}
              />
            )}

            <div style={{ flex: 1 }}>
              <Link href={`/shop/${item.slug}`}>{item.name}</Link>

              <div>{item.price} kr.</div>

              {item.size && (
                <div style={{ fontSize: 14, opacity: 0.7 }}>
                  Størrelse: {item.size}
                </div>
              )}
              {/* Update quantity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 8,
                }}
              >
                <button
                  onClick={() =>
                    updateQty(item.id, item.quantity - 1, item.size)
                  }
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQty(item.id, item.quantity + 1, item.size)
                  }
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💳 RIGHT: SUMMARY */}
      <CartSummary />
    </div>
  );
}
