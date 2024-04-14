import React from "react";
import "./Facilities.css";
const Facilities = () => {
  return (
    <>
      <div class="col-md-12 main-heading-font ft-34 text-uppercase text-center my-4  pb-2 ">
        Facilities
      </div>
      <div className="Facilities-background">
        <div className="Facilities">
          <div className="max-w-screen-lg mx-auto pt-5 pb-5 lg:ps-2 sm:ps-[5rem] sm:pe-[5rem] lg:pe-2 p-5">
            <div className="row">
              <div className="col-md-6 align-self-center text-center order-2 order-md-2 ps-2 pe-2">
                <h5 className="border-bottom text-[#ffffff] border-color-dark d-inline-block px-3 pb-2 mx-auto mb-4 g-light ft-12 mt-5 mt-md-0 text-uppercase">
                  Business Centre
                </h5>
                <h2 className=" ft-30 mb-4 main-heading-facilities">
                  Impeccable Service
                </h2>
                <p className="px-0 px-lg-5 lg:w-75 mx-auto mb-4 ps-2 pe-2  main-paragraph-facilities">
                  Explore our meeting venues with a wide variety of
                  well-equipped conference halls and meeting rooms, perfect for
                  all your events.
                </p>
              </div>
              <div className="col-md-6 align-self-center order-1 order-md-2 lg:p-0">
                <img src="./assets/interior-3.jpg"></img>
              </div>
              <div className="col-md-6 align-self-center order-3 order-md-3 lg:p-0">
                <img src="./assets/interior-2.jpg"></img>
              </div>
              <div className="col-md-6 align-self-center text-center order-4 order-md-4 ps-2 pe-2">
                <h5 class="border-bottom text-[#ffffff] border-color-dark d-inline-block px-3 pb-2 mx-auto mb-4 g-light ft-12 mt-5 mt-md-0 text-uppercase">
                  Spa &amp; Wellness
                </h5>
                <h2 class="main-heading-facilities ft-30 mb-4">
                  Relax &amp; Recover
                </h2>
                <p class="main-paragraph-facilities px-0 px-lg-5 lg:w-75 mx-auto mb-4 g-light">
                  Embark on a soul-soothing journey in our Spa with a variety of
                  treatments and massages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
