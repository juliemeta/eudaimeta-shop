"use client";

import Link from "next/link";
import CategoryCard from "../categoryCard/CategoryCard";
import { CategoryGridContainer } from "./CategoryGrid.styles";

type Category = {
  id: number;
  name: string;
  slug: string;
  image?: { src: string };
};

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <CategoryGridContainer>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/shop/category/${category.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CategoryCard key={category.slug} category={category} />
        </Link>
      ))}
    </CategoryGridContainer>
  );
}
