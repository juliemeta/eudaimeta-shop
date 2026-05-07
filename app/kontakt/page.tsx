import BannerSection from "@/components/banner/BannerSection";
import ContactForm from "@/components/contactForm/ContactForm";
import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, Typography } from "@mui/material";

export default function Retur() {
  return (
    <>
      <BannerSection
        title={"Kontakt os"}
        image="/assets/images/kontakt.png"
        overlay="#f2f0ecf5"
      />
      <StyledContainer>
        <StyledTextWrapper>
          <Typography variant="h1">Skriv til os</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography sx={{ textAlign: "center" }}>
              Du kan benytte nedenstående kontaktformular for at skrive til os.
              <br />
              Vælg venligst hvad din henvendelse drejer sig om.
            </Typography>

            <ContactForm />
          </Box>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
}
