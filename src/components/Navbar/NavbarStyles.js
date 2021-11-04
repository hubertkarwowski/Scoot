import "../../globalStyles/colors.css";
import "../../globalStyles/typography.css";

import { Link } from "react-router-dom";

import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: var(--white);
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: var(--mono);
  padding: 0;
  min-width: 55%;
  margin: auto 0;
`;

export const NavbarLogo = styled.li`
  font-size: 48px;
  margin-right: 50px;
  @media (max-width: 375px) {
    font-size: 30px;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
  margin: auto 0;
  margin-right: 32px;
`;

export const NavbarLinkList = styled(NavbarLink)`
  color: var(--grey);
  &:hover {
    color: var(--yellow);
  }
`;
export const NavbarList = styled.li`
  @media (max-width: 375px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin: auto 0;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const NavbarHamburger = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: inline-block;
    margin-right: 70px;
    cursor: pointer;
  }
`;

export const HamburgerContainer = styled.div`
  height: 100vh;
  width: 250px;
  background-color: var(--dark);
  position: absolute;
  top: 96px;
  left: 0%;
  font-family: var(--mono);
`;

export const HamburgerList = styled.div`
  margin-top: 50px;
  list-style: none;
`;

export const HamburgerItem = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  text-align: left;
`;

export const HamburgerLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  &:hover {
    color: var(--yellow);
  }
`;

export const HamburgerButton = styled.div`
  margin-top: 80%;
`;
