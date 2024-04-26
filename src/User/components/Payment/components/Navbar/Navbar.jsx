import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsBuildingCheck } from "react-icons/bs";
function Navbar() {
  return (
    <nav className="navbar payment-navbar  border-b-2   border-[#9b855b] navbar-expand-xl bg-white pt-0 px-0 px-md-3 pe-lg-5 pb-0 s">
      <div className="container-lg container-fluid nav-padding">
        <NavLink to="/home">
          <img
            src="./assets/Logo.png"
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
            <ul className=" mb-0 flex flex-row">
              <li className="text-[12px] text-[#737373] relative ms-4 me-4   progressbar-active flex flex-col items-center">
                <AiOutlineUser size={30} />
                <span className="pt-2 nav-item">Customer Information</span>
              </li>
              <li className="text-[12px] text-[#737373]  relative  ms-4 me-4 before:left-[-90px]  before:h-[2.5px] before:bottom-[34px]  before:absolute  before:w-32  before:bg-[#BDBDBD]   flex flex-col items-center ">
                <BsCreditCard2Front size={30} />
                <span className="pt-2 nav-item">Payment Information</span>
              </li>
              <li className="text-[12px] text-[#737373] relative  ms-4 me-4 before:left-[-85px] before:h-[2.5px] before:bottom-[34px]  before:absolute  before:w-32  before:bg-[#BDBDBD]   flex flex-col items-center">
                <BsBuildingCheck size={30} />
                <span className="pt-2 nav-item">Booking is Confirmed</span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
