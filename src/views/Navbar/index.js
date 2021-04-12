import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignUp from "../../pages/SignUp";
import Fire from "../../config";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const logoutClick = () => {
    Fire.auth().signOut();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Groww lite
            <img src="images/download.jpg" width="60" height="60" />
          </Link>{" "}
          <div className="explore">
            <a
              href="https://groww.in/explore/stocks"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Explore</span>
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className="nav-links-mobile">Sign Up</li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" onClick={logoutClick}>
              LogOut
            </Button>
          )}
        </div>
        <signUp />
      </nav>
    </>
  );
}

export default Navbar;
