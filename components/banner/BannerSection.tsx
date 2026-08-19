"use client";

import { SxProps, Theme, Typography } from "@mui/material";

import {
  BannerContainer,
  BannerContent,
  BannerWrapper,
} from "./BannerSection.styles";

type BannerSectionProps = {
  title: string;
  image: string;
  overlay?: string;
  height?: string;
  sx?: SxProps<Theme>;
};

export default function BannerSection({
  title,
  image,
  overlay = "#f2f0ec59",
  height = "30vh",
  sx,
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
      <BannerWrapper>
        <BannerContent>
          <Typography variant="h1" component="h2">
            {title}
          </Typography>
        </BannerContent>
      </BannerWrapper>
    </BannerContainer>
  );
}
