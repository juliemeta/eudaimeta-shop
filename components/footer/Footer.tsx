"use client";

import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import { FooterWrapper } from "./Footer.styles";
import InstagramGrid from "../instagramGrid/InstagramGrid";
import FooterCredits from "./FooterCredits";
import StyledFooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <FooterWrapper>
      <Box textAlign="center">
        <Logo width={100} />
      </Box>
      <InstagramGrid />
      <StyledFooterMenu />
      <FooterCredits />
    </FooterWrapper>
  );
}
