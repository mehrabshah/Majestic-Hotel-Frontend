import React from "react";
import "./Dinning.css";
import SlideCarousal from "../SlideCarousal/SlideCarousal";

function Dinning() {
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row">
          <div class="col-md-12 main-heading-font ft-34 text-uppercase text-center mb-3">
            Dining
          </div>
        </div>
      </div>
      <SlideCarousal />
      
    </>
  );
}

export default Dinning;
