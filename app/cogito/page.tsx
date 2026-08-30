import BannerSection from "@/components/banner/BannerSection";
import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";

// 🎯 SEO
const pageTitle = "Cogito Meta Sum";

const pageDescription =
  "Tanker, refleksioner og inspiration samlet i Cogito Meta Sum.";

export const metadata: Metadata = {
  title: `${pageTitle} | Eudaimeta`,
  description: pageDescription,
};

async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/posts?_embed`,
    {
      next: { revalidate: 60 },
    },
  );

  return res.json();
}

export default async function CogitoPage() {
  const posts = await getPosts();

  return (
    <>
      <BannerSection
        title={pageTitle}
        image="/assets/images/galaxy-sky-photo-by-darla-rohova.jpg"
        overlay="#f2f0ec50"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <StyledContainer>
        <StyledTextWrapper>
          <DynamicBreadcrumbs
            items={[
              { label: "Forside", href: "/" },
              {
                label: pageTitle,
              },
            ]}
          />
          {posts.map((post: any) => {
            const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];

            return (
              <article key={post.id} style={{ marginBottom: "4rem" }}>
                <Link
                  href={`/cogito/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {featuredImage?.source_url && (
                    <Box
                      component="img"
                      src={featuredImage.source_url}
                      alt={featuredImage.alt_text || post.title.rendered}
                      sx={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        borderRadius: 1,
                        mb: 2,
                      }}
                    />
                  )}

                  <Typography
                    variant="h2"
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    {post.title.rendered}
                  </Typography>
                </Link>

                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outlined" href={`/cogito/${post.slug}`}>
                    Læs "{post.title.rendered}" ➡
                  </Button>
                </Box>
              </article>
            );
          })}
          <Button href="/">👉 Til forsiden</Button>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
}
