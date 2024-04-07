import React from "react";
import "./Navbar.css";
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl bg-white   pt-0 px-0 px-md-3 pe-lg-5 pb-0 ">
      <div className="container-lg container-fluid nav-padding">
          <img src="./assets/logo.png" className="logo img-fluid py-2 w-auto"/>
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <h4
              class="d-none ms-3 d-lg-block position-absolute text-uppercase heading-fonts "
              style={{ top: 10 }}
              href="#"
            >
              Majestic-Continental Hotel Lahore
            </h4>
            <li className="nav-item ms-2 mt-lg-5">
              <a
                className="nav-link active nav-text"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <a className="nav-link nav-text" aria-current="page" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <a className="nav-link nav-text" href="#">
                ROOMS
              </a>
            </li>
            <li className="nav-item ms-2 mt-lg-5">
              <a className="nav-link nav-text" href="#">
                EVENTS & CELEBRATIONS
              </a>
            </li>

            <li className="nav-item ms-2 mt-lg-5">
              <a className="nav-link nav-text" href="#">
                DINNING
              </a>
            </li>
            <li className="nav-item me-lg-5 mt-lg-5">
              <a className="nav-link nav-text" href="#">
                CONTACT US
              </a>
            </li>
            <li className="nav-item mt-lg-5">
              <a
                class="nav-link bg-dark ml-0 ml-xl-4  text-center book-now-btn d-flex align-items-center ps-4 pe-5"
                id="booknow-header-btn"
                data-toggle="modal"
                data-target="#booking"
              >
                <span className="nav-text-book-now pe-4"> BOOK NOW </span>{" "}
                <IoIosArrowForward size={10} color="f6d284" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
