import BannerSection from "@/components/banner/BannerSection";
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
          <Typography variant="h1">Tak for din henvendelse!</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography sx={{ textAlign: "center" }}>
              Vi har modtaget din besked. <br />
              Du vil snart høre fra os.
            </Typography>
          </Box>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
}
