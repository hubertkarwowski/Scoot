import "../../globalStyles/colors.css";
import "../../globalStyles/typography.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  margin-top: 70px;
`;
export const FooterUpper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 100%;
  min-height: 300px;
  background-color: var(--dark);
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const FooterText = styled.div`
  width: 50%;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const Text = styled.h2`
  display: flex;
  margin: 0 auto;
  width: 15ch;
  color: var(--white);
  @media (max-width: 375px) {
    text-align: center;
    font-size: 32px;
    width: 17ch;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const ButtonContainer = styled.div`
  margin-right: 20px;
  @media (max-width: 375px) {
    margin: 0 auto;
    margin-top: 20px;
  }
`;
export const CirclesContainer = styled.div`
  position: absolute;
  bottom: -2%;
  left: 50%;
`;

export const FooterLower = styled.div`
  background-color: #333a44;
  font-family: var(--mono);
  height: 96px;
  @media (max-width: 375px) {
    height: 438px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
export const NavLinks = styled.div``;
export const NavList = styled.ul`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;

  margin-left: 40px;
  color: var(--grey);
  &:hover {
    color: var(--yellow);
  }
  @media (max-width: 375px) {
    margin-top: 20px;
  }
`;
export const NavLinkLogo = styled(NavLink)`
  color: var(--white);
  font-size: 48px;
  &:hover {
    color: var(--white);
  }
  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
`;
export const NavIcons = styled.div`
  @media (max-width: 375px) {
    margin-top: 50px;
  }
`;
export const IconsList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;
export const Icon = styled.li`
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;
