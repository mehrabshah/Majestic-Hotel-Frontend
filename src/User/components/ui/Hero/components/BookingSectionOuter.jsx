import React from "react";
import "../Hero.css";
import BookingBox from "./BookingBox";
function BookingSectionOuter() {
  return (
    <div className="booking  justify-center  items-center">
      <div className=" container   md:hidden block ">
        <div className="row  d-flex flex-md-row flex-column">
          <BookingBox heading="Destination" paragraph="Lahore" />
          <BookingBox heading="Destination" paragraph="Lahore" />
          <BookingBox heading="Destination" paragraph="Lahore" />
          <div className="box col-md-3 p-2">
            <div className="box-inner-last text-center p-3">
              <h1 className="box-heading">Destination</h1>
              <p className="box-paragraph">Lahore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSectionOuter;
