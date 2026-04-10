"use client";

import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { CartContent, CartPageContainer, CartWrapper } from "./page.styles";
import { Box, Grid, Typography } from "@mui/material";

export default function CartPage() {
  const { items, updateQty } = useCartStore();

  return (
    <CartPageContainer container>
      {/* 🛒 LEFT: CART ITEMS */}
      <CartWrapper size={{ xs: 12, md: 8 }}>
        <Typography variant="h1">Min indkøbskurv</Typography>

        {items.length === 0 && <p>Din kurv er tom</p>}

        {items.map((item) => (
          <CartContent key={`${item.id}-${item.size}`}>
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{ borderRadius: 4 }}
              />
            )}

            <Box style={{ flex: 1 }}>
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
            </Box>
          </CartContent>
        ))}
      </CartWrapper>

      {/* 💳 RIGHT: SUMMARY */}
      <Grid size={{ xs: 12, md: 4 }}>
        <CartSummary />
      </Grid>
    </CartPageContainer>
  );
}
