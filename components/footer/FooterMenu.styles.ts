import { Box, styled } from "@mui/material";

export const FooterMenuWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

export const FooterMenuContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(8),
  justifyContent: "center",
  gridTemplateColumns: "repeat(2, max-content)", // mobile

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, max-content)", // desktop
  },
}));
