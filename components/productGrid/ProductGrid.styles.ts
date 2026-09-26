import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProductGridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));
