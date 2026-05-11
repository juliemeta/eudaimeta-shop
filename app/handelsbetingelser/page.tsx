"use client";

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
            <Link href="/kontakt">denne formular</Link> hvis man har brug for at
            kontakte kundeservice.
          </Typography>
          <br />
        </Box>
        <br />
        {/* Oversigt */}
        <Typography variant="h5" textAlign="left">
          Oversigt
        </Typography>
        <Box>
          <Link href="#afgivelse">1. Afgivelse af ordre</Link>
          <br />
          <Link href="#betaling">2. Betaling</Link>
          <br />
          <Link href="#levering">3. Levering</Link>
          <br />
          <Link href="#retur">4. Retur</Link>
          <br />
          <Link href="#missing-orders">5. Bortkomne ordrer</Link>
          <br />
          <Link href="#copyright">6. Ophavsret</Link>
          <br />
          <Link href="#databeskyttelse">7. Databeskyttelse</Link>
        </Box>
        <br />
        <Box id="afgivelse" title="1. Afgivelse af ordre">
          <Typography variant="h3" textAlign="left">
            1. Afgivelse af ordre
          </Typography>
          <Typography>
            En bindende aftale indgås først, når kunden modtager en
            ordrebekræftelse pr. mail.
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
            Microsoft Pay. Betaling trækkes umiddelbart efter købet, da
            produktet fremstilles på bestilling (Print on Demand).
          </Typography>
        </Box>{" "}
        <br />
        <Box id="levering" title="3. Levering">
          <Typography variant="h3" textAlign="left">
            3. Levering
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Nogle produkter afsendes separat. Man vil modtage tracking for hver
            pakke.
          </Typography>

          <Typography variant="h4" textAlign="left">
            3.1 Gratis fragt
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Kampagner for gratis fragt kan forekomme. I tilfælde hvor gratis
            fragt betinges af et minimumsordrebeløb, beregnes det samlede
            ordrebeløb efter evt. rabat.
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
            Kunden er ansvarlig for korrekt angivelse af leveringsadresse.
            Trackinginfo sendes via e-mail.
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
            4.1 Fortrydelsesret
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Man har 14 dages fortrydelsesret fra modtagelsen af varen. Det vil
            sige, at man har 14 dage til at meddele, at man fortryder købet.
            Fristen starter den dag, man modtager varen (eller den sidste vare
            ved delt levering). Derefter har man 14 dage til at sende varen
            retur.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.2 Returnering
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Varen skal returneres i samme stand. Kunden betaler returfragt.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.3 Refusion
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Refusion sker inden for 14 dage efter godkendt retur.
          </Typography>

          <Typography variant="h4" textAlign="left">
            4.6 Ombytning
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Det er ikke muligt at ombytte til en anden vare – vi anbefaler
            derfor at benytte fortrydelsesretten jvf. pkt. 4.1 og derefter
            foretage en ny bestilling.
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
            Tjek venligst den angivne leveringsadresse og kontakt herefter
            kundeservice med ordrenummer.
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
