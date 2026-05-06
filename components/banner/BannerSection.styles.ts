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

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },
});

export const BannerWrapper = styled(Box)({
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
});

export const BannerContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 5),
  maxWidth: 600,
  position: "relative",
  textAlign: "center",
  zIndex: 1,
}));
