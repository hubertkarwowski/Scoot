import React, { useEffect } from "react";
import Map from "../../assets/images/world-map-mobile.png";
import MapMedium from "../../assets/images/world-map-tablet.png";
import MapDesktop from "../../assets/images/world-map-desktop.png";

import Aos from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 280, once: true });
  }, []);
  return (
    <CitiesSection>
      <img
        className="mobile"
        src={Map}
        alt="world map"
        data-aos="zoom-in"
      ></img>
      <img
        className="medium"
        src={MapMedium}
        alt="world map"
        data-aos="zoom-in"
      ></img>
      <img
        className="large"
        src={MapDesktop}
        alt="world map"
        data-aos="zoom-in"
      ></img>
      <City data-aos="fade-right">
        <h2>New York</h2>
      </City>
      <City data-aos="fade-left">
        <h2>London</h2>
      </City>
      <City data-aos="fade-right">
        <h2>Jakarta</h2>
      </City>
      <City data-aos="fade-left">
        <h2>Yokohama</h2>
      </City>
      <Info data-aos="zoom-in">
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
