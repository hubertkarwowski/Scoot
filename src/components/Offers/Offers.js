import React, { useEffect } from "react";
import { Button } from "../../globalStyles/button";
import { Data } from "./data";
import { Card, OffersSection, Text } from "./OffersStyles";

import Aos from "aos";
import "aos/dist/aos.css";

function Offers() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 600, once: true });
  }, []);
  return (
    <OffersSection>
      {Data.map((item, index) => {
        return (
          <Card key={index} data-aos="zoom-in">
            <Text>
              <h2>{item.position}</h2>
              <p>{item.location}</p>
            </Text>
            <Button>Apply</Button>
          </Card>
        );
      })}
    </OffersSection>
  );
}

export default Offers;
