import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl bg-white pt-0 px-0 px-md-3 pe-lg-5 pb-0 ">
      <div className="container-lg container-fluid nav-padding">
        <NavLink to="/home">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="logo img-fluid py-2 w-auto"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-24">
            {/* <ul className="progressbar mb-0">
              <li className="text-[12px] text-main varela-round progressbar-active">
                <span className="none">Customer Information</span>
              </li>
              <li class="text-[12px] progressbar-text-color varela-round ">
                <span className="none">Payment Information</span>
              </li>
              <li class="text-[12px] progressbar-text-color varela-round ">
                <span className="none">Booking is Confirmed</span>
              </li>
            </ul> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
