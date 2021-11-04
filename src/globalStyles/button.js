import "./colors.css";
import "./typography.css";
import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid var(--yellow);
  text-align: center;
  color: var(--white);
  background-color: var(--yellow);
  width: 195px;
  height: 53px;
  font-family: var(--mono);
  font-size: 15px;
  &:hover {
    background-color: var(--white);
    color: var(--yellow);
    cursor: pointer;
  }
`;
