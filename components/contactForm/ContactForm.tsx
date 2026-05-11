"use client";

import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [hasSubmitError, setHasSubmitError] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    orderNumber: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    const newErrors = {
      name: !name,
      email: !email,
      subject: !subject,
      message: !message,
      orderNumber: (subject === "retur" || subject === "ordre") && !orderNumber,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) {
      e.preventDefault();

      setHasSubmitError(true);
      return;
    }

    setHasSubmitError(false);
  };

  return (
    <Box
      component="form"
      action="https://formspree.io/f/maqvdznw"
      method="POST"
      noValidate
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 2,
      }}
    >
      <input
        type="hidden"
        name="_next"
        value="https://eudaimeta.dk/kontakt-succes"
      />

      {/* Bot trap */}
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
      />

      {hasSubmitError && (
        <Alert severity="error">Udfyld venligst alle påkrævede felter.</Alert>
      )}
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
        <TextField
          name="name"
          label="Navn"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          helperText={errors.name ? "Indtast venligst dit navn" : ""}
        />

        <TextField
          name="email"
          label="E-mail"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          helperText={errors.email ? "Indtast venligst email" : ""}
        />
      </Box>
      {/* Subject dropdown */}
      <TextField
        name="subject"
        select
        label="Hvad drejer din henvendelse sig om?"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        required
      >
        <MenuItem value="retur">Opret retur</MenuItem>
        <MenuItem value="ordre">Spørgsmål til ordre</MenuItem>
        <MenuItem value="produkt">Spørgsmål til produkt</MenuItem>
        <MenuItem value="reklamation">Reklamation</MenuItem>
        <MenuItem value="andet">Andet</MenuItem>
      </TextField>
      {/* Conditional order number */}
      {(subject === "retur" || subject === "ordre") && (
        <TextField
          name="orderNumber"
          label="Ordrenummer"
          variant="outlined"
          fullWidth
          required
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          error={errors.orderNumber}
          helperText={errors.orderNumber ? "Indtast venligst ordrenummer" : ""}
        />
      )}
      {/* Conditional file upload */}
      {subject === "reklamation" && (
        <>
          <Typography>
            For at vi bedst muligt kan behandle din reklamation, bedes du
            medsende et eller flere billeder.
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{ maxWidth: "40%" }}
          >
            Upload billede(r)
            <input name="attachments" hidden type="file" multiple />
          </Button>
        </>
      )}
      {/* Message */}
      <TextField
        name="message"
        label="Din besked"
        multiline
        rows={8}
        fullWidth
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
        helperText={errors.message ? "Indtast venligst en besked" : ""}
      />
      {/* Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          variant="outlined"
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
