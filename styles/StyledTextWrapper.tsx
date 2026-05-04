import { Box } from "@mui/material";

export const StyledTextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Box sx={{ maxWidth: "65ch", mx: "auto" }}>{children}</Box>;
};
