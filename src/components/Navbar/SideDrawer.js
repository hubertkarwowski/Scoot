import React from "react";
import { Button } from "../../globalStyles/button";
import {
  ButtonPlaceholder,
  Item,
  Links,
  List,
  Wrapper,
} from "./SideDrawerStyles";

function SideDrawer() {
  return (
    <Wrapper>
      <List>
        <Links to="/about">
          <Item>About</Item>
        </Links>
        <Links to="/location">
          <Item>Location</Item>
        </Links>
        <Links to="/careers">
          <Item>Careers</Item>
        </Links>
      </List>
      <ButtonPlaceholder>
        <Button>Get Scootin</Button>
      </ButtonPlaceholder>
    </Wrapper>
  );
}

export default SideDrawer;
