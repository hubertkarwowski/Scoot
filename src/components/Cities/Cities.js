import React from "react";
import Map from "../../assets/images/world-map-mobile.png";
import MapMedium from "../../assets/images/world-map-tablet.png";
import MapDesktop from "../../assets/images/world-map-desktop.png";

import {
  CitiesSection,
  City,
  Info,
  InfoHeading,
  InfoSubheading,
} from "./CitiesStyles";
import { Button } from "../../globalStyles/button";
import { ButtonDiv } from "./CitiesStyles";
function Cities() {
  return (
    <CitiesSection>
      <img className="mobile" src={Map} alt="world map"></img>
      <img className="medium" src={MapMedium} alt="world map"></img>
      <img className="large" src={MapDesktop} alt="world map"></img>
      <City>
        <h2>New York</h2>
      </City>
      <City>
        <h2>London</h2>
      </City>
      <City>
        <h2>Jakarta</h2>
      </City>
      <City>
        <h2>Yokohama</h2>
      </City>
      <Info>
        <InfoHeading>Your City Not Listed?</InfoHeading>
        <InfoSubheading>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </InfoSubheading>
        <ButtonDiv>
          <Button>Message us</Button>
        </ButtonDiv>
      </Info>
    </CitiesSection>
  );
}

export default Cities;
