import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right">
          <Link to="/heroe/new" className="btn btn-primary ml-auto">
            Nuevo
          </Link>
        </div>
      </div>
    </div>
  );
};
