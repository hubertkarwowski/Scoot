import React from "react";
import { HeroWrapper } from "./AboutHeaderStyles";
import Circles from "../../assets/patterns/white-circles.svg";
function AboutHeader() {
  return (
    <HeroWrapper>
      <h2>About</h2>
      <img src={Circles} alt="circles"></img>
    </HeroWrapper>
  );
}

export default AboutHeader;
