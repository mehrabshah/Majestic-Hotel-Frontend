import React from "react";
import "../Availability.css";

import Rooms from "./Rooms";
import Booking from "./Booking";
function RoomsSection() {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto mt-16 ">
      <div className="row">
        <div className="col-md-9">
          <div className="mt-0">
            <Rooms
              imgSrc="/assets/bed-3.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={2}
              price="USD 93.50"
            />
          </div>
          <div className="mt-5">
            <Rooms
              imgSrc="/assets/bed-4.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={3}
              price="USD 93.50"
            />
          </div>
          <div className="mt-5">
            <Rooms
              imgSrc="/assets/bed-5.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={1}
              price="USD 93.50"
            />
          </div>
          <div className="mt-5">
            <Rooms
              imgSrc="/assets/bed-6.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={1}
              price="USD 93.50"
            />
          </div>
          <div className="mt-5">
            <Rooms
              imgSrc="/assets/bed-3.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={1}
              price="USD 93.50"
            />
          </div>
          <div className="mt-5">
            <Rooms
              imgSrc="/assets/bed-4.jpg"
              heading="Standard Premium King Mall"
              numberOfGuests={1}
              price="USD 93.50"
            />
          </div>
        </div>
        <div className="col-md-3">
          <Booking />
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
