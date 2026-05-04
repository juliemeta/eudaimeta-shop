import Link from "next/link";
import {
  FooterMenuContainer,
  FooterMenuContent,
  FooterMenuWrapper,
} from "./FooterMenu.styles";

export default function FooterMenu() {
  return (
    <FooterMenuContainer>
      <FooterMenuWrapper>
        <FooterMenuContent>
          <Link href="@about">Om os</Link>
        </FooterMenuContent>
      </FooterMenuWrapper>
    </FooterMenuContainer>
  );
}
