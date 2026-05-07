import BannerSection from "@/components/banner/BannerSection";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

export default function printOnDemand() {
  return (
    <>
      <BannerSection
        title={"Alt du skal vide om leveringstid og -priser"}
        image="/assets/images/levering.png"
        overlay="#f2f0ecf5"
      />
      <StyledContainer>
        <StyledTextWrapper>
          <Typography variant="h1">Levering</Typography>
          <Typography variant="h3">Hvad koster levering?</Typography>
          <Typography sx={{ textAlign: "center" }}>
            Fragt koster altid 29 kr. 💸
          </Typography>
          <br />

          <Typography variant="h3">Hvornår kommer min pakke?</Typography>
          <Typography>
            Vores Print on Demand-koncept betyder, at vi har brug for typisk 2
            og maks 5 hverdage til at færdigproducere det/ de ting du har købt.
            Derefter går der mellem 2 og 6 dage med selve leveringen. Altså kan
            du regne med at modtage din pakke inden for typisk 4-10 hverdage.
            📦🏃‍♀️
          </Typography>
          <br />

          <Typography variant="h3">
            Tracking og separate forsendelser
          </Typography>
          <Typography>
            Hvis din ordre består af flere produkter, kan det forekomme, at
            sendes separat og altså ankommer i flere pakker. Du modtager altid
            trackinginformation via e-mail, så snart din ordre er afsendt.
          </Typography>
          <br />

          <Typography variant="h3">Produceret på bestilling</Typography>
          <Typography>
            Alle vores produkter fremstilles på bestilling som en del af vores
            Print on Demand-koncept. Det betyder nogle gange en lidt længere
            leveringstid – men også mindre overproduktion og mere bevidst
            forbrug. Tak for din tålmodighed. 🌟
          </Typography>
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
