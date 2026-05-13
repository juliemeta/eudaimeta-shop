"use client";

import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Divider,
} from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import placeholderImage from "../../public/assets/images/placeholder.png";
import { useCartStore } from "@/lib/store/cartStore";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledLink } from "../navbar/Navbar.styles";
import Dialog from "@mui/material/Dialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProductAccordion, StyledAccordion } from "./SingleProductView.styles";
import { DynamicBreadcrumbs } from "../breadcrumbs/dynamicBreadcrumbs";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useWishlistStore } from "@/lib/store/wishlistStore";

export function SingleProductView({ product }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const selectedImage =
    product.images?.[selectedIndex]?.src || placeholderImage;

  const nextImage = () => {
    if (!product.images?.length) return;

    setSelectedIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    if (!product.images?.length) return;

    setSelectedIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };
  const [qty, setQty] = useState(1);

  const [variations, setVariations] = useState<any[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedVariation, setSelectedVariation] = useState<any>(null);
  const [sizeError, setSizeError] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id),
  );
  const category = product.categories?.[0];

  // 📦 Sizes from variations
  const sizes = useMemo(
    () =>
      Array.from(
        new Set(
          variations.flatMap((v) =>
            v.attributes.map((attr: any) => attr.option),
          ),
        ),
      ).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
    [variations],
  );

  const allOutOfStock =
    product.type === "variable" &&
    variations.length > 0 &&
    variations.every((v) => v.stock_status !== "instock");

  // 🌐 Fetch variations
  useEffect(() => {
    if (product.type !== "variable") return;

    fetch(`/api/variations?productId=${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("VARIATIONS:", data);
        setVariations(data);
      })
      .catch(console.error);
  }, [product.id, product.type]);

  // ⭐ Fetch reviews
  useEffect(() => {
    fetch(`/api/reviews?productId=${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("REVIEWS:", data);
        setReviews(data);
      })
      .catch(console.error);
  }, [product.id]);

  // 🎯 Match selected size → variation
  useEffect(() => {
    if (!selectedSize || variations.length === 0) return;

    const normalize = (str: string) =>
      str.toLowerCase().replace(/\s/g, "").replace("×", "x");

    const match = variations.find((v) =>
      v.attributes.some(
        (attr: any) => normalize(attr.option) === normalize(selectedSize),
      ),
    );

    setSelectedVariation(match || null);
  }, [selectedSize, variations]);

  // 🖼️ Change photo when choosing variation
  useEffect(() => {
    if (selectedVariation?.image?.src) {
      const variationIndex = product.images?.findIndex(
        (img: any) => img.src === selectedVariation.image.src,
      );

      if (variationIndex >= 0) {
        setSelectedIndex(variationIndex);
      }
    } else {
      setSelectedIndex(0);
    }
  }, [selectedVariation, product.images]);

  // ◀ 🖼️ ▶ Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  // Stock logic
  const isInStock =
    product.type === "variable"
      ? selectedVariation
        ? selectedVariation.stock_status === "instock"
        : true //
      : product.stock_status === "instock";

  return (
    <StyledContainer>
      <DynamicBreadcrumbs
        items={[
          {
            label: "Shop",
            href: "/shop",
          },

          ...(product.categories || []).map((cat: any) => ({
            label: cat.name,
            href: `/shop/category/${cat.slug}`,
          })),

          {
            label: product.name,
          },
        ]}
      />
      <Grid container spacing={4}>
        {/* LEFT: Images */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            onClick={() => setLightboxOpen(true)}
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 400, md: 700 },
              cursor: "pointer",
            }}
          >
            <Image
              src={selectedImage || placeholderImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
            />

            {/* LEFT ARROW */}
            <Box
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                cursor: "pointer",
                bgcolor: "rgba(255, 255, 255, 0.38)",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 24,
                userSelect: "none",
              }}
            >
              ←
            </Box>

            {/* RIGHT ARROW */}
            <Box
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                cursor: "pointer",
                bgcolor: "rgba(255,255,255,0.38)",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 24,
                userSelect: "none",
              }}
            >
              →
            </Box>
          </Box>

          {/* THUMBNAILS */}
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {product.images?.map((img: any, index: number) => (
              <Box
                key={img.id}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                sx={{
                  width: 70,
                  height: 70,
                  border:
                    selectedIndex === index
                      ? "2px solid black"
                      : "1px solid #ddd",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="70px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Grid>

        {/* RIGHT: Info */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          {/* 💲 Price */}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {selectedVariation?.price || product.price} kr.
          </Typography>
          {/* 🚫 Out of stock */}
          {product.type === "simple" && !isInStock && (
            <Typography color="error" sx={{ mt: 1 }}>
              Ikke på lager
            </Typography>
          )}
          {product.type === "variable" && allOutOfStock && (
            <Typography color="error" sx={{ mt: 1 }}>
              Produktet er udsolgt
            </Typography>
          )}
          {product.type === "variable" &&
            !allOutOfStock &&
            selectedVariation &&
            selectedVariation.stock_status !== "instock" && (
              <Typography color="error" sx={{ mt: 1 }}>
                Ikke på lager
              </Typography>
            )}
          {/* Product short description */}
          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            {product.short_description?.replace(/<[^>]+>/g, "")}
          </Typography>
          {/* 📏 Size selector */}
          {sizes.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <FormControl fullWidth sx={{ mt: 1 }} error={sizeError}>
                <InputLabel id="size-select-label">Størrelse</InputLabel>

                <Select
                  labelId="size-select-label"
                  value={selectedSize}
                  label="Størrelse"
                  onChange={(e) => {
                    setSelectedSize(e.target.value);
                    setSizeError(false);
                  }}
                >
                  {sizes.map((size: string) => {
                    const isAvailable = variations.some(
                      (v) =>
                        v.attributes.some(
                          (attr: any) => attr.option === size,
                        ) && v.stock_status === "instock",
                    );

                    return (
                      <MenuItem
                        key={size}
                        value={size}
                        disabled={
                          product.type === "simple"
                            ? !isAvailable
                            : selectedVariation
                              ? !isAvailable
                              : false
                        }
                        sx={{ opacity: isAvailable ? 1 : 0.5 }}
                      >
                        {size} {!isAvailable ? "(Udsolgt)" : ""}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/* Error message */}
              {sizeError && (
                <Typography
                  sx={{
                    mt: 1,
                    p: 1.5,
                    backgroundColor: "#f8e7ea",
                    color: "#8a1c2c",
                    fontSize: 14,
                    borderRadius: 1,
                  }}
                >
                  Vælg en tilgængelig størrelse
                </Typography>
              )}
            </Box>
          )}
          {/* Quantity */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <IconButton
              onClick={() => setQty(Math.max(1, qty - 1))}
              disabled={!isInStock}
            >
              -
            </IconButton>

            <TextField
              value={qty}
              size="small"
              sx={{ width: 60, mx: 1 }}
              inputProps={{ style: { textAlign: "center" } }}
              disabled={!isInStock}
            />

            <IconButton onClick={() => setQty(qty + 1)} disabled={!isInStock}>
              +
            </IconButton>
          </Box>

          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* 🛒 Add to cart */}
            <Button
              variant="contained"
              sx={{
                flex: 1,
                backgroundColor: "#c7a4d8",
                "&:hover": { backgroundColor: "#b38cc9" },
              }}
              disabled={product.type === "simple" && !isInStock}
              onClick={() => {
                // ❌ Variant missing
                if (product.type === "variable" && !selectedVariation) {
                  setSizeError(true);
                  return;
                }

                // ❌ Chosen variant out of stock
                if (
                  product.type === "variable" &&
                  selectedVariation?.stock_status !== "instock"
                ) {
                  return;
                }

                // ❌ Simple product out of stock
                if (product.type === "simple" && !isInStock) {
                  return;
                }

                // ✅ Reset error
                setSizeError(false);

                addToCart({
                  id: product.id,
                  variation_id: selectedVariation?.id,
                  name: product.name,
                  price: selectedVariation?.price || product.price,
                  image: product.images?.[0]?.src,
                  quantity: qty,
                  slug: product.slug,
                  size: selectedSize,
                });
              }}
            >
              Læg i kurv
            </Button>

            {/* 💖 Add to wishlist */}
            <IconButton
              onClick={() => {
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
                }
              }}
            >
              {isInWishlist ? (
                <FavoriteIcon sx={{ color: "#d16b86" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>

          {/* Category display */}
          <Divider sx={{ my: 3 }} />
          {product.categories?.length > 0 && (
            <Typography variant="body2" color="text.secondary">
              Kategorier:{" "}
              {product.categories.map((cat: any, index: number) => (
                <span key={cat.id}>
                  <StyledLink href={`/shop/category/${cat.slug}`}>
                    {cat.name}
                  </StyledLink>
                  {index < product.categories.length - 1 && ", "}
                </span>
              ))}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }}>
        {/* BESKRIVELSE */}
        <ProductAccordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>BESKRIVELSE</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </AccordionDetails>
        </ProductAccordion>

        {/* PRODUKTINFORMATION */}
        <ProductAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>PRODUKTINFORMATION</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html: product.acf?.product_info || "Ingen produktinfo endnu.",
              }}
            />
          </AccordionDetails>
        </ProductAccordion>

        {/* STØRRELSESGUIDE */}
        <ProductAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>STØRRELSESGUIDE</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  product.acf?.size_guide || "Ingen størrelsesguide endnu.",
              }}
            />
          </AccordionDetails>
        </ProductAccordion>

        {/* PRODUKTSIKKERHED */}
        <ProductAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>PRODUKTSIKKERHED</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  product.acf?.compliance_info ||
                  "Ingen relevant info om produktsikkerhed.",
              }}
            />
          </AccordionDetails>
        </ProductAccordion>

        {/* ANMELDELSER */}
        <ProductAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>
              ANMELDELSER ({reviews.length})
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            {reviews.length > 0 ? (
              reviews.map((review: any) => (
                <Box
                  key={review.id}
                  sx={{
                    mb: 4,
                    pb: 3,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {/* Navn */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {review.reviewer}
                  </Typography>

                  {/* Rating */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "text.secondary",
                      mb: 1,
                    }}
                  >
                    {"★".repeat(review.rating)}
                  </Typography>

                  {/* Review text */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: review.review,
                    }}
                  />
                </Box>
              ))
            ) : (
              <Typography>Ingen anmeldelser endnu.</Typography>
            )}
          </AccordionDetails>
        </ProductAccordion>
      </Box>

      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        fullScreen
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0,0,0,0.9)",
          },
        }}
      >
        {/* BACKDROP */}
        <Box
          onClick={() => setLightboxOpen(false)}
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* CLOSE */}
          <Box
            onClick={() => setLightboxOpen(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              fontSize: 40,
              cursor: "pointer",
              zIndex: 20,
              userSelect: "none",
            }}
          >
            ✕
          </Box>

          {/* IMAGE WRAPPER */}
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              position: "relative",
              maxWidth: 1200,
              width: {
                xs: "95vw",
                md: "90vw",
              },
              height: {
                xs: "80vh",
                md: "90vh",
              },
            }}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
            />

            {/* LEFT */}
            <Box
              onClick={prevImage}
              sx={{
                position: "absolute",
                top: "50%",
                left: 16,
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "rgba(0,0,0,0.4)",
                color: "white",
                fontSize: 32,
                cursor: "pointer",
                userSelect: "none",
                zIndex: 10,
              }}
            >
              ←
            </Box>

            {/* RIGHT */}
            <Box
              onClick={nextImage}
              sx={{
                position: "absolute",
                top: "50%",
                right: 16,
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "rgba(0,0,0,0.4)",
                color: "white",
                fontSize: 32,
                cursor: "pointer",
                userSelect: "none",
                zIndex: 10,
              }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Dialog>
    </StyledContainer>
  );
}
