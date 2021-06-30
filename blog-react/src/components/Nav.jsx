import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav row d-flex">
      <NavLink to="/" exact activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-3 m-0 pt-2 pb-2">Home</NavLink>
      <NavLink to="/about" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-3 m-0 pt-2 pb-2">About</NavLink>
      <NavLink to="/Login" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-3 m-0 pt-2 pb-2">Login</NavLink>
      <NavLink to="/Register" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-3 m-0 pt-2 pb-2">Register</NavLink>
    </div>
  );
};

export default Nav;
