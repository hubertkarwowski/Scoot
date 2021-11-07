import React from "react";
import {
  ArrowContainer,
  ButtonContainer,
  CircleContainer,
  HeroContainer,
  HeroHeading,
  HeroSubHeading,
  LineContainer,
} from "./HeroStyles.js";
import { ReactComponent as Arrow } from "../../assets/patterns/right-arrow.svg";
import { ReactComponent as Line } from "../../assets/patterns/line.svg";
import { ReactComponent as Circles } from "../../assets/patterns/white-circles.svg";

function Hero() {
  return (
    <HeroContainer>
      <HeroHeading>Scooter sharing made simple</HeroHeading>
      <HeroSubHeading>
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </HeroSubHeading>
      <ButtonContainer>Get Scootin</ButtonContainer>

      <LineContainer>
        <Line />
      </LineContainer>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
      <CircleContainer>
        <Circles />
      </CircleContainer>
    </HeroContainer>
  );
}

export default Hero;
