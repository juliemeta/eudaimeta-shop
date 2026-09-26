import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const CategoryGridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  gap: theme.spacing(3),
}));
