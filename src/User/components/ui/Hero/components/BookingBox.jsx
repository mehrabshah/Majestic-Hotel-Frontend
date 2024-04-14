import React from "react";
import "../Hero.css";
function BookingBox({ heading, paragraph }) {
  return (
    <div className="box col-md-3 p-2 ">
      <div className="box-inner text-center p-3">
        <h1 className="box-heading">{heading}</h1>
        <p className="box-paragraph">{paragraph}</p>
      </div>
    </div>
  );
}

export default BookingBox;
