import React from "react";


function Search({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          //onChange event that will render search changes //
          onChange={event => handleSearchChange(event)}
        />
      </form>
    </div>
  );
}
export default Search;
