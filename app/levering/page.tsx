import BannerSection from "@/components/banner/BannerSection";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Levering() {
  return (
    <>
      <BannerSection
        title={"Levering og fragt"}
        image="/assets/images/levering.png"
        overlay="#f2f0ecf5"
      />
      <StyledContainer>
        <StyledTextWrapper>
          <Typography variant="h1">Levering</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box>
              <Typography variant="h3">Hvad koster levering?</Typography>
              <Typography sx={{ textAlign: "center" }}>
                Fragt koster altid 29 kr. 💸
              </Typography>
            </Box>

            <Box>
              <Typography variant="h3">Hvornår kommer min pakke?</Typography>
              <Typography>
                Vores Print on Demand-koncept betyder, at vi har brug for typisk
                2 og maks 5 hverdage til at færdigproducere de produkter du har
                købt. Derefter går der mellem 2 og 6 dage med selve leveringen.
                Altså kan du regne med at modtage din pakke inden for typisk
                4-10 hverdage. 📦🏃‍♀️
              </Typography>
            </Box>

            <Box>
              <Typography variant="h3">
                Tracking og separate forsendelser
              </Typography>
              <Typography>
                Hvis din ordre består af flere produkter, kan det forekomme at
                de afsendes separat. Du modtager altid trackinginformation via
                e-mail, så snart din ordre eller dele af din ordre er afsendt.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h3">Produceret på bestilling</Typography>
              <Typography>
                Alle vores produkter fremstilles på bestilling som en del af
                vores Print on Demand-koncept. Det betyder nogle gange en lidt
                længere leveringstid – men også mindre overproduktion og mere
                bevidst forbrug. Tak fordi du støtter mere bevidst produktion.
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
