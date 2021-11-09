import React from "react";
import { HeroWrapper } from "./CareersHeaderStyles";
import Circles from "../../assets/patterns/white-circles.svg";
function LocationsHeader() {
  return (
    <HeroWrapper>
      <h2>Locations</h2>
      <img src={Circles} alt="circles"></img>
    </HeroWrapper>
  );
}

export default LocationsHeader;
