import React from "react";
import { Link } from "react-router-dom";
//import NavItems from "./NavItems";
import { connect } from "react-redux";
const NavItems = () => {
    return (
    <>
        <Link to="/" className="nav-link">
          <h4>Dashboard</h4>
        </Link>
        <Link to="/signin" className="nav-link">
          <h4>Sign In</h4>
        </Link>
        <Link to="/signup" className="nav-link">
          <h4>Sign up</h4>
        </Link>
        
    </>
    )
}

export default NavItems;