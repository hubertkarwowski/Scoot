import styled from "styled-components";

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-x: hidden;
`;
export const InfoDiv = styled.div`
  width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.large}) {
    flex-direction: row-reverse;
    &:nth-child(2) {
      flex-direction: row;
    }
    text-align: left;
    align-items: center;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  img {
    border-radius: 50%;
    width: 250px;
    @media (min-width: ${({ theme }) => theme.xlarge}) {
      width: 350px;
    }
  }
  .circle2 {
    display: none;
    @media (min-width: ${({ theme }) => theme.large}) {
      position: absolute;
      display: inline-block;
      right: 110%;
      z-index: -1000;
    }
  }
  .circle {
    display: none;
    @media (min-width: ${({ theme }) => theme.large}) {
      position: absolute;
      display: inline-block;
      left: 105%;
      z-index: -1000;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.large}) {
    width: 60%;
    margin: 0 auto;
  }
`;
export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.mono}, Sans-Serif;
  width: 15ch;
  font-size: 32px;
  color: ${({ theme }) => theme.dark};
  margin: 20px 0;
  @media (min-width: ${({ theme }) => theme.medium}) {
    font-size: 48px;
    width: 16ch;
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    width: 100%;
  }
`;
export const SubHeading = styled.p`
  font-family: ${({ theme }) => theme.lexend}, Sans-Serif;
  color: ${({ theme }) => theme.grey};
  width: 80%;
  margin: 20px 0;
  @media (min-width: ${({ theme }) => theme.large}) {
    width: 100%;
  }
`;

export const ButtonDiv = styled.div`
  @media (min-width: ${({ theme }) => theme.large}) {
    margin-right: 75%;
  }
`;
