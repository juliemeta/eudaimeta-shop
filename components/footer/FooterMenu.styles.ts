import { Box, Grid, styled } from "@mui/material";

export const FooterMenuContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(5),
}));

export const FooterMenuWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const FooterMenuContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));
