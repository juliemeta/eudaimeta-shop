"use client";
import { useCartStore } from "@/lib/store/cartStore";
import { CartCheckoutButton, CartSummaryWrapper } from "./CartSummary.styles";
import { formatPrice } from "@/lib/utils/format";

export default function CartSummary() {
  const { items, getTotal } = useCartStore();
  const total = getTotal();
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
      <h2>I alt</h2>
      <h3>{itemCount} varer</h3>
      <h3>Subtotal {formatPrice(total)}</h3>
      <h3>Levering</h3>
      {items.length > 0 && (
        <CartCheckoutButton onClick={handleCheckout}>
          BETALING
        </CartCheckoutButton>
      )}
    </CartSummaryWrapper>
  );
}
