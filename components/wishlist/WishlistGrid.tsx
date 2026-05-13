"use client";

import WishlistCard from "../wishlist/WishlistCard";
import { WishlistGridContainer } from "./WishlistGrid.styles";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  images: { src: string }[];
};

export default function WishlistGrid({ products }: { products: Product[] }) {
  return (
    <>
      <WishlistGridContainer>
        {Array.isArray(products) &&
          products.map((product) => (
            <WishlistCard key={product.slug} product={product} />
          ))}
      </WishlistGridContainer>
    </>
  );
}
