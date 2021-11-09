import { Link } from "react-router-dom";

import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  background-color: #333a44;
  height: 100%;
  width: 50%;
  top: 96px;
  left: 0;
  z-index: 100;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 10% 10%;
`;
export const Links = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.mono}, Sans-Serif;
  color: ${({ theme }) => theme.snow};
  margin-top: 15%;
`;
export const Item = styled.li``;
export const BurgerPlaceholder = styled.div`
  display: none;
  @media (max-width: 575px) {
    display: inline-block;
  }
`;
export const ButtonPlaceholder = styled.div`
  position: absolute;
  bottom: 28%;
  left: 10%;
`;
