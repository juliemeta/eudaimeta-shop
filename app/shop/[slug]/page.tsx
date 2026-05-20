import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/woocommerce";
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

  return <SingleProductView product={product} />;
}
