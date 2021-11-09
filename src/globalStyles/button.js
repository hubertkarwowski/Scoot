import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.yellow};
  text-align: center;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};
  width: 195px;
  height: 53px;
  font-family: ${({ theme }) => theme.mono}, Sans-Serif;
  font-size: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.yellow};
    cursor: pointer;
  }
  @media (max-width: 475px) {
    width: 120px;
    height: 38px;
  }
`;
