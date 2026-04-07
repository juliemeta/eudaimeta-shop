import { useCartStore } from "@/lib/store/cartStore";
import { CartSummaryWrapper } from "./CartSummary.styles";

export default function CartSummary() {
  const { items, getTotal } = useCartStore();
  const total = getTotal();

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
      <h2>Total: {total.toFixed(2)} kr.</h2>
      {items.length > 0 && <button onClick={handleCheckout}>BETALING</button>}
    </CartSummaryWrapper>
  );
}
