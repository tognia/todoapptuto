import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { connect } from "react-redux";
const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <h3 className="nav-link">Dashboard</h3>
        </Link>
        <NavItems/>
        </nav>
    </>
    )
}

export default NavBar;