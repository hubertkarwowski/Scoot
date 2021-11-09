import React, { useEffect } from "react";
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

import Aos from "aos";
import "aos/dist/aos.css";

import Img1 from "../../assets/images/digital-era.jpg";
import Img2 from "../../assets/images/better-living.jpg";
import Circle from "../../assets/patterns/circle.svg";

function AboutInfo() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 280, once: true });
  }, []);
  return (
    <InfoSection>
      <InfoDiv data-aos="fade-left">
        <ImageContainer>
          <img src={Img1} alt="img1" />

          <img className="circle" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Mobility for the digital era</Heading>
          <SubHeading>
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </SubHeading>
        </TextContainer>
      </InfoDiv>
      <InfoDiv data-aos="fade-right">
        <ImageContainer>
          <img src={Img2} alt="img2" />

          <img className="circle2" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Better urban living</Heading>
          <SubHeading>
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </SubHeading>
        </TextContainer>
      </InfoDiv>
    </InfoSection>
  );
}

export default AboutInfo;
