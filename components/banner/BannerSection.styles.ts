import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BannerContainer = styled(Box)({
  backgroundSize: "50%",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
});

export const BannerBackground = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
});

export const BannerWrapper = styled(Box)({
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
});

export const BannerContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 5),
  maxWidth: 600,
  position: "relative",
  textAlign: "center",
  transform: "translateY(-30px)",
}));
