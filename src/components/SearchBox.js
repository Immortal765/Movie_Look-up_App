import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
