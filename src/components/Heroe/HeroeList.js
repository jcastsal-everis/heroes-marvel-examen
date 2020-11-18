import React from "react";
import HeroeItem from "./HeroeItem";

export default ({ heroes }) => {
  return (
    <div className="container">
      <div className="row mb-2">
        {heroes.map((item) => {
          return (
            <div key={item.id} className="col-md-6">
              <HeroeItem heroe={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
