import React, { useState } from "react";
import { Button } from "../../globalStyles/button";

import {
  NavbarWrapper,
  NavButton,
  Navigation,
  NavigationDiv,
  NavLink,
  NavList,
  NavLogo,
} from "./NavbarStyles";
import { ReactComponent as Burger } from "../../assets/icons/hamburger.svg";
import SideDrawer from "./SideDrawer";
import { Fragment } from "react";
import { BurgerPlaceholder } from "./SideDrawerStyles";

function Navbar() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  let sideDrawer;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
  }
  return (
    <Fragment>
      <NavbarWrapper>
        <BurgerPlaceholder>
          <Burger onClick={() => drawerToggleClickHandler()} />
        </BurgerPlaceholder>
        <NavigationDiv>
          <Navigation>
            <NavLink exact to="/">
              <NavLogo>scoot</NavLogo>
            </NavLink>

            <NavLink to="/about">
              <NavList>About</NavList>
            </NavLink>

            <NavLink to="/location">
              <NavList>Location</NavList>
            </NavLink>

            <NavLink to="/careers">
              <NavList>Careers</NavList>
            </NavLink>
          </Navigation>
        </NavigationDiv>
        <NavButton>
          <Button>Get Scootin</Button>
        </NavButton>
      </NavbarWrapper>
      {sideDrawer}
    </Fragment>
  );
}

export default Navbar;
