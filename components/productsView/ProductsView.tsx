"use client";

import Typography from "@mui/material/Typography";
import InfiniteProductGrid from "../productGrid/InfiniteProductGrid";

export default function ProductsView({ products }: any) {
  return (
    <>
      <Typography variant="h1" sx={{ mb: 3 }}>
        Shop
      </Typography>

      <InfiniteProductGrid initialProducts={products} />
    </>
  );
}
