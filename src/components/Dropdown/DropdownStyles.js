import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  margin: 0 auto;
  margin-bottom: 80px;
`;
export const Container = styled.div`
  width: 90%;
  h2 {
    font-size: 28px;
    margin: 15px auto;
    font-family: ${({ theme }) => theme.mono}, Sans-Serif;
    color: ${({ theme }) => theme.dark};
    text-align: center;
  }
`;
export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.snow};
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h2 {
    font-size: 18px;
    margin: 15px 20px;
    font-family: ${({ theme }) => theme.mono}, Sans-Serif;
    color: ${({ theme }) => theme.dark};
    text-align: left;
  }
  span {
    margin: 0 10px;
  }
`;
export const DropdownText = styled.div`
  p {
    font-family: ${({ theme }) => theme.lexend}, Sans-Serif;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.snow};
    padding: 20px 15px;
    margin-top: -20px;
  }
`;
