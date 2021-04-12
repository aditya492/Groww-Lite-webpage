import React, { Component } from "react";
import HeroSection from "../HeroSection";
import SignUp from "../../pages/SignUp";
import Fire from "../../config";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListner();
  }
  authListner() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <>{this.state.user ? <HeroSection /> : <SignUp />};</>;
  }
}

export default Root;
