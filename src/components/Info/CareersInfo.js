import React from "react";
import { Button } from "../../globalStyles/button";
import {
  ButtonDiv,
  CircleImg,
  Heading,
  ImageContainer,
  InfoDiv,
  InfoSection,
  SubHeading,
  TextContainer,
} from "./AboutInfoStyles";

import Img1 from "../../assets/images/join-us.jpg";
import Circle from "../../assets/patterns/circle.svg";

function CareersInfo() {
  return (
    <InfoSection>
      <InfoDiv>
        <ImageContainer>
          <img src={Img1} alt="img1" />

          <img className="circle" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Care to join our mission?</Heading>
          <SubHeading>
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </SubHeading>
          <ButtonDiv>
            <Button>Say Hello</Button>
          </ButtonDiv>
        </TextContainer>
      </InfoDiv>
    </InfoSection>
  );
}

export default CareersInfo;