import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="max-w-screen-lg mx-auto  / pb-12 pt-12">
        <div className="row justify-content-center">
          <img
            src="./assets/Logo.png"
            className="logo img-fluid py-2 w-auto"
          ></img>
          <div className="d-flex justify-center mt-3">
            <FaFacebookF size={30} className="icon-color" />
            <GrInstagram size={30} className="ms-4 me-4 icon-color" />
            <FaLinkedinIn size={30} className="icon-color" />
          </div>
          <div className="row mt-16 ">
            <div className="col-md-3 d-flex justify-center">
              <ul>
                <h1 className="mb-3 footer-heading g-book font-bold">
                  heading 1
                </h1>
                <li className="footer-link g-book ">text 1</li>
                <li className="footer-link g-book">text 2</li>
                <li className="footer-link g-book">text 3</li>
              </ul>
            </div>
            <div className="col-md-3 d-flex justify-center">
              <ul>
                <h1 className="mb-3 footer-heading g-book font-bold">
                  heading 2
                </h1>
                <li className="footer-link g-book">text 1</li>
                <li className="footer-link g-book">text 2</li>
                <li className="footer-link g-book">text 3</li>
              </ul>
            </div>
            <div className="col-md-3 d-flex justify-center">
              <ul>
                <h1 className="mb-3 footer-heading g-book font-bold">
                  heading 3
                </h1>
                <li className="footer-link g-book">text 1</li>
                <li className="footer-link g-book">text 2</li>
                <li className="footer-link g-book">text 3</li>
              </ul>
            </div>
            <div className="col-md-3 d-flex justify-center">
              <ul>
                <h1 className="mb-3 footer-heading g-book font-bold">
                  heading 4
                </h1>
                <li className="footer-link g-book">text 1</li>
                <li className="footer-link g-book">text 2</li>
                <li className="footer-link g-book">text 3</li>
              </ul>
            </div>
            <div className=" ps-16 pe-16">
              <hr className="line mt-3  "></hr>
            </div>
          </div>
          <div className="row">
              <p className="text-center g-book footer-link">
                  All right reserved © 2024 Website design by Ascendant
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
