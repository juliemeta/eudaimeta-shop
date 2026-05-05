import { FooterMenuContent, FooterMenuWrapper } from "./FooterMenu.styles";
import { StyledLink } from "../navbar/Navbar.styles";
import Divider from "@mui/material/Divider";
import { StyledContainer } from "@/styles/StyledContainer";
import { Box, Typography } from "@mui/material";

export default function FooterMenu() {
  return (
    <StyledContainer>
      <Divider variant="middle" />

      <FooterMenuWrapper>
        <FooterMenuContent>
          {/* COLUMN 1 */}
          <Box>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="/about">Om os</StyledLink>
              </li>
              <li>
                <StyledLink href="/print-on-demand">Print on demand</StyledLink>
              </li>
              <li>
                <StyledLink href="/blog">Blog</StyledLink>
              </li>
              <li>
                <StyledLink href="/shop">Shop</StyledLink>
              </li>
            </Box>
          </Box>

          {/* COLUMN 2 */}
          <Box>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="/faq">FAQ</StyledLink>
              </li>
              <li>
                <StyledLink href="/shipping">Levering</StyledLink>
              </li>
              <li>
                <StyledLink href="/returpolitik">Retur</StyledLink>
              </li>
              <li>
                <StyledLink href="/kontakt">Kontakt os</StyledLink>
              </li>
            </Box>
          </Box>

          {/* COLUMN 3 */}
          <Box>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="/handelsbetingelser">
                  Handelsbetingelser
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/cookies-og-persondata">
                  Cookie- og persondatapolitik
                </StyledLink>
              </li>
            </Box>
          </Box>

          {/* COLUMN 4 */}
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Følg os
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="#">Instagram</StyledLink>
              </li>
              <li>
                <StyledLink href="#">TikTok</StyledLink>
              </li>
            </Box>
          </Box>
        </FooterMenuContent>
      </FooterMenuWrapper>
    </StyledContainer>
  );
}
