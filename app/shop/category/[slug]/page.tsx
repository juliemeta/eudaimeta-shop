export const dynamic = "force-dynamic";

import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import InfiniteProductGrid from "@/components/productGrid/InfiniteProductGrid";
import { getProducts, getCategories } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";
import { Typography } from "@mui/material";

export default async function CategoryPage(props: any) {
  const params = await props.params;
  const { slug } = params;

  const categories = await getCategories();

  const currentCategory = categories.find((c: any) => c.slug === slug);

  const parentCategory = categories.find(
    (c: any) => c.id === currentCategory?.parent,
  );

  const products = await getProducts(currentCategory?.id);

  return (
    <StyledContainer>
      <DynamicBreadcrumbs
        items={[
          {
            label: "Shop",
            href: "/shop",
          },

          ...(parentCategory
            ? [
                {
                  label: parentCategory.name,
                  href: `/shop/category/${parentCategory.slug}`,
                },
              ]
            : []),

          {
            label: currentCategory?.name || slug,
          },
        ]}
      />
      <Typography variant="h1">{currentCategory?.name || slug}</Typography>

      <InfiniteProductGrid
        initialProducts={products}
        tagId={currentCategory?.id || null}
      />
    </StyledContainer>
  );
}
