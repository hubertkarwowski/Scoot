import styled from "styled-components";

export const Section = styled.section`
  margin: 20px 0;
  h2 {
    text-align: center;
    font-family: ${({ theme }) => theme.mono};
    color: ${({ theme }) => theme.dark};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.mono};

  @media (min-width: ${({ theme }) => theme.large}) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  img {
    border-radius: 50%;
  }
  h3 {
    color: ${({ theme }) => theme.dark};
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 24px;
  }
  p {
    font-family: ${({ theme }) => theme.lexend};

    color: ${({ theme }) => theme.grey};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  top: 80%;
  left: 30%;
  width: 96px;
  height: 96px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 50%;
  display: flex;
  span {
    margin: auto;
    font-size: 24px;
    color: ${({ theme }) => theme.dark};
  }
  @media (min-width: ${({ theme }) => theme.xlarge}) {
    left: 35%;
    top: 85%;
  }
`;
