import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/assets/images/galaxy-red-vandflaske.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "95vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

export const HeroWrapper = styled(Box)({
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
});

export const HeroContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 5),
  maxWidth: 600,
  position: "relative",
  textAlign: "center",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "#ffffffc0",
    zIndex: 0,
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));
