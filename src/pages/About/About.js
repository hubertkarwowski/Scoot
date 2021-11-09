import React from "react";
import { Fragment } from "react";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import Dropdown from "../../components/Dropdown/Dropdown";
import AboutInfo from "../../components/Info/AboutInfo";
import OurValues from "../../components/OurValues/OurValues";

function About() {
  return (
    <Fragment>
      <AboutHeader />
      <AboutInfo />
      <OurValues />
      <Dropdown />
    </Fragment>
  );
}

export default About;
