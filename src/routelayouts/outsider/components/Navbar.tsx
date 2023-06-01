import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <div className="eachNavDiv">
        <Link className="eachLink" to={"/"}>
          Home
        </Link>
      </div>
      <div className="eachNavDiv">
        <Link className="eachLink" to={"/login"}>
          Sign-in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
