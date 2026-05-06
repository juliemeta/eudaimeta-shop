import { FooterMenuContent, FooterMenuWrapper } from "./FooterMenu.styles";
import { StyledLink } from "../navbar/Navbar.styles";
import Divider from "@mui/material/Divider";
import { StyledContainer } from "@/styles/StyledContainer";
import { Box, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function FooterMenu() {
  return (
    <StyledContainer>
      <Divider variant="middle" />

      <FooterMenuWrapper>
        <FooterMenuContent>
          {/* COLUMN 1 */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
              Eudaimeta
            </Typography>
            <Box component="ul" sx={{ listStyleType: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="/about">Om os</StyledLink>
              </li>
              <li>
                <StyledLink href="/print-on-demand">Vores koncept</StyledLink>
              </li>
              <li>
                <StyledLink href="/faq">FAQ</StyledLink>
              </li>
            </Box>
          </Box>

          {/* COLUMN 2 */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
              Kundeservice
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
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
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
              Inspiration
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink
                  href="https://www.instagram.com/eudaimeta/"
                  target="_blank"
                >
                  Instagram <OpenInNewIcon sx={{ fontSize: 14 }} />
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/blog">Blog</StyledLink>
              </li>
              <li>
                <StyledLink href="/shop">Shop</StyledLink>
              </li>
            </Box>
          </Box>

          {/* COLUMN 4 */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
              Vilkår
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <StyledLink href="/handelsbetingelser">
                  Handelsbetingelser
                </StyledLink>
              </li>
              <li>
                <StyledLink href="/cookies-og-persondata">
                  Cookies og persondata
                </StyledLink>
              </li>
            </Box>
          </Box>
        </FooterMenuContent>
      </FooterMenuWrapper>
    </StyledContainer>
  );
}
