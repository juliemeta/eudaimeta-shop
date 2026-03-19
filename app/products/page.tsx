import ProductsView from "@/components/productsView/ProductsView";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wc/v3/products?consumer_key=${process.env.WC_CONSUMER_KEY}&consumer_secret=${process.env.WC_CONSUMER_SECRET}`,
    { cache: "no-store" },
  );

  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <ProductsView products={products} />
    </>
  );
}
