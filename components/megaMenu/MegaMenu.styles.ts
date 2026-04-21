import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Accordion, AccordionDetails } from "@mui/material";

export const MegaMenuWrapper = styled(Box)({
  position: "relative",
});

export const MegaMenuDropdown = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,

  width: "100%",
  maxWidth: "600px",

  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),

  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(3),

  zIndex: 10,
  boxSizing: "border-box",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

export const MegaMenuRow = styled(Box)(({ theme }) => ({
  gridColumn: "1 / -1",
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
}));

export const MegaMenuColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

/* 📱 MOBILE DRAWER */

export const MobileMenuContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const MobileMenuItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  backgroundColor: theme.palette.background.default,
}));

export const MobileMenuAccordion = styled(Accordion)({
  boxShadow: "none",
});

export const MobileMenuAccordionDetails = styled(AccordionDetails)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(1),
  }),
);
