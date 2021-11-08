import styled from "styled-components";

export const StepsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  position: relative;
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    flex-direction: row;
  }
`;
export const StepsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 0;
  @media (min-width: ${({ theme }) => theme.medium}) {
    flex-direction: row;
    text-align: left;
    margin: 30px auto;
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.medium}) {
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.dark};
  font-family: ${({ theme }) => theme.mono};
  margin: 20px 0;
  @media (min-width: ${({ theme }) => theme.medium}) {
    margin: 0;
    font-size: 24px;
    margin-right: 190px;
  }
`;
export const SubHeading = styled.p`
  color: ${({ theme }) => theme.grey};
  font-family: ${({ theme }) => theme.lexend};
  width: 85%;
  @media (min-width: ${({ theme }) => theme.medium}) {
    width: 44ch;
  }
`;

export const Icon = styled.div`
  @media (min-width: ${({ theme }) => theme.medium}) {
    margin-right: 40px;
    z-index: 10;
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    margin-right: 300px;
  }
`;
