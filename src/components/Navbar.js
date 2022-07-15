import React from "react";
function Navbar() {
  return (
    <nav>
      <img
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
        alt="AirBnB Logo"
      />
    </nav>
  );
}

export default Navbar;
