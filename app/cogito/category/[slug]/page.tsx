import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";

async function getCategory(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/categories?slug=${slug}`,
    {
      next: { revalidate: 60 },
    },
  );

  const categories = await res.json();

  return categories[0];
}

async function getPosts(categoryId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/posts?categories=${categoryId}&_embed`,
    {
      next: { revalidate: 60 },
    },
  );

  return res.json();
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (!category) {
    return {
      title: "Kategori | Cogito | Eudaimeta",
    };
  }

  return {
    title: `${category.name} | Cogito | Eudaimeta`,
    description: `Læs artikler om ${category.name} på Cogito Meta Sum.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPosts(category.id);

  return (
    <StyledContainer>
      <StyledTextWrapper>
        <DynamicBreadcrumbs
          items={[
            {
              label: "Forside",
              href: "/",
            },
            {
              label: "Cogito Meta Sum",
              href: "/cogito",
            },
            {
              label: category.name,
            },
          ]}
        />

        <Typography variant="h1">{category.name}</Typography>

        {posts.length === 0 ? (
          <Typography>Der er endnu ingen artikler i denne kategori.</Typography>
        ) : (
          posts.map((post: any) => (
            <Box key={post.id} sx={{ mb: 5 }}>
              <Link
                href={`/cogito/${post.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography variant="h2">{post.title.rendered}</Typography>
              </Link>

              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {new Date(post.date).toLocaleDateString("da-DK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>

              <Typography
                sx={{ mt: 2 }}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
            </Box>
          ))
        )}
      </StyledTextWrapper>
    </StyledContainer>
  );
}
