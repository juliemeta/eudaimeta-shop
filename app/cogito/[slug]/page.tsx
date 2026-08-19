import type { Metadata } from "next";
import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import React from "react";

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
    },
  );

  const posts = await res.json();

  return posts[0];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Cogito | Eudaimeta",
    };
  }

  const cleanExcerpt =
    post.excerpt?.rendered?.replace(/<[^>]*>/g, "")?.trim() || "";

  return {
    title: `${post.title.rendered} | Cogito | Eudaimeta`,

    description:
      cleanExcerpt ||
      "Tanker, refleksioner og inspiration samlet i Cogito Meta Sum.",
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <Box>
        Ups! Tankerne er forsvundet.
        <br />
        <Button href="/cogito" variant="contained">
          ↩ Gå tilbage
        </Button>
      </Box>
    );
  }

  const terms = post._embedded?.["wp:term"]?.flat() || [];

  const category = terms.find((term: any) => term.taxonomy === "category");

  const tags = terms.filter((term: any) => term.taxonomy === "post_tag");

  const formattedDate = new Date(post.date).toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
              label: post.title.rendered,
            },
          ]}
        />

        {/* Featured image */}
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <Box
            component="img"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={
              post._embedded["wp:featuredmedia"][0].alt_text ||
              post.title.rendered
            }
            sx={{
              display: "block",
              width: "100%",
              maxWidth: "900",
              height: "auto",
              borderRadius: 1,
              mb: 4,
            }}
          />
        )}

        <Typography variant="h1">{post.title.rendered}</Typography>

        {/* Category + tags + date */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 6,
            opacity: 0.7,
          }}
        >
          {category && (
            <>
              <Typography
                component={Link}
                href={`/cogito/category/${category.slug}`}
                variant="caption"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {category.name}
              </Typography>

              <Typography variant="caption">·</Typography>
            </>
          )}

          {tags.length > 0 &&
            tags.map((tag: any, index: number) => (
              <React.Fragment key={tag.id}>
                <Typography
                  component={Link}
                  href={`/cogito/tag/${tag.slug}`}
                  variant="caption"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  #{tag.name}
                </Typography>

                {index < tags.length - 1 && (
                  <Typography variant="caption">·</Typography>
                )}
              </React.Fragment>
            ))}

          <Typography variant="caption">·</Typography>

          <Typography variant="caption">{formattedDate}</Typography>
        </Box>

        <Box
          sx={{
            "& h1": {
              typography: "h1",
              mt: 8,
              mb: 3,
            },

            "& h2": {
              typography: "h2",
              mt: 6,
              mb: 2,
            },

            "& h3": {
              typography: "h3",
              mt: 5,
              mb: 2,
            },

            "& p": {
              typography: "body1",
              mb: 3,
              lineHeight: 1.9,
            },

            "& ul, & ol": {
              pl: 4,
              mb: 3,
            },

            "& li": {
              mb: 1,
            },

            "& img": {
              maxWidth: "100%",
              height: "auto",
              borderRadius: 3,
              my: 4,
            },

            "& blockquote": {
              borderLeft: "4px solid",
              borderColor: "divider",
              pl: 3,
              ml: 0,
              fontStyle: "italic",
              opacity: 0.8,
            },
          }}
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />

        <Divider variant="middle" />

        <br />

        <Button href="/">👉 Til forsiden</Button>

        <br />

        <Button variant="outlined" href="/cogito">
          ↩ Tilbage til oversigt
        </Button>
      </StyledTextWrapper>
    </StyledContainer>
  );
}
