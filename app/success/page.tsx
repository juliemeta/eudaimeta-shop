"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/store/cartStore";

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Tak for din ordre 🎉</h1>
      <p>Din betaling er gennemført.</p>
    </div>
  );
}
