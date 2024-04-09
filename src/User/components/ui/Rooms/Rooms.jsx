import React from "react";
import RoomsSection from "./components/RoomsSection";

function Rooms() {
  return (
    <div className=" text-center rooms pb-5">
      <div className="max-w-screen-xl mx-auto ">
        <div className="col-md-12 mt-4 mt-md-5 text-center">
          <div className="d-flex flex-column items-center justify-center">
            <h5 class="border-bottom border-color-dark  text-[#000000]   g-book text-uppercase d-inline-block px-3 pb-2 mx-auto mt-0 mt-md-5 mb-4">
              Accommodation
            </h5>
            <h2 class=" mb-3 text-uppercase main-heading-room  ">
              Luxury Rooms
            </h2>
            <p class="main-paragraph-room text-center ps-72 pe-72">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus
              sapiente quis ullam perspiciatis quia veniam quisquam.
            </p>
          </div>

          <RoomsSection />
         
        </div>
      </div>
    </div>
  );
}

export default Rooms;
