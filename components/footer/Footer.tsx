"use client";

import { Box } from "@mui/material";
import Logo from "../logo/LogoLight";
import { FooterContainer } from "./Footer.styles";
import InstagramGrid from "../instagramGrid/InstagramGrid";
import FooterCredits from "./FooterCredits";
import FooterMenu from "./FooterMenu";
import { StyledLink } from "../navbar/Navbar.styles";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function StyledFooter() {
  return (
    <FooterContainer>
      <InstagramGrid />

      <FooterMenu />

      <Box textAlign="center">
        <StyledLink href="https://www.instagram.com/eudaimeta/" target="blank">
          <InstagramIcon color="action" />
          <br />
          <Logo width={70} />
        </StyledLink>
      </Box>

      <FooterCredits />
    </FooterContainer>
  );
}
