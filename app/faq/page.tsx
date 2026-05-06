"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";

export default function Faq() {
  return (
    <StyledContainer>
      <StyledTextWrapper>
        <Typography variant="h1" gutterBottom>
          FAQ
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Her finder du svar på de mest almindelige spørgsmål om levering,
          returnering og vores Print on Demand-koncept.
        </Typography>

        <Accordion disableGutters elevation={0}>
          <AccordionSummary expandIcon={<AddIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Hvad betyder Print on Demand?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Print on Demand betyder, at dit produkt først bliver produceret,
              når du bestiller det. På den måde undgår vi overproduktion og
              unødvendigt spild.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0}>
          <AccordionSummary expandIcon={<AddIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Hvor lang er leveringstiden?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Produktion tager typisk 2–7 hverdage. Den samlede leveringstid i
              Danmark er normalt 5–14 dage.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0}>
          <AccordionSummary expandIcon={<AddIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Kan jeg returnere min ordre?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Ja. Du har 14 dages fortrydelsesret fra den dag, du modtager din
              ordre.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0}>
          <AccordionSummary expandIcon={<AddIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Sender I i plasticfri emballage?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Vi forsøger løbende at minimere brugen af plastic og optimere
              vores emballage med mere bæredygtige løsninger.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0}>
          <AccordionSummary expandIcon={<AddIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Hvordan kontakter jeg kundeservice?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Du kan kontakte os via kontaktformularen på siden “Kontakt os”.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </StyledTextWrapper>
    </StyledContainer>
  );
}
