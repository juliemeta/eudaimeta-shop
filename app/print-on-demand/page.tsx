import { StyledContainer } from "@/styles/StyledContainer";
import { StyledTextWrapper } from "@/styles/StyledTextWrapper";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

export default function printOnDemand() {
  return (
    <StyledContainer>
      <StyledTextWrapper>
        <Typography variant="h1">Hvad er Print On Demand?</Typography>
        <Typography variant="h2">Problemet med overproduktion</Typography>
        <Typography>
          Overproduktion er et af de største problemer i modeindustrien – især
          inden for fast fashion. Hver sæson produceres enorme mængder tøj, som
          aldrig bliver solgt. Nyt og ubrugt tøj, som intet fejler, ender i
          værste fald med at blive destrueret. Det handler ikke kun om manglende
          efterspørgsel men også om logistik og økonomi. Tøj, der ikke bliver
          solgt i tide, optager lagerplads og binder værdi. Et klassisk eksempel
          er sommertøj, der ikke bliver udsolgt. Når sæsonen skifter, skal det
          opbevares, hvilket skaber flaskehalse i lageret og forstyrrer flowet.
          Resultatet? Overproduktion og i nogle tilfælde destruktion af helt nye
          varer.
        </Typography>
        <br />
        <Typography variant="h2">En smartere måde at producere på</Typography>
        <Typography>
          Flere virksomheder begynder heldigvis at tage ansvar og gentænke deres
          produktion. Hos os har vi valgt en anden tilgang: Print On Demand
          (POD). Det betyder helt enkelt, at et produkt først bliver
          færdigproduceret, når kunden køber det. I stedet for at producere
          store mængder på forhånd, producerer vi kun det, der rent faktisk er
          efterspørgsel på. Vi samarbejder med en POD-leverandør med produktion
          i Europa, hvilket også hjælper med at reducere transportafstande.
        </Typography>
        <br />
        <Typography variant="h2">Mindre spild, mere mening </Typography>
        <Typography>
          Når du køber hos os, bliver det produkt du køber i vores webshop lavet
          specielt til dig. En t-shirt ligger klar i sin grundform, men designet
          trykkes først på t-shirten, når du køber varen. Det betyder:
          <List>
            <ListItem>✅ ingen overproduktion</ListItem>
            <ListItem>✅ mindre spild</ListItem>
            <ListItem>✅ mere bevidst forbrug</ListItem>
          </List>
          Det er ikke en perfekt løsning – men det er et vigtigt skridt i den
          rigtige retning.
        </Typography>
        <br />
        <Typography variant="h3">Klar til at handle mere bevidst?</Typography>
        <Typography>
          Vi bestræber os på at reducere brugen af plastic i vores emballage. Vi
          er ikke i mål endnu, men vi forbedrer løbende vores løsninger.
          Derudover kører vi heller ikke med tidsbegrænsede sales, som *kan*
          føre til impulskøb, har vi hørt... så hos os behøver du heller ikke
          være nervøs for, at den ting du har forelsket dig i, bliver billigere
          i morgen eller om en måned.
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
  );
}
