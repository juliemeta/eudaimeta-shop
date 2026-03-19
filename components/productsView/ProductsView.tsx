"use client";

import Typography from "@mui/material/Typography";
import ProductGrid from "../productGrid/ProductGrid";

export default function ProductsView({ products }: any) {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Products
      </Typography>

      <ProductGrid products={products} />
    </>
  );
}
