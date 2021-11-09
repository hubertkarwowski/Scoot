import React from "react";
import { Circle, Container, Section, Wrapper } from "./OurValuesStyles";
import img1 from "../../assets/images/our-tech.jpg";
import img2 from "../../assets/images/our-integrity.jpg";
import img3 from "../../assets/images/our-community.jpg";
import { ImageContainer } from "../Info/AboutInfoStyles";

function OurValues() {
  return (
    <Section>
      <h2>Our Values</h2>
      <Wrapper>
        <Container>
          <ImageContainer>
            <img src={img1} alt="img1"></img>
            <Circle>
              <span>01</span>
            </Circle>
          </ImageContainer>
          <h3>Our tech</h3>

          <p>
            We’re using cutting edge technology to drive accessible urban
            transportation forward. Our fully electric scooters are a joy to
            ride!
          </p>
        </Container>
        <Container>
          <ImageContainer>
            <img src={img2} alt="img2"></img>
            <Circle>
              <span>02</span>
            </Circle>
          </ImageContainer>
          <h3>Our integrity</h3>

          <p>
            We are fully committed to deliver a great yet safe, sustainable
            micro-mobility experience in every city we serve.
          </p>
        </Container>
        <Container>
          <ImageContainer>
            <img src={img3} alt="img3"></img>
            <Circle>
              <span>03</span>
            </Circle>
          </ImageContainer>
          <h3>Our community</h3>

          <p>
            We support every community we serve. All workers are paid a living
            wage based on their location and are Scoot employees.
          </p>
        </Container>
      </Wrapper>
    </Section>
  );
}

export default OurValues;
