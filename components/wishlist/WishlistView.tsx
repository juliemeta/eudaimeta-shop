"use client";

import Typography from "@mui/material/Typography";
import { StyledContainer } from "@/styles/StyledContainer";
import { useWishlistStore } from "@/lib/store/wishlistStore";
import WishlistGrid from "../wishlist/WishlistGrid";
import { DynamicBreadcrumbs } from "../breadcrumbs/dynamicBreadcrumbs";

export default function WishlistView() {
  const wishlistItems = useWishlistStore((state) => state.items);

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
        <WishlistGrid products={wishlistItems} />
      ) : (
        <Typography>Du har ingen gemte favoritter endnu. ✨</Typography>
      )}
    </StyledContainer>
  );
}
