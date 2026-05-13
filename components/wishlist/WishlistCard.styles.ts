import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden",

  boxShadow: "none",

  borderRadius: 0,

  backgroundColor: "transparent",

  border: "none",

  "@media (hover: hover)": {
    "&:hover .hoverImage": {
      opacity: 1,
    },

    "&:hover .removeButton": {
      transform: "scale(1.05)",
    },
  },
}));

export const ImageWrapper = styled(Box)({
  position: "relative",

  width: "100%",

  aspectRatio: "1 / 1",

  overflow: "hidden",

  backgroundColor: "#f7f7f7",
});

export const BaseImage = styled("img")({
  width: "100%",
  height: "100%",

  objectFit: "cover",

  display: "block",
});

export const HoverImage = styled("img")({
  position: "absolute",

  top: 0,
  left: 0,

  width: "100%",
  height: "100%",

  objectFit: "cover",

  opacity: 0,

  transition: "opacity 0.18s ease",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,

  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(2, 0, 0),

  "&:last-child": {
    paddingBottom: 0,
  },

  "& .MuiTypography-h6": {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
  },
}));
