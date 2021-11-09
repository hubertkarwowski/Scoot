import React from "react";
import { Fragment } from "react";
import CareersHeader from "../../components/AboutHeader/CareersHeader";
import CareersInfo from "../../components/Info/CareersInfo";
import Offers from "../../components/Offers/Offers";
import OurValues from "../../components/OurValues/OurValues";

function Careers() {
  return (
    <Fragment>
      <CareersHeader />
      <CareersInfo />
      <OurValues />
      <Offers />
    </Fragment>
  );
}

export default Careers;
