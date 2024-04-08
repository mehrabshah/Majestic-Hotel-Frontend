import React from "react";
import RoomsSection from "./components/RoomsSection";

function Rooms() {
  return (
    <div className=" text-center our-hotel pb-5">
      <div className="max-w-screen-xl mx-auto ">
      <div className="col-md-12 mt-4 mt-md-5 text-center">
          <div className="d-flex flex-column items-center justify-center">
            <h5 class="border-bottom border-color-dark g-book text-uppercase d-inline-block px-3 pb-2 mx-auto mt-0 mt-md-5 mb-4">
              Accommodation
            </h5>
            <h2 class=" mb-3 text-uppercase main-heading-room  ">
              Luxury Rooms
            </h2>
            <p class="main-paragraph-room ">
              Our hotel rooms offer absolute comfort and a design sensibility
              inspired by soft, muted colour tones. 
            </p>
            </div>

             <RoomsSection/>
             <div className="mx-auto text-center pt-5  pb-5">
      <button className="border-t-2 border-b-2 border-[#f6d284]   pt-2 pb-2  ps-10 pe-10 hover:border-s-2 hover:border-e-2">
          <span className="text-[#f6d284]    text-2xl  font-extrabold"> SHOW ALL</span>
      </button>
      </div>
          </div> 
      </div>
    </div>
  );
}

export default Rooms;
