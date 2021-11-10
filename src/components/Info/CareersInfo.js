import React, { useEffect } from "react";
import { Button } from "../../globalStyles/button";
import {
  ButtonDiv,
  Heading,
  ImageContainer,
  InfoDiv,
  InfoSection,
  SubHeading,
  TextContainer,
} from "./AboutInfoStyles";

import Aos from "aos";
import "aos/dist/aos.css";

import Img1 from "../../assets/images/join-us.jpg";
import Circle from "../../assets/patterns/circle.svg";

function CareersInfo() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 600, once: true });
  }, []);
  return (
    <InfoSection data-aos="zoom-in">
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
