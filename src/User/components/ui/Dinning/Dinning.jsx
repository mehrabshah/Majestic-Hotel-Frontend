import React from "react";
import "./Dinning.css";
import { Link } from "react-router-dom";
import SlideCarousal from "./components/SlideCarousal";
function Dinning() {
  return (
    <div className="Dinning pt-lg-2 ">
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-12 main-heading-font ft-34  leading-9 md:leading-0 text-uppercase text-center mb-3">
            EVENTS & CELEBRATIONS
          </div>
        </div>
      </div>
      <SlideCarousal />
      <div className="mx-auto text-center pt-5  pb-5">
        <Link to="/events-celebrations">
          <button className="border-t-2 border-b-2 border-[#f6d284]   pt-2 pb-2  ps-10 pe-10 hover:border-s-2 hover:border-e-2">
            <span className="text-[#f6d284]    text-2xl  font-extrabold">
              {" "}
              SHOW ALL
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dinning;
