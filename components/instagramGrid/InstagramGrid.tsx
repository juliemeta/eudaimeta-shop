"use client";

import { Box, Typography } from "@mui/material";

const posts = [
  {
    id: "1",
    image: "/assets/images/instagram/post1.jpeg",
    link: "https://www.instagram.com/p/CTQJU7EIOr2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "2",
    image: "/assets/images/instagram/post2.jpeg",
    link: "https://www.instagram.com/p/CTUPme2o9Vp/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "3",
    image: "/assets/images/instagram/post1.jpeg",
    link: "https://www.instagram.com/p/ZZZZZZZZ/",
  },
  {
    id: "4",
    image: "/assets/images/instagram/post1.jpeg",
    link: "https://www.instagram.com/p/AAAAAAA/",
  },
];

export default function InstagramGrid() {
  return (
    <>
      <Typography variant="h4" component="p">
        Følg os på Instagram 📸
      </Typography>

      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 140px)",
              md: "repeat(4, 140px)",
            },
            justifyContent: "center",
            gap: 1,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          {posts.map((post) => (
            <Box
              key={post.id}
              component="a"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: "relative",
                display: "block",
                overflow: "hidden",

                "&:hover .overlay": {
                  opacity: 1,
                },

                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={post.image}
                alt=""
                sx={{
                  width: "95%",
                  aspectRatio: "1 / 1",
                  borderRadius: "4px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* OVERLAY */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.35)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Simpelt “ikon” */}
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    border: "2px solid white",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
