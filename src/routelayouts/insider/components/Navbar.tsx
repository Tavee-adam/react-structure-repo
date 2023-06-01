import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapperInsider">
      <div className="eachNavDivInsider">
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
