import styled from "styled-components";

export const OffersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const Text = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.snow};
  margin: 20px auto;
  width: 90%;
  text-align: center;
  h2 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.mono};
    color: ${({ theme }) => theme.dark};
  }
  p {
    padding: 10px 0;
    color: ${({ theme }) => theme.dark};
    font-family: ${({ theme }) => theme.lexend};
  }
  button {
    margin: 0 auto;
    margin-bottom: 20px;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 40px;

    button {
      margin: auto 0;
    }
    p {
      margin-top: -20px;
    }
  }
`;
