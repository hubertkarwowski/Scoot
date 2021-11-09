import React from "react";
import { Fragment } from "react";
import LocationsHeader from "../../components/AboutHeader/LocationsHeader";
import Cities from "../../components/Cities/Cities";

function Locations() {
  return (
    <Fragment>
      <LocationsHeader />
      <Cities />
    </Fragment>
  );
}

export default Locations;
