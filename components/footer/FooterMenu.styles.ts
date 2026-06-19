import { Box, styled } from "@mui/material";

export const FooterMenuWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 4),
}));

export const FooterMenuContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(5),

  gridTemplateColumns: "max-content",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, max-content)",
    gap: theme.spacing(8),
    justifyContent: "center",
  },
}));
