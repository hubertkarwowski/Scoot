import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        {/* <Home />
        <Footer /> */}
      </Router>
    </Fragment>
  );
}

export default App;
