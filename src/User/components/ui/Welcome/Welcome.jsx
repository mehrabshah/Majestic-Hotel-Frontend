import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  return (
    <>
      <div className=" pt-lg-5 pb-lg-0  pt-4 pb-4  text-center our-hotel">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto ">
          <div className="row    ms-0 me-0">
            <div className="col-lg-6 lg:pb-0  pb-3 text-center text-lg-start">
              <h3 className="main-heading-font">
                Welcome to{" "}
                <span className="me-2  text-[#d0902e]">
                  The Horizon Hotel <br className="d-none d-lg-block" />
                </span>
                Where Coastal Charm Meets Timeless Elegance
              </h3>
              <p className="pt-4 main-paragraph-font-welcome">
                Located along the picturesque beachfront of Eastbourne lies
                Horizon Hotel, a charming haven boasting comfortable accommodations
                that promise a delightful retreat. With a splendid terrace
                overlooking the glistening waters, a cozy restaurant, and a
                stylish bar, this hotel invites guests to indulge in leisure and
                relaxation.
              </p>
              <p className="pt-4 main-paragraph-font-welcome">
                Experience seaside serenity and hospitality at its finest at
                Horizon Hotel, where every moment is infused with charm and
                relaxation.
              </p>
              <Link to="/about-us">
                <button className="mt-4 border-2 border-[#d0902e] pt-2 pb-2 ps-4 pe-4 text-[#d0902e] font-bold rounded-3xl">
                  Explore
                </button>
              </Link>
            </div>
            <div className="col-lg-6  d-flex justify-center p-lg-4">
              <img src="./assets/sofa.jpg" alt="sofa"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
