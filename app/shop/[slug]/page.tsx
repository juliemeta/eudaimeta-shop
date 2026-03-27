import { getAllProductsCached, getProduct } from "@/lib/woocommerce";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

  console.log("SLUG:", slug);

  if (!product) {
    return <div>Produkt ikke fundet</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} kr.</p>
    </div>
  );
}
