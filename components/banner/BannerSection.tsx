"use client";

import { Box, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";

import {
  BannerContainer,
  BannerContent,
  BannerWrapper,
  BannerBackground,
} from "./BannerSection.styles";

type BannerSectionProps = {
  title: string;
  image: string;
  overlay?: string;
  height?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  titleColor?: string;
};

export default function BannerSection({
  title,
  image,
  overlay = "#f2f0ec59",
  height = "30vh",
  sx,
  children,
  titleColor,
}: BannerSectionProps) {
  return (
    <BannerContainer
      sx={{
        backgroundImage: `url(${image})`,
        height,
        "&::before": {
          background: overlay,
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        {children}
      </Box>

      <BannerWrapper>
        <BannerContent>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              color: titleColor,
            }}
          >
            {title}
          </Typography>
        </BannerContent>
      </BannerWrapper>
    </BannerContainer>
  );
}
