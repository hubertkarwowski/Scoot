import styled from "styled-components";

export const CitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 50px auto;
  .medium {
    display: none;
  }
  .large {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .mobile {
      display: none;
    }
    .medium {
      display: inline-block;
    }
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    .medium {
      display: none;
    }
    .large {
      display: inline-block;
      width: 80%;
      margin: 40px auto;
    }
  }
`;

export const City = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.lyellow};
  margin: 10px auto;
  h2 {
    font-size: 24px;
    text-align: center;
    padding: 10px;
    font-family: ${({ theme }) => theme.mono}, Sans-Serif;
    color: ${({ theme }) => theme.dark};
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.large}) {
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;

    h2 {
      font-size: 48px;
      width: 12ch;
      margin: auto 0;
    }
    p {
      width: 30%;
    }
  }
`;
export const InfoHeading = styled.h2`
  font-family: ${({ theme }) => theme.mono}, Sans-Serif;
  color: ${({ theme }) => theme.dark};
  font-size: 32px;
  margin-top: 40px;
`;
export const InfoSubheading = styled.p`
  font-family: ${({ theme }) => theme.lexend}, Sans-Serif;
  color: ${({ theme }) => theme.grey};
  padding: 25px 0;
`;
export const ButtonDiv = styled.div``;
