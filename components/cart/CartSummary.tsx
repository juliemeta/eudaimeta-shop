"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { CartCheckoutButton, CartSummaryWrapper } from "./CartSummary.styles";
import { formatPrice } from "@/lib/utils/format";
import { Box, Typography } from "@mui/material";

export default function CartSummary() {
  const { items, getTotal } = useCartStore();

  const total = getTotal();
  const shipping = items.length > 0 ? 29 : 0;
  const totalWithShipping = total + shipping;

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items }),
    });

    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <CartSummaryWrapper>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Du har {itemCount} {itemCount === 1 ? "vare" : "varer"} i kurven
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mb: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography>{formatPrice(total)}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>Levering</Typography>
          <Typography>{formatPrice(shipping)}</Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            mt: 1,
            pt: 2,
            borderTop: "1px solid #ddd",
          }}
        >
          <Typography fontWeight={600}>Total</Typography>

          <Typography fontWeight={600}>
            {formatPrice(totalWithShipping)}
          </Typography>
        </Box>
      </Box>

      {items.length > 0 && (
        <CartCheckoutButton
          onClick={handleCheckout}
          variant="contained"
          color="success"
        >
          BETALING
        </CartCheckoutButton>
      )}
    </CartSummaryWrapper>
  );
}
