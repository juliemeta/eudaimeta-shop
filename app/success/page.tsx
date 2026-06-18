"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import { Button, Typography, Box } from "@mui/material";
import { StyledContainer } from "@/styles/StyledContainer";

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <StyledContainer>
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          maxWidth: 700,
          mx: "auto",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Tak for din ordre 🎉
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Din betaling er gennemført, og vi er allerede i gang med at behandle
          din ordre.
        </Typography>

        <Typography sx={{ mb: 6 }}>
          Du modtager en ordrebekræftelse på e-mail inden for få minutter (tjek
          evt. spam-mappe).
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Hvad vil du nu?
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Button component={Link} href="/faq" size="large">
            ▪ Læse vores FAQ 🤓
          </Button>

          <Button component={Link} href="/cogito" size="large">
            ▪ Udforske Cogito meta sum ✨
          </Button>

          <Button component={Link} href="/" size="large">
            ▪ Tilbage til forsiden 🏡
          </Button>
        </Box>
      </Box>
    </StyledContainer>
  );
}
