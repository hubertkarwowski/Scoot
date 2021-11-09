import React, { useState } from "react";
import { Data } from "./data";
import { ReactComponent as Icon } from "../../assets/icons/chevron.svg";
import {
  AccordionSection,
  Container,
  DropdownText,
  Wrap,
} from "./DropdownStyles";

function Dropdown() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <AccordionSection>
      <Container>
        <h2>How it works</h2>
        {Data.map((item, index) => {
          return (
            <>
              <h2>{item.title}</h2>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h2>{item.question}</h2>
                <span>
                  <Icon />
                </span>
              </Wrap>
              {clicked === index ? (
                <DropdownText>
                  <p>{item.answer}</p>
                </DropdownText>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  );
}

export default Dropdown;
