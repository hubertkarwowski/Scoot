import React from "react";
import { HeroWrapper } from "./CareersHeaderStyles";
import Circles from "../../assets/patterns/white-circles.svg";
function CareersHeader() {
  return (
    <HeroWrapper>
      <h2>Careers</h2>
      <img src={Circles} alt="circles"></img>
    </HeroWrapper>
  );
}

export default CareersHeader;
