import { FooterMenuContent, FooterMenuWrapper } from "./FooterMenu.styles";
import { StyledLink } from "../navbar/Navbar.styles";
import Divider from "@mui/material/Divider";
import { StyledContainer } from "@/styles/StyledContainer";
import { Box } from "@mui/material";

export default function FooterMenu() {
  return (
    <StyledContainer>
      <Divider variant="middle" />
      <FooterMenuWrapper>
        <FooterMenuContent>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            <Box component="li">
              <StyledLink href="/about">Om os</StyledLink>
            </Box>
            <Box component="li">
              <StyledLink href="/print-on-demand">Print on demand</StyledLink>
            </Box>
          </Box>
        </FooterMenuContent>
      </FooterMenuWrapper>
    </StyledContainer>
  );
}
