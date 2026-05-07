"use client";

import { Box, Button, MenuItem, TextField } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 2,
      }}
    >
      {/* Name + Email */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 2,
        }}
      >
        <TextField label="Navn" variant="outlined" fullWidth />

        <TextField label="E-mail" type="email" variant="outlined" fullWidth />
      </Box>

      {/* Subject dropdown */}
      <TextField
        select
        label="Hvad drejer din henvendelse sig om?"
        defaultValue=""
        fullWidth
      >
        <MenuItem value="retur">Opret retur</MenuItem>
        <MenuItem value="ordre">Spørgsmål til ordre</MenuItem>
        <MenuItem value="levering">Levering</MenuItem>
        <MenuItem value="produkt">Spørgsmål til produkt</MenuItem>
        <MenuItem value="andet">Andet</MenuItem>
      </TextField>

      {/* Message */}
      <TextField label="Din besked" multiline rows={8} fullWidth />

      {/* Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Send besked
        </Button>
      </Box>
    </Box>
  );
}
