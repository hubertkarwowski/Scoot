import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./globalStyles/globalStyles";
import { theme } from "./globalStyles/theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Locations from "./pages/Locations/Locations";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/location">
              <Locations />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
