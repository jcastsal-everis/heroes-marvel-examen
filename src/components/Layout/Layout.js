import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <br />
      {children}
    </React.Fragment>
  );
};
