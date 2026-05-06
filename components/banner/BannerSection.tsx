"use client";

import { Typography } from "@mui/material";

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
};

export default function BannerSection({
  title,
  image,
  overlay = "#f2f0ec59",
  height = "60vh",
}: BannerSectionProps) {
  return (
    <BannerContainer
      sx={{
        backgroundImage: `url(${image})`,
        height,
        "&::before": {
          background: overlay,
        },
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
