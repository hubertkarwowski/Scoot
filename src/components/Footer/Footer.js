import React from "react";
import {
  ButtonContainer,
  Buttons,
  CirclesContainer,
  FooterContainer,
  FooterLower,
  FooterText,
  FooterUpper,
  Icon,
  IconsList,
  NavIcons,
  Navigation,
  NavLink,
  NavLinkLogo,
  NavLinks,
  NavList,
  Text,
} from "./FooterStyles";

import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as SemiCircles } from "../../assets/patterns/semi-circles.svg";
import { ReactComponent as Apple } from "../../assets/icons/app-store.svg";
import { ReactComponent as GooglePlay } from "../../assets/icons/google-play.svg";
function Footer() {
  return (
    <FooterContainer>
      <FooterUpper>
        <FooterText>
          <Text>Sign up and Scoot off today</Text>
        </FooterText>
        <Buttons>
          <ButtonContainer>
            <Apple />
          </ButtonContainer>
          <ButtonContainer>
            <GooglePlay />
          </ButtonContainer>
        </Buttons>
        <CirclesContainer>{/* <SemiCircles /> */}</CirclesContainer>
      </FooterUpper>
      <FooterLower>
        <Navigation>
          <NavLinks>
            <NavList>
              <NavLinkLogo>scoot</NavLinkLogo>
              <NavLink>About</NavLink>
              <NavLink>Location</NavLink>
              <NavLink>Careers</NavLink>
            </NavList>
          </NavLinks>
          <NavIcons>
            <IconsList>
              <Icon>
                <Facebook />
              </Icon>
              <Icon>
                <Twitter />
              </Icon>
              <Icon>
                <Instagram />
              </Icon>
            </IconsList>
          </NavIcons>
        </Navigation>
      </FooterLower>
    </FooterContainer>
  );
}

export default Footer;
