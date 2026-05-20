import type { Metadata } from "next";

export const dynamic = "force-dynamic";

import { getProducts, getCategories } from "@/lib/woocommerce";

import { StyledContainer } from "@/styles/StyledContainer";

import { Typography } from "@mui/material";

import InfiniteProductGrid from "@/components/productGrid/InfiniteProductGrid";

type Props = {
  params: Promise<{
    slug: string;
    sort: string;
  }>;
};

const sortLabels: Record<string, string> = {
  newest: "Nyeste",
  "price-asc": "Pris: Lav → Høj",
  "price-desc": "Pris: Høj → Lav",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sort } = await params;

  const categories = await getCategories();

  const currentCategory = categories.find((c: any) => c.slug === slug);

  const sortLabel = sortLabels[sort] || "Sortering";

  return {
    title: currentCategory
      ? `${currentCategory.name} – ${sortLabel} | Eudaimeta`
      : "Shop | Eudaimeta",

    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function CategoryPage(props: Props) {
  const params = await props.params;

  const { slug, sort } = params;

  const categories = await getCategories();

  const currentCategory = categories.find((c: any) => c.slug === slug);

  const products = await getProducts(
    currentCategory?.id,
    undefined,
    undefined,
    sort,
  );

  return (
    <StyledContainer>
      <Typography variant="h1">{currentCategory?.name || slug}</Typography>

      <InfiniteProductGrid
        initialProducts={products}
        tagId={currentCategory?.id || null}
        sort={sort || ""}
      />
    </StyledContainer>
  );
}
