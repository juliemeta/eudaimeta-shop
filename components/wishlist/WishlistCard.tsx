"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import Placeholder from "../../public/assets/images/placeholder.png";
import { useState } from "react";

import {
  BaseImage,
  HoverImage,
  ImageWrapper,
  StyledCard,
  StyledCardContent,
} from "./WishlistCard.styles";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";

import { useWishlistStore } from "@/lib/store/wishlistStore";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  images: { src: string }[];
  type: "simple" | "variable";
  sizes?: string[];
};

export default function WishlistCard({ product }: { product: Product }) {
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const firstImage = product.images?.[0]?.src || Placeholder.src;
  const secondImage = product.images?.[1]?.src;
  const isSimpleProduct = product.type === "simple";
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <StyledCard>
      {/* IMAGE */}
      <Link href={`/shop/${product.slug}`} style={{ textDecoration: "none" }}>
        <ImageWrapper>
          <BaseImage src={firstImage} alt={product.name} />

          {secondImage && (
            <HoverImage
              src={secondImage}
              alt={product.name}
              className="hoverImage"
            />
          )}

          {/* 🗑 Remove */}
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              removeFromWishlist(product.id);
            }}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,

              width: 42,
              height: 42,

              bgcolor: "rgba(255,255,255,0.95)",

              backdropFilter: "blur(6px)",

              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",

              transition: "all 0.2s ease",

              "&:hover": {
                bgcolor: "white",
                transform: "scale(1.05)",
              },
            }}
          >
            <DeleteOutlineIcon
              sx={{
                fontSize: 22,
              }}
            />
          </IconButton>
        </ImageWrapper>
      </Link>

      {/* CONTENT */}
      <StyledCardContent>
        {/* PRODUCT NAME */}
        <Link
          href={`/shop/${product.slug}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 1,

              minHeight: {
                xs: 56,
                md: 64,
              },

              lineHeight: 1.4,
            }}
          >
            {product.name}
          </Typography>
        </Link>

        {/* PRICE */}
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: 15,
          }}
        >
          {Number(product.price).toLocaleString("da-DK")} kr.
        </Typography>

        {/* SIZE SELECTOR */}
        <FormControl
          fullWidth
          size="small"
          sx={{
            mb: 2,
          }}
        >
          <Select
            disabled={isSimpleProduct}
            value={isSimpleProduct ? "one-size" : selectedSize}
            displayEmpty
            onChange={(e) => setSelectedSize(e.target.value)}
            renderValue={(selected) => {
              if (isSimpleProduct) {
                return "One Size";
              }

              if (!selected) {
                return "Vælg en størrelse";
              }

              return selected;
            }}
          >
            {isSimpleProduct ? (
              <MenuItem value="one-size">One Size</MenuItem>
            ) : (
              product.sizes?.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        {/* ADD TO CART */}
        <Button
          variant="contained"
          fullWidth
          disabled={!isSimpleProduct && !selectedSize}
          sx={{
            py: 1.2,
          }}
        >
          Flyt til kurv
        </Button>
      </StyledCardContent>
    </StyledCard>
  );
}
