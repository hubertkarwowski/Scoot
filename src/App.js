import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </Fragment>
  );
}

export default App;
