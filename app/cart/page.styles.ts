import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

export const CartPageContainer = styled(Grid)({
  alignItems: "start",
});

export const CartWrapper = styled(Grid)(({ theme }) => ({
  paddingRight: theme.spacing(5),
}));

export const CartContent = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  borderBottom: "1px solid #eee",
  paddingBottom: theme.spacing(2),
}));
