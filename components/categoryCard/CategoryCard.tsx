import { Box, Typography } from "@mui/material";

export default function CategoryCard({ category }: any) {
  return (
    <Box>
      <img
        src={category.image?.src}
        alt={category.name}
        style={{ width: "100%", borderRadius: "50%" }}
      />

      <Typography variant="h6" sx={{ mt: 1 }}>
        {category.name}
      </Typography>
    </Box>
  );
}
