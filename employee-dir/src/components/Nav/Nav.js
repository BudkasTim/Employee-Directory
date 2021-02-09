import React from "react";
import Search from "../Form/index.js";


function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <div className="navbar-collapse row" id="navbarNav">
        <Search handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;
