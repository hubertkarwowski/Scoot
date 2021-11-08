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
  min-height: 555px;
  color: ${({ theme }) => theme.white};
  position: relative;
  overflow-x: hidden;
  @media (min-width: ${({ theme }) => theme.medium}) {
    background-image: url(${TabletHero});
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    background-image: url(${DesktopHero});
    text-align: left;
  }
`;
export const HeroHeading = styled.h2`
  font-family: ${({ theme }) => theme.mono};
  font-size: 40px;
  margin-top: 100px;
  margin-bottom: 40px;
  @media (min-width: ${({ theme }) => theme.medium}) {
    width: 15ch;
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    font-size: 48px;
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    font-size: 56px;
    margin-right: 35%;
  }
`;
export const HeroSubHeading = styled.p`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.lexend};
  width: 33ch;
  margin-bottom: 10px;
  @media (min-width: ${({ theme }) => theme.medium}) {
    width: 63ch;
    margin-bottom: 70px;
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    margin-right: 30%;
    margin-top: 30px;
    width: 46ch;
  }
`;

export const ButtonContainer = styled(Button)`
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    margin-right: 50%;
  }
`;

export const ArrowDiv = styled.div`
  position: absolute;
  top: 70%;
  right: 60%;
  @media (min-width: ${({ theme }) => theme.large}) {
    right: 70%;
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    top: 53%;
    right: 15%;
  }
`;

export const CircleDiv = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
    position: absolute;
    top: 84%;
    left: 85%;
  }
`;

export const LineDiv = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    display: block;
    position: absolute;
    top: 52.7%;
    left: 0;
  }
`;
