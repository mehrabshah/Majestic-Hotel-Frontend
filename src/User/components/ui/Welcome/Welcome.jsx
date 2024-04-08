import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      
    <div className=" pt-32 text-center our-hotel">
      <div className="max-w-screen-lg mx-auto ">
        <div className="row    ms-0 me-0">
          <div className="col-lg-7 mb-4 ps-0 pe-0   ps-sm-5 pe-sm-5 ps-lg-0 pe-lg-0  ">
            <h2 className="main-heading-font text-center text-uppercase ft-34 mb-5">
              <span className="d-block w-100">WELCOME TO</span>Majestic-Continental
              Hotel England
            </h2>
            <p className="text-center main-paragraph-font ps-3 pe-3">
              Surround yourself with serenity in the heart of the bustling city
              as we welcome you to Pearl-Continental Hotel Lahore. Experience
              the comforts of home by staying in our modern rooms and suites.
              Enjoy delicious food at our signature restaurants serving both
              international and local cuisines. Relax in the fitness centre, spa
              or swimming pool. With our round-the-clock services, we ensure
              making your stay pleasant and comfortable, each time you vist :
            </p>
          </div>
          <div className="col-lg-5  d-flex justify-center"> 
            <img src="./assets/side-image-3.jpg" alt="side-image"></img>
          </div>
          
        </div>
      </div>
    </div>
    </>

  );
}

export default Welcome;
