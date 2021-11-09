import styled from "styled-components";
import CareersMobile from "../../assets/images/about-hero-mobile.jpg";
import CareersMedium from "../../assets/images/about-hero-tablet.jpg";
import CareersLarge from "../../assets/images/about-hero-desktop.jpg";

export const HeroWrapper = styled.section`
  overflow-x: hidden;
  background-image: url(${CareersMobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.medium}) {
    background-image: url(${CareersMedium});
    justify-content: space-between;
    img {
      display: inline-block;
      margin-right: -30px;
    }
    h2 {
      margin-left: 10%;
    }
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    background-image: url(${CareersLarge});
  }
  h2 {
    color: ${({ theme }) => theme.white};
    font-size: 40px;
    font-family: ${({ theme }) => theme.mono};
  }
`;
