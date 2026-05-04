"use client";

import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import { FooterContainer } from "./Footer.styles";
import InstagramGrid from "../instagramGrid/InstagramGrid";
import FooterCredits from "./FooterCredits";
import FooterMenu from "./FooterMenu";

export default function StyledFooter() {
  return (
    <FooterContainer>
      <Box textAlign="center">
        <Logo width={100} />
      </Box>
      <InstagramGrid />
      <FooterMenu />
      <FooterCredits />
    </FooterContainer>
  );
}
