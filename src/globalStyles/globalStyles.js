import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--lexend);
  font-size: 15px;
  line-height: 25px;
}

h1,
h2,
h3,
h4 {
  font-family: var(--mono);
}

h1 {
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -2.5px;
}

h2 {
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.14px;
}

h3 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1.79px;
}

h4 {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.07px;
}

`;
