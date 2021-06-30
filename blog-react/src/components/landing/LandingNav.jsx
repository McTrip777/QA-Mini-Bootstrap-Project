import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav row d-flex w-100">
      <NavLink to="/" exact activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-4 m-0 pt-2 pb-2 ps-0 pe-0">Home</NavLink>
      {/* <NavLink to="/about" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-3 m-0 pt-2 pb-2 ps-0 pe-0">About</NavLink> */}
      <NavLink to="/Login" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-4 m-0 pt-2 pb-2 ps-0 pe-0">Login</NavLink>
      <NavLink to="/Register" activeClassName="bg-dark text-white" className="text-dark text-decoration-none text-center col-4 m-0 pt-2 pb-2 ps-0 pe-0">Register</NavLink>
    </div>
  );
};

export default Nav;
