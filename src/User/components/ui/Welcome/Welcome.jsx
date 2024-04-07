import React from "react";
import "./Welcome.css";
import LuxurySlider from "../Luxury-Slider/LuxurySlider";

function Welcome() {
  return (
    <div className="py-3 py-lg-5 my-3 my-lg-5 text-center  our-hotel">
      <div className="max-w-screen-lg mx-auto">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <h2 className="main-heading-font text-center text-uppercase ft-34 mb-5">
              <span className="d-block w-100">WELCOME TO</span>Pearl-Continental
              Hotel Lahore
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
          <div className="col-md-12 col-lg-5 col-xl-5">
            <img src="./assets/side-image-3.jpg" alt="side-image"></img>
          </div>
          <div className="col-md-12 mt-4 mt-md-5">
            <h5 class="border-bottom border-color-dark g-book text-uppercase d-inline-block px-3 pb-2 mx-auto mt-0 mt-md-5 mb-4">
              {" "}
              Accommodation
            </h5>
            <h2 class=" ft-34 mb-3 text-uppercase main-heading-font">
              Luxury Rooms
            </h2>
            <p class="px-0 px-md-5 w-50 mx-auto main-paragraph-font">
              Our hotel rooms offer absolute comfort and a design sensibility
              inspired by soft, muted colour tones. Whether you choose any one
              of our suites or opt for a room, you can always be sure of a
              fantastic sleep to leave you feeling refreshed and revitalized.
            </p>
          </div>
        </div>
      </div>
      {/* <LuxurySlider/>  */}
    </div>
  );
}

export default Welcome;
