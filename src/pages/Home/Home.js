import React from "react";
import { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import StepsSection from "../../components/StepsSection/StepsSection";

function Home() {
  return (
    <Fragment>
      <Hero />
      <StepsSection />
      <Info />
    </Fragment>
  );
}

export default Home;
