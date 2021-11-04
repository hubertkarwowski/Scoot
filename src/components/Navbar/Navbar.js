import React, { useState } from "react";

import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

import { Button } from "../../globalStyles/button";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  ButtonContainer,
  NavbarList,
  NavbarLink,
  NavbarLinkList,
  NavbarHamburger,
  HamburgerContainer,
  HamburgerList,
  HamburgerItem,
  HamburgerLink,
  HamburgerButton,
} from "./NavbarStyles";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <NavbarContainer>
      <NavbarMenu>
        <NavbarHamburger onClick={() => setOpen(!open)}>
          <Hamburger />
        </NavbarHamburger>
        <NavbarLogo>
          <NavbarLink to="/" exact>
            scoot
          </NavbarLink>
        </NavbarLogo>
        <NavbarList>
          <NavbarLinkList to="/about">About</NavbarLinkList>
        </NavbarList>
        <NavbarList>
          <NavbarLinkList to="/location">Location</NavbarLinkList>
        </NavbarList>
        <NavbarList>
          <NavbarLinkList to="/career">Career</NavbarLinkList>
        </NavbarList>
      </NavbarMenu>
      <ButtonContainer>
        <Button>Get Scootin</Button>
      </ButtonContainer>
      {open === true ? (
        <HamburgerContainer>
          <HamburgerList>
            <HamburgerItem>
              <HamburgerLink to="/about">About</HamburgerLink>
            </HamburgerItem>
            <HamburgerItem>
              <HamburgerLink to="/location">Location</HamburgerLink>
            </HamburgerItem>
            <HamburgerItem>
              <HamburgerLink to="/career">Career</HamburgerLink>
            </HamburgerItem>
          </HamburgerList>
          <HamburgerButton>
            <Button>Get scootin</Button>
          </HamburgerButton>
        </HamburgerContainer>
      ) : null}
    </NavbarContainer>
  );
}

export default Navbar;
