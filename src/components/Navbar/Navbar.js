import React from "react";
import { Link } from "@reach/router";
import "../../styles/Navbar.css";
import logo from "../../images/marvel-logo.png";

export default () => {
  return (
    <nav className="navbar navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};
