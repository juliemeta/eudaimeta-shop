import type { Metadata } from "next";

export const dynamic = "force-dynamic";

import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import InfiniteProductGrid from "@/components/productGrid/InfiniteProductGrid";
import { getProducts, getCategories } from "@/lib/woocommerce";
import { StyledContainer } from "@/styles/StyledContainer";
import { Typography } from "@mui/material";

type Props = {
  params: Promise<{ slug: string }>;
};

// 🎯 SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const categories = await getCategories();

  const currentCategory = categories.find((c: any) => c.slug === slug);

  if (!currentCategory) {
    return {
      title: "Shop | Eudaimeta",
    };
  }

  return {
    title: `${currentCategory.name} | Eudaimeta`,

    description: `Udforsk ${currentCategory.name.toLowerCase()} med fokus på kvalitet, funktion og mere bevidste valg.`,
  };
}

export default async function CategoryPage(props: Props) {
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
