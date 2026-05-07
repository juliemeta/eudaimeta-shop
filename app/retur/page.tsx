import BannerSection from "@/components/banner/BannerSection";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Retur() {
  return (
    <>
      <BannerSection
        title={"Hvis du ombestemmer dig..."}
        image="/assets/images/retur.png"
        overlay="#f2f0ecf5"
      />
      <StyledContainer>
        <StyledTextWrapper>
          <Typography variant="h1">Retur</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography sx={{ textAlign: "center" }}>
              Hvis du ønsker at sende en vare retur, guider vi dig gennem
              processen her.
            </Typography>

            <Box>
              <Typography variant="h2">Trin 1</Typography>
              <Typography variant="h3">Giv os besked</Typography>
              <Typography>
                Benyt venligst{" "}
                <Link href="/kontakt">denne kontaktformular</Link>, såfremt du
                ønsker at sende en vare retur. Giv os besked inden for 14 dage
                efter du har modtaget varen. <br />
                Obs! Man betaler selv for returfragten.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h2">Trin 2</Typography>
              <Typography variant="h3">
                Book retur eller send selv retur
              </Typography>
              <Typography>
                Når du har oprettet en retur, vil du modtage en bekræftelse på
                mail. I mailen vil du finde et link til oprettelse af labelfri
                retur, så du slipper for at printe labels derhjemme.
                <br />
                Det er helt valgfrit, hvordan du ønsker at sende retur – men vi
                anbefaler den labelfri løsning, da det er den nemmeste.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h2">Trin 3</Typography>
              <Typography variant="h3">Aflevér i pakkeshop</Typography>
              <Typography>
                Når du har pakket varen forsvarligt ind (evt. i samme emballage,
                som varen kom i), er det bare at få den afleveret i nærmeste
                pakkeshop! Gem din kvittering for aflevering. <br />
                Når vi har modtaget og godkendt returvaren, refunderes beløbet
                automatisk til den betalingsmetode, du brugte ved bestilling.
              </Typography>
            </Box>
          </Box>
        </StyledTextWrapper>

        <Box sx={{ textAlign: "center" }}>
          <br />
          <Link href="/shop" style={{ textDecoration: "none" }}>
            👉 Udforsk vores univers af produkter skabt med omtanke.
          </Link>
          <br />
          <br />
          -💚-
        </Box>
      </StyledContainer>
    </>
  );
}
