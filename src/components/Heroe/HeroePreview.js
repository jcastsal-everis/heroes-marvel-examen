import React from "react";

export default ({ company, name, movie, photoUrl }) => {
  return (
    <div className="col-sm-7">
      <br />
      <br />
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-danger">{company}</strong>
          <h3 className="mb-0">{name}</h3>
          <div className="mb-1 text-muted">{movie}</div>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            className="bd-placeholder-img"
            width="200"
            height="250"
            src={photoUrl}
          />
        </div>
      </div>
    </div>
  );
};
