import React from "react";
import RoomsSection from "./components/RoomsSection";

function Rooms() {
  return (
    <div className=" text-center rooms pb-5 pt-5 ">
      <div className="xl:max-w-screen-xl  lg:max-w-screen-lg mx-auto ">
        <div className="col-md-12  text-center">
          <div className="d-flex flex-column items-center justify-center">
            <h5 className="border-bottom border-color-dark  text-[#000000]   g-book text-uppercase d-inline-block px-3 pb-2 mx-auto mt-0 mt-md-5 mb-4">
              Accommodation
            </h5>
            <h2 className=" mb-3 text-uppercase main-heading-room  ">
              Luxury Rooms
            </h2>
            <p className="main-paragraph-room text-center  ps-[2rem] pe-[2rem] sm:ps-[3rem] sm:pe-[3rem]    lg:ps-[19rem] lg:pe-[19rem]  xl:ps-[26rem] xl:pe-[26rem]">
              Our hotel rooms offer absolute comfort and a design sensibility
              inspired by soft, muted colour tones. Whether you choose any one
              of our suites or opt for a room, you can always be sure of a
              fantastic sleep to leave you feeling refreshed and revitalized.
            </p>
          </div>
          <RoomsSection />
          <div className="mx-auto text-center pt-3  pb-5">
            <button className="border-t-2 border-b-2 border-[#f6d284]   pt-2 pb-2  ps-10 pe-10 hover:border-s-2 hover:border-e-2">
              <span className="text-[#f6d284]    text-2xl  font-extrabold">
                DETAILS
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
