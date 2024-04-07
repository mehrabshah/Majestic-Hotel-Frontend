import React from "react";

const Facilities = () => {
  return (
    <>
      <div class="col-md-12 main-heading-font ft-34 text-uppercase text-center my-4 ">
        Facilities
      </div>
      <div className="Facilities">
        <div className="max-w-screen-lg mx-auto">
          <div className="row">
            <div className="col-md-6 align-self-center text-center order-2 order-md-2">
              <h5 className="border-bottom border-color-dark d-inline-block px-3 pb-2 mx-auto mb-4 g-light ft-12 mt-5 mt-md-0 text-uppercase">
                Business Centre
              </h5>
              <h2 className=" ft-30 mb-4 main-heading-font">Impeccable Service</h2>
              <p className="px-0 px-lg-5 w-75 mx-auto mb-4 ps-2 pe-2 main-paragraph-font">Explore our meeting venues with a wide variety of well-equipped conference halls and meeting rooms, perfect for all your events.</p>
            </div>
            <div className="col-md-6 align-self-center order-1 order-md-2">
                <img src="./assets/banner-10.jpg"></img>
            </div>
            <div className="col-md-6 align-self-center order-3 order-md-3"></div>
            <div className="col-md-6 align-self-center text-center order-4 order-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
