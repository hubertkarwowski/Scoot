import { Link } from "react-router-dom";

import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  min-width: 100%;
  min-height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavigationDiv = styled.div`
  font-family: ${({ theme }) => theme.mono};
  margin-right: 25%;
`;
export const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
`;
export const NavLogo = styled.li`
  font-size: 3rem;
  color: ${({ theme }) => theme.dark};
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin-left: 2.7rem;
    font-size: 2rem;
  }
`;
export const NavList = styled.li`
  color: ${({ theme }) => theme.grey};
  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const NavButton = styled.div`
  margin-right: 13%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 15%;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin-left: 10%;
  }
`;
