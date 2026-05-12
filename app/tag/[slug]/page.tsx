export const dynamic = "force-dynamic";

import { getProducts, getTags } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";
import { Typography } from "@mui/material";
import InfiniteProductGrid from "@/components/productGrid/InfiniteProductGrid";
import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";

export default async function TagPage({ params }: any) {
  const { slug } = await params;

  const tags = await getTags();
  const currentTag = tags.find((t: any) => t.slug === slug);

  const products = await getProducts(undefined, undefined, currentTag?.id);

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
            href: "/shop",
          },
          {
            label: currentTag?.name || slug,
          },
        ]}
      />
      <Typography variant="h3">Fokus på</Typography>
      <Typography variant="h1">{currentTag?.name || slug}</Typography>

      <InfiniteProductGrid initialProducts={products} tagId={currentTag?.id} />
    </StyledContainer>
  );
}
