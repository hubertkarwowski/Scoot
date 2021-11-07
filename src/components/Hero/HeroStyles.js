import "../../globalStyles/colors.css";
import "../../globalStyles/typography.css";

import MobileHero from "../../assets/images/home-hero-mobile.jpg";
import TabletHero from "../../assets/images/home-hero-tablet.jpg";
import DesktopHero from "../../assets/images/home-hero-desktop.jpg";

import styled from "styled-components";
import { Button } from "../../globalStyles/button";

export const HeroContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${MobileHero});
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 650px;
  color: var(--white);
  position: relative;
  overflow-x: hidden;
  @media (min-width: 768px) {
    background-image: url(${TabletHero});
  }
  @media (min-width: 1440px) {
    background-image: url(${DesktopHero});
    text-align: left;
  }
`;
export const HeroHeading = styled.h2`
  margin-top: 100px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 15ch;
  }
  @media (min-width: 1440px) {
    font-size: 56px;
    margin-right: 900px;
    margin-top: 190px;
  }
`;
export const HeroSubHeading = styled.p`
  width: 33ch;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 63ch;
    margin-bottom: 70px;
  }
  @media (min-width: 1440px) {
    width: 45ch;
    margin-right: 500px;
    margin-top: 10px;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 70%;
  right: 65%;
  @media (min-width: 768px) {
    right: 60%;
  }
  @media (min-width: 1440px) {
    right: 10%;
    top: 60%;
  }
`;

export const CircleContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    position: absolute;
    top: 81.5%;
    left: 74%;
  }
  @media (min-width: 1440px) {
    display: inline;
    position: absolute;
    top: 71.5%;
    left: 98%;
  }
`;

export const LineContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: inline;
    position: absolute;
    top: 60%;
    right: 90%;
  }
`;

export const ButtonContainer = styled(Button)`
  @media (min-width: 1440px) {
    margin-right: 720px;
  }
`;
