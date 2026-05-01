"use client";

import { Box, Typography } from "@mui/material";
import Logo from "../logo/Logo";
import { FooterWrapper } from "./Footer.styles";
import InstagramGrid from "../instagramGrid/InstagramGrid";

export default function Footer() {
  return (
    <FooterWrapper>
      <Box textAlign="center">
        <Logo width={100} />
      </Box>
      <InstagramGrid />
      <Typography variant="h1">Hello from footer</Typography>
    </FooterWrapper>
  );
}
