import React from "react";
import Navbar from "../Navbar";
import "../App/App.css";
import HeroSection from "../HeroSection";
import productApp from "../Products/productApp";
import About from "../../pages/About";
import SignUp from "../../pages/SignUp";
import News from "../../pages/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Errror from "../Errror";
import Root from "../Root";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Root} />
          <Route path="/services" component={HeroSection} />
          <Route path="/products" component={productApp} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/explore" component={HeroSection} />
          <Route path="/us" component={HeroSection} />
          <Route path="/stocks" component={HeroSection} />
          <Route path="/gold" component={HeroSection} />
          <Route path="/About" component={About} />
          <Route path="/dailyNews" component={News} />
          <Route component={Errror} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
