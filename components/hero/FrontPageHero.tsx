"use client";

import { Typography, Button } from "@mui/material";
import {
  HeroContainer,
  HeroContent,
  HeroWrapper,
} from "./FrontPageHero.styles";

export default function FrontPageHero() {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroContent>
            <Typography variant="h1">Out & About</Typography>
            <Button variant="contained" href="/tag/out-and-about">
              Shop nu
            </Button>
          </HeroContent>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
}
