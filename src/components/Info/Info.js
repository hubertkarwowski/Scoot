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
} from "./InfoStyles";

import Img1 from "../../assets/images/telemetry.jpg";
import Img2 from "../../assets/images/near-you.jpg";
import Img3 from "../../assets/images/payments.jpg";
import Circle from "../../assets/patterns/circle.svg";
import { CircleDiv } from "../Hero/HeroStyles";

function Info() {
  return (
    <InfoSection>
      <InfoDiv>
        <ImageContainer>
          <img src={Img1} alt="img1" />

          <img className="circle" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Easy to use riding telemetry</Heading>
          <SubHeading>
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </SubHeading>
          <ButtonDiv>
            <Button>Learn More</Button>
          </ButtonDiv>
        </TextContainer>
      </InfoDiv>
      <InfoDiv>
        <ImageContainer>
          <img src={Img2} alt="img2" />

          <img className="circle2" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Coming to a city near you</Heading>
          <SubHeading>
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </SubHeading>
          <ButtonDiv>
            <Button>Learn More</Button>
          </ButtonDiv>
        </TextContainer>
      </InfoDiv>
      <InfoDiv>
        <ImageContainer>
          <img src={Img3} alt="img3" />

          <img className="circle" src={Circle} alt="img1" />
        </ImageContainer>
        <TextContainer>
          <Heading>Zero hassle payments</Heading>
          <SubHeading>
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </SubHeading>
          <ButtonDiv>
            <Button>Learn More</Button>
          </ButtonDiv>
        </TextContainer>
      </InfoDiv>
    </InfoSection>
  );
}

export default Info;
