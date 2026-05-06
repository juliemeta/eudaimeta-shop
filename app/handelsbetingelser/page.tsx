"use client";

import { StyledLink } from "@/components/navbar/Navbar.styles";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Handelsbetingelser() {
  return (
    <StyledContainer>
      <StyledTextWrapper>
        <Typography variant="h1">Handelsbetingelser</Typography>
        <Typography variant="h6">
          Vilkår og betingelser
          <br />
          Version 9.4.24
        </Typography>
        <Typography>
          Når man foretager et køb hos www.eudaimeta.dk bliver man kunde og
          accepterer samtidig de til enhver tid gældende handelsbetingelser.
        </Typography>
        <br />
        {/* Info */}
        <Box>
          <Typography variant="h6" textAlign="left">
            Ansvarlig økonomisk aktør i EU:
          </Typography>
          <Typography>Eudaimeta</Typography>
          <Typography>[Flexum-adresse]</Typography>
          <Link
            href="https://flexum.dk/virtuelt-kontor/formular"
            target="_blank"
          >
            https://flexum.dk/virtuelt-kontor/formular
          </Link>
          <Typography>E-mail: [din mail]</Typography>
          <Typography>CVR: [firma CVR]</Typography>

          <Typography sx={{ mt: 2 }}>
            Bemærk: Ovenstående adresse er udelukkende til juridiske
            henvendelser. Returvarer modtages ikke her. Benyt venligst{" "}
            <Link href="/kontakt">denne formular</Link> hvis du har brug for at
            kontakte kundeservice.
          </Typography>
          <br />
        </Box>
        <br />
        {/* Oversigt */}
        <Typography variant="h5" textAlign="left">
          Oversigt (klik evt. på emne)
        </Typography>
        <Box>
          <StyledLink href="#afgivelse">1. Afgivelse af ordrer</StyledLink>
          <br />
          <StyledLink href="#betaling">2. Betaling</StyledLink>
          <br />
          <StyledLink href="#levering">3. Levering</StyledLink>
          <br />
          <StyledLink href="#retur">4. Retur</StyledLink>
          <br />
          <StyledLink href="#missing-orders">5. Bortkomne ordrer</StyledLink>
          <br />
          <StyledLink href="#copyright">6. Ophavsret</StyledLink>
          <br />
          <StyledLink href="#databeskyttelse">7. Databeskyttelse</StyledLink>
        </Box>
        <br />
        <Box id="afgivelse" title="1. Afgivelse af ordrer">
          <Typography variant="h3" textAlign="left">
            1. Afgivelse af ordrer
          </Typography>
          <Typography>
            En bindende aftale indgås først, når kunden modtager en
            ordrebekræftelse.
          </Typography>
        </Box>
        <br />
        <Box id="betaling" title="2. Betaling">
          <Typography variant="h3" textAlign="left">
            2. Betaling
          </Typography>
          <Typography variant="h4" textAlign="left">
            2.1 Betalingsmetoder
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Vi accepterer Visa, MasterCard samt Apple Pay, Google Pay og
            Microsoft Pay. Betaling trækkes ved bestilling, da produktet
            fremstilles på bestilling (Print-on-Demand).
          </Typography>
        </Box>{" "}
        <br />
        <Box id="levering" title="3. Levering">
          <Typography variant="h3" textAlign="left">
            3. Levering
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Plakater afsendes separat. Du modtager tracking for hver pakke.
          </Typography>

          <Typography variant="h4" textAlign="left">
            3.1 Gratis fragt
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Kampagner for gratis fragt kan forekomme. Beløbet beregnes efter
            rabat.
          </Typography>

          <Typography variant="h4" textAlign="left">
            3.2 Leveringstid
          </Typography>
          <Typography>Produktion: 2-7 hverdage</Typography>
          <Typography>Samlet leveringstid: 5-14 dage</Typography>

          <Typography variant="h4" textAlign="left" sx={{ mt: 2 }}>
            3.3 Leveringsadresse
          </Typography>
          <Typography>
            Kunden er ansvarlig for korrekt adresse. Tracking sendes via e-mail.
          </Typography>
        </Box>
        <br />
        <Box id="retur" title="4. Retur">
          <Typography variant="h3" textAlign="left">
            4. Retur
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Vi tager imod returneringer. Kontakt os venligst via{" "}
            <Link href="/kontakt">denne kontaktformular</Link> før returnering.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.2 Fortrydelsesret
          </Typography>
          <Typography sx={{ mb: 2 }}>
            14 dages fortrydelsesret fra modtagelse.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.3 Returnering
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Varen skal returneres i samme stand. Kunden betaler returfragt.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.4 Refusion
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Refusion sker inden 14 dage efter godkendt retur.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.5 Udvidet returret
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Vi tilbyder 1 års udvidet returret.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.6 Ombytning
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Ombytning er ikke muligt – lav en ny bestilling.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.7 Reklamation
          </Typography>
          <Typography>
            2 års reklamationsret. Kontakt os med billeder før returnering.
          </Typography>
        </Box>
        <br />
        <Box id="missing-orders" title="5. Bortkomne forsendelser">
          <Typography variant="h3" textAlign="left">
            5. Bortkomne forsendelser
          </Typography>
          <Typography>
            Tjek din adresse og kontakt kundeservice med ordrenummer.
          </Typography>
        </Box>
        <br />
        <Box id="copyright" title="6. Ophavsret">
          <Typography variant="h3" textAlign="left">
            6. Ophavsret
          </Typography>
          <Typography>
            Alle designs tilhører Meta Living og må ikke anvendes uden
            tilladelse.
          </Typography>
        </Box>
        <br />
        <Box id="databeskyttelse" title="7. Databeskyttelse">
          <Typography variant="h3" textAlign="left">
            7. Databeskyttelse
          </Typography>
          <Typography>
            Læs mere om cookies og persondata{" "}
            <Link href="/cookies-og-persondata">her</Link>.
          </Typography>
        </Box>
        <br />
      </StyledTextWrapper>
    </StyledContainer>
  );
}
