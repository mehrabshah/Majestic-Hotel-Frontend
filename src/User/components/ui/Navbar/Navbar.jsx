import React from "react";
import "./Navbar.css";
import { IoIosArrowForward } from "react-icons/io";
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <h4
              className="d-none ms-3 d-xl-block position-absolute text-uppercase heading-fonts"
              style={{ top: 10 }}
            >
              Majestic-Continental Hotel England
            </h4>
            <li className="nav-item ms-2 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/about-us"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/rooms"
              >
                ROOMS
              </NavLink>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/events-celebrations"
              >
                EVENTS & CELEBRATIONS
              </NavLink>
            </li>
            {/* <li className="nav-item ms-2 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/dining"
              >
                DINING
              </NavLink>
            </li> */}
            <li className="nav-item me-lg-5 mt-lg-5">
              <NavLink
                className={({ isActive }) =>
                  "nav-link nav-text" + (isActive ? " active" : "")
                }
                to="/contact-us"
              >
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item mt-lg-5 cursor-pointer">
              <NavLink
                className={({ isActive }) =>
                  "nav-link bg-dark ml-0 ml-xl-4 text-center book-now-btn d-flex align-items-center ps-4 pe-5" +
                  (isActive ? " active" : "")
                }
                to="/booking"
              >
                <span className="nav-text-book-now pe-4"> BOOK NOW </span>
                <IoIosArrowForward size={20} color="#f6d284" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
