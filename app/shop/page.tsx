import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import ProductsView from "@/components/productsView/ProductsView";
import { getProducts } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";
import { Metadata } from "next";
import { Typography } from "@mui/material";

// 🎯 SEO
const pageTitle = "Shop";

const pageDescription =
  "Bæredygtigt produceret tilbehør og udvalgte produkter til en mere bevidst hverdag med fokus på kvalitet, æstetik og lang levetid.";

export const metadata: Metadata = {
  title: `${pageTitle} | Eudaimeta`,
  description: pageDescription,
};

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: any) {
  const { sort = "", search = "" } = await searchParams;

  const products = await getProducts(
    undefined, // category
    search, // search
    undefined, // tag
    sort, // sort
  );

  return (
    <StyledContainer>
      <DynamicBreadcrumbs
        items={[
          {
            label: "Forside",
            href: "/",
          },
          {
            label: pageTitle,
          },
        ]}
      />
      {search && (
        <Typography variant="h2" sx={{ mb: 4 }}>
          Søgeresultater for "{search}"
        </Typography>
      )}
      <ProductsView products={products} />
    </StyledContainer>
  );
}
