import BannerSection from "@/components/banner/BannerSection";
import { DynamicBreadcrumbs } from "@/components/breadcrumbs/dynamicBreadcrumbs";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import Galaxy from "@/components/backgrounds/Galaxy";

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
        title={"Cogito Meta Sum"}
        image={""}
        overlay=""
        height="65vh"
        titleColor="#ffffff"
      >
        <Galaxy transparent={false} lightMode={false} />
      </BannerSection>
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
            const date = new Date(post.date).toLocaleDateString("da-DK", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

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

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "text.secondary",
                  }}
                >
                  {date}
                </Typography>

                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    href={`/cogito/${post.slug}`}
                    sx={{
                      backgroundColor: "secondary.dark",
                      "&:hover": { backgroundColor: "secondary.main" },
                    }}
                  >
                    Læs "{post.title.rendered}" ➡
                  </Button>
                </Box>
              </article>
            );
          })}
          <Button href="/">↩ Webshop</Button>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
}
