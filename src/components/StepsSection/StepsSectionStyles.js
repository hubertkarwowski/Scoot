import "../../globalStyles/colors.css";
import "../../globalStyles/typography.css";

import styled from "styled-components";

export const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  position: relative;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const StepsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 0;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    margin: 30px auto;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  color: var(--dark);
  margin: 20px 0;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 24px;
    margin-right: 190px;
  }
`;
export const SubHeading = styled.p`
  color: var(--grey);
  width: 85%;
  @media (min-width: 768px) {
    width: 44ch;
  }
`;

export const Icon = styled.div`
  @media (min-width: 768px) {
    margin-right: 40px;
    z-index: 10;
  }
  @media (min-width: 1440px) {
    margin-right: 300px;
  }
`;

export const LineContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    transform: rotate(90deg);
    position: absolute;
    top: 0%;
    left: 8%;
  }
  @media (min-width: 1440px) {
    transform: rotate(0deg);
    top: 25%;
  }
`;
export const LineContainer2 = styled(LineContainer)`
  @media (min-width: 768px) {
    display: inline;
    transform: rotate(90deg);
    position: absolute;
    top: 30%;
    left: 8%;
  }
  @media (min-width: 1440px) {
    top: 25%;
    left: 18%;
    transform: rotate(0);
  }
`;
export const LineContainer3 = styled(LineContainer)`
  @media (min-width: 768px) {
    display: inline;
    transform: rotate(90deg);
    position: absolute;
    top: 70%;
    left: 8%;
  }
  @media (min-width: 1440px) {
    top: 25%;
    left: 29%;
    transform: rotate(0);
  }
`;
export const LineContainer4 = styled(LineContainer)`
  @media (min-width: 1440px) {
    top: 25%;
    left: 44%;
  }
`;
export const LineContainer5 = styled(LineContainer)`
  @media (min-width: 1440px) {
    top: 25%;
    left: 54%;
  }
`;
export const LineContainer6 = styled(LineContainer)`
  @media (min-width: 1440px) {
    top: 25%;
    left: 64%;
  }
`;
export const LineContainer7 = styled(LineContainer)`
  @media (min-width: 1440px) {
    top: 25%;
    left: 0%;
  }
`;
