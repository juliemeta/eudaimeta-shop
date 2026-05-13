import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import ProductsView from "@/components/productsView/ProductsView";
import { getProducts } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";

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
            label: "Shop",
          },
        ]}
      />
      <ProductsView products={products} />
    </StyledContainer>
  );
}
