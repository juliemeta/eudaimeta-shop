import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderTop: "1px solid #e5e5e5",
  borderRadius: "4px !important",
  boxShadow: "none",
  mb: 2,
  overflow: "hidden",
  "&:before": {
    display: "none",
  },
}));

export const ProductAccordion = (props: any) => {
  return <StyledAccordion disableGutters {...props} />;
};
