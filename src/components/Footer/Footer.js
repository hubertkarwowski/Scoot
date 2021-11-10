import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import Google from "../../assets/icons/google-play.svg";
import Apple from "../../assets/icons/app-store.svg";
import Circles from "../../assets/patterns/semi-circles.svg";

import {
  BottomDiv,
  CirclesDiv,
  FooterWrapper,
  Icons,
  Images,
  LinkStyled,
  LinkStyledLogo,
  UpperDiv,
} from "./FooterStyles";

function Footer() {
  return (
    <FooterWrapper>
      <UpperDiv>
        <h2>Sign up and Scoot off today</h2>
        <Images>
          <img src={Apple} alt="apple store button" />
          <img src={Google} alt="google play button" />
        </Images>
        <CirclesDiv>
          <img src={Circles} alt="circles" />
        </CirclesDiv>
      </UpperDiv>
      <BottomDiv>
        <nav>
          <ul>
            <li>
              <LinkStyledLogo exact to="/">
                scoot
              </LinkStyledLogo>
            </li>
            <li>
              <LinkStyled to="/about">About</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/location">Location</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/career">Career</LinkStyled>
            </li>
          </ul>
          <Icons>
            <i>
              <Facebook />
            </i>
            <i>
              <Twitter />
            </i>
            <i>
              <Instagram />
            </i>
          </Icons>
        </nav>
      </BottomDiv>
    </FooterWrapper>
  );
}

export default Footer;
