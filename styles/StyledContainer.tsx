import { Box } from "@mui/material";

export const StyledContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: "auto",
        padding: {
          xs: 2,
          sm: 3,
          md: 5,
        },
      }}
    >
      {children}
    </Box>
  );
};
