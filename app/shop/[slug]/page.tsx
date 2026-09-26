import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/woocommerce";
import { SingleProductView } from "../../../components/singleProductView/SingleProductView";

type Props = {
  params: Promise<{ slug: string }>;
};

// 🎯 SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Shop | Eudaimeta",
    };
  }

  return {
    title: `${product.name} | Eudaimeta`,

    description:
      product.short_description?.replace(/<[^>]*>/g, "") ||
      "Bæredygtigt produceret tilbehør og produkter til en mere bevidst hverdag.",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug === "shop") {
    return notFound();
  }

  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  const category = product.categories?.[0];

  const relatedProducts = category
    ? (
        await getProducts(
          category.slug,
          undefined,
          undefined,
          undefined,
          1,
          undefined,
          5,
        )
      )
        .filter((item: any) => item.id !== product.id)
        .slice(0, 4)
    : [];

  return (
    <SingleProductView product={product} relatedProducts={relatedProducts} />
  );
}
