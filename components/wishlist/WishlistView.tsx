"use client";

import Typography from "@mui/material/Typography";
import { StyledContainer } from "@/styles/StyledContainer";
import { useWishlistStore } from "@/lib/store/wishlistStore";
import WishlistGrid from "../wishlist/WishlistGrid";
import { DynamicBreadcrumbs } from "../breadcrumbs/dynamicBreadcrumbs";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export default function WishlistView() {
  const wishlistItems = useWishlistStore((state) => state.items);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <StyledContainer>
      <DynamicBreadcrumbs
        items={[
          {
            label: "Forside",
            href: "/",
          },
          {
            label: "Favoritter",
          },
        ]}
      />

      <Typography variant="h1" sx={{ mb: 4 }}>
        Gemte favoritter
      </Typography>

      {wishlistItems.length > 0 ? (
        <WishlistGrid
          products={wishlistItems}
          onMoveToCart={() => setToastOpen(true)}
        />
      ) : (
        <Typography>Du har ingen gemte favoritter endnu. ✨</Typography>
      )}

      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
        message="✓ Vare flyttet til kurv"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </StyledContainer>
  );
}
