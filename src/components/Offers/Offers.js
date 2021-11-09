import React from "react";
import { Button } from "../../globalStyles/button";
import { Data } from "./data";
import { Card, OffersSection, Text } from "./OffersStyles";

function Offers() {
  return (
    <OffersSection>
      {Data.map((item, index) => {
        return (
          <Card>
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
