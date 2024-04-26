import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl bg-white pt-0 px-0 px-md-3 pe-lg-5 pb-0 ">
      <div className="container-lg container-fluid nav-padding">
        <NavLink to="/home">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="logo img-fluid py-2 w-auto"
          />
        </NavLink>
        <div >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  cursor-pointer">
             Currency
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar