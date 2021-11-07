import React from "react";
import { ReactComponent as Locate } from "../../assets/icons/locate.svg";
import { ReactComponent as Scooter } from "../../assets/icons/scooter.svg";
import { ReactComponent as Ride } from "../../assets/icons/ride.svg";
import { ReactComponent as Line } from "../../assets/patterns/line-white.svg";
import {
  Heading,
  Icon,
  InfoContainer,
  LineContainer,
  LineContainer2,
  LineContainer3,
  LineContainer4,
  LineContainer5,
  LineContainer6,
  LineContainer7,
  StepsContainer,
  StepsDiv,
  SubHeading,
} from "./StepsSectionStyles";

function StepsSection() {
  return (
    <StepsContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <LineContainer2>
        <Line />
      </LineContainer2>
      <LineContainer3>
        <Line />
      </LineContainer3>
      <LineContainer4>
        <Line />
      </LineContainer4>
      <LineContainer5>
        <Line />
      </LineContainer5>
      <LineContainer6>
        <Line />
      </LineContainer6>
      <LineContainer7>
        <Line />
      </LineContainer7>
      <StepsDiv>
        <Icon>
          <Locate />
        </Icon>
        <InfoContainer>
          <Heading>Locate with app</Heading>
          <SubHeading>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </SubHeading>
        </InfoContainer>
      </StepsDiv>
      <StepsDiv>
        <Icon>
          <Scooter />
        </Icon>
        <InfoContainer>
          <Heading>Pick your scooter</Heading>
          <SubHeading>
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </SubHeading>
        </InfoContainer>
      </StepsDiv>
      <StepsDiv>
        <Icon>
          <Ride />
        </Icon>
        <InfoContainer>
          <Heading>Enjoy the ride</Heading>
          <SubHeading>
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </SubHeading>
        </InfoContainer>
      </StepsDiv>
    </StepsContainer>
  );
}

export default StepsSection;