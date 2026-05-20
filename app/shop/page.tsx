import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import ProductsView from "@/components/productsView/ProductsView";
import { getProducts } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";
import { Metadata } from "next";

// 🎯 SEO
const pageTitle = "Shop";

const pageDescription =
  "Bæredygtigt produceret tilbehør og udvalgte produkter til en mere bevidst hverdagmed fokus på kvalitet, æstetik og lang levetid.";

export const metadata: Metadata = {
  title: `${pageTitle} | Eudaimeta`,
  description: pageDescription,
};

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: any) {
  const { sort = "" } = await searchParams;

  const products = await getProducts(undefined, undefined, undefined, sort);

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
      <ProductsView products={products} />
    </StyledContainer>
  );
}
