import BannerSection from "@/components/banner/BannerSection";
import { StyledLink } from "@/components/navbar/Navbar.styles";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Button, Typography } from "@mui/material";

async function getPosts() {
  const res = await fetch("https://eudaimeta.dk/wp-json/wp/v2/posts", {
    next: { revalidate: 60 },
  });

  return res.json();
}

export default async function CogitoPage() {
  const posts = await getPosts();

  return (
    <>
      <BannerSection
        title="Cogito meta sum"
        image="/assets/images/cogito-meta-sum.png"
        overlay="#f2f0ecf5"
      />
      <StyledContainer>
        <StyledTextWrapper>
          {posts.map((post: any) => (
            <article key={post.id} style={{ marginBottom: "4rem" }}>
              <StyledLink href={`/cogito/${post.slug}`}>
                <Typography variant="h2">{post.title.rendered}</Typography>
              </StyledLink>

              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
            </article>
          ))}
          <Button href="/">👉 Til forsiden</Button>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
}
