import "../../globalStyles/colors.css";
import "../../globalStyles/typography.css";

import styled from "styled-components";

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
  }
`;
export const ImageContainer = styled.div`
  margin-top: 50px;
  @media (min-width: 1440px) {
    margin-left: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Heading = styled.h3`
  width: 15ch;
  font-size: 32px;
  color: var(--dark);
  margin: 20px 0;
  @media (min-width: 768px) {
    font-size: 48px;
    width: 16ch;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;
export const SubHeading = styled.p`
  color: var(--grey);
  width: 80%;
  margin: 20px 0;
  @media (min-width: 1440px) {
    width: 50%;
  }
`;
