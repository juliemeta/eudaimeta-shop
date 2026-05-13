"use client";

import { useState } from "react";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import Placeholder from "../../public/assets/images/placeholder.png";

import {
  BaseImage,
  HoverImage,
  ImageWrapper,
  StyledCard,
  StyledCardContent,
} from "./ProductCard.styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

import { useWishlistStore } from "@/lib/store/wishlistStore";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  images: { src: string }[];
};

export default function ProductCard({ product }: { product: Product }) {
  const [toastOpen, setToastOpen] = useState(false);

  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id),
  );

  const firstImage = product.images?.[0]?.src || Placeholder.src;

  const secondImage = product.images?.[1]?.src;

  return (
    <>
      <Link href={`/shop/${product.slug}`} style={{ textDecoration: "none" }}>
        <StyledCard>
          <ImageWrapper>
            <BaseImage src={firstImage} alt={product.name} />

            {secondImage && (
              <HoverImage
                src={secondImage}
                alt={product.name}
                className="hoverImage"
              />
            )}

            {/* 💖 Wishlist button */}
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if (isInWishlist) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    images: product.images,
                    price: product.price,
                  });

                  setToastOpen(true);
                }
              }}
              className="wishlistButton"
              sx={{
                position: "absolute",
                bottom: 12,
                right: 12,

                width: 42,
                height: 42,

                bgcolor: "rgba(255,255,255,0.95)",

                backdropFilter: "blur(6px)",

                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",

                opacity: {
                  xs: 1,
                  md: 0.75,
                },

                transition: "all 0.25s ease",

                "&:hover": {
                  bgcolor: "white",
                  transform: "scale(1.06)",
                },
              }}
            >
              {isInWishlist ? (
                <FavoriteIcon
                  sx={{
                    color: "#d16b86",
                    fontSize: 22,
                    transition: "transform 0.2s ease",

                    ".wishlistButton:hover &": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    fontSize: 22,
                    transition: "color 0.2s ease",

                    ".wishlistButton:hover &": {
                      color: "#d16b86",
                    },
                  }}
                />
              )}
            </IconButton>
          </ImageWrapper>

          <StyledCardContent>
            <Typography variant="h6">{product.name}</Typography>

            <Typography color="text.secondary">
              {Number(product.price).toLocaleString("da-DK")} kr.
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </Link>

      {/* ✨ Toast */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
        message="Tilføjet til favoritter"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
}
