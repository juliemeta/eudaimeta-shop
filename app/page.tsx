import { Box, Typography } from "@mui/material";
import { StyledContainer } from "@/styles/Container";
import FrontPageHero from "@/components/frontPageHero/FrontPageHero";
import CategoryGrid from "@/components/categoryGrid/CategoryGrid";
import { getCategories, getProducts } from "@/lib/woocommerce";
import ProductGrid from "@/components/productGrid/ProductGrid";
import Image from "next/image";
import Logo from "@/components/logo/Logo";

export default async function HomePage() {
  const categories = await getCategories();

  const featuredCategories = categories
    .filter((cat: any) => cat.menu_order !== 0)
    .sort((a: any, b: any) => a.menu_order - b.menu_order);

  const featuredProducts = await getProducts(
    undefined,
    undefined,
    undefined,
    undefined,
    1,
    true,
  );

  const newProducts = await getProducts(
    undefined,
    undefined,
    undefined,
    "newest",
    1,
    false,
    4,
  );

  return (
    <>
      <FrontPageHero />

      <StyledContainer>
        <Box textAlign="center">
          <Logo />
        </Box>
        <Typography variant="h1">Design med mening</Typography>
        <CategoryGrid categories={featuredCategories} />

        <Typography variant="h2">Udvalgte</Typography>
        <ProductGrid products={featuredProducts} />

        <Typography variant="h3">Nyheder</Typography>
        <ProductGrid products={newProducts} />

        <Typography variant="h4">Hello from Homepage</Typography>

        <Typography variant="h5">Hello from Homepage</Typography>

        <Typography variant="h6">Hello from Homepage</Typography>

        <Typography variant="body1">Discover our products</Typography>
        <Typography variant="body2">Discover our products</Typography>
      </StyledContainer>
    </>
  );
}
