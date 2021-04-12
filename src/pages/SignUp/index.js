import React, { Component } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Fire from "../../config";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loadingIn: false,
      loadingUp: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    console.log(":hier");
    this.setState({
      loadingIn: true,
    });
    e.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log("sdfghj", u);
        this.setState({
          loadingIn: false,
        });
      })
      .catch((err) => {
        alert(err.message);
        this.setState({
          password: "",
          email: "",
          loadingIn: false,
        });
      });
  };

  signin = (e) => {
    this.setState({
      loadingUp: true,
    });

    e.preventDefault();
    Fire.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res);
        this.setState({
          loadingUp: false,
        });
      })
      .catch((err) => {
        alert(err.message);
        this.setState({
          password: "",
          email: "",
          loadingUp: false,
        });
      });
  };

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };
    return (
      <>
        <div className="login-popup" data-aos="fade-up">
          <div className="box">
            <div className="image-area">
              <div style={{ marginTop: "17px", marginRight: "341px" }}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home Page
                </Link>
              </div>
              <img src="images/download.jpg" style={{ marginTop: "132px" }} />
            </div>

            <div className="form">
              <h3 style={{ fontSize: "41px" }}> Welcome To Groww</h3>
              <form style={{ marginTop: "100px" }}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                    name="password"
                  />
                </div>
                {this.state.loadingIn ? (
                  <button
                    type="button"
                    className="btn-sign"
                    onClick={this.login}
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-sign"
                    onClick={this.login}
                  >
                    LogIn
                  </button>
                )}
                {this.state.loadingUp ? (
                  <button
                    type="button"
                    className="btn-sign"
                    onClick={this.signin}
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-sign"
                    onClick={this.signin}
                  >
                    SignIn
                  </button>
                )}
                <small>(Enter above Email and password to SignIn)</small>
                <div
                  style={{ marginTop: "15px", marginBottom: "15px" }}
                  onClick={this.login}
                >
                  <span>----OR----</span>
                </div>
                <GoogleLogin
                  clientId="564721665312-44h9c6b03q2o6o65af6tcdmn140ljoqi.apps.googleusercontent.com"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
