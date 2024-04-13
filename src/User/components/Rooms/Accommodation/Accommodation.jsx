import React from "react";
import "./Accommodation.css";
import Category from "./components/Category";
const features = [
  "Air-conditioning",
  "Bathroom amenities",
  "Hair dryer",
  "Safe in room",
  "Writing Desk and chair",
  "Iron and ironing board on request",
  "Room service",
  "Complimentary bottled water",
];
function Accommodation() {
    
  return (
    <div>
      <div className="accomodation accomodation-banner">
        <div className="col-md-12 py-0 py-md-5 text-center">
          <h2 className=" ft-17 border-bottom d-inline-block px-3 border-color-dark  mx-auto pt-5 pb-2 text-uppercase">
            Accommodation
          </h2>
          <h4 className=" text-uppercase p-fair pt-2">Rooms Overview</h4>
          <p className=" pt-2 px-4 col-12 col-md-6 col-lg-6 col-xl-3 mx-auto">
            Choose from a total of 605 lavishly furnished rooms, with sleek and
            inviting interior perfectly set to create an unforgettable luxury
            experience.
          </p>
        </div>
      </div>
      <div>
        <div className="lg:max-w-screen-lg  ps-4 pe-4 mx-auto">
          <div className="mt-4 mt-lg-0">
            <Category
              id={1}
              orderFirst="order-lg-2"
              orderSecond="order-lg-1"
              imgSrc="./assets/bed-2.jpg"
              heading="TWIM ROOM"
              paragraph="Furnishing chic and contemporary décor, the Executive Room offers spacious interiors designed to your comfort."
              roomSize="484 Sq feet"
              bedSize="1 King/Queen or Twin"
              bedView="City View, Pool View"
              features={features}
            />
          </div>
          <div className="mt-4 mt-lg-0">
            <Category
              id={2}
              orderFirst="order-lg-1"
              orderSecond="order-lg-2"
              imgSrc="./assets/bed-5.jpg"
              heading="DOUBLE ROOM"
              paragraph="Furnishing chic and contemporary décor, the Executive Room offers spacious interiors designed to your comfort."
              roomSize="484 Sq feet"
              bedSize="1 King/Queen or Twin"
              bedView="City View, Pool View"
              features={features}
            />
          </div>
          <div className="mt-4 mt-lg-0">
            <Category
              id={3}
              orderFirst="order-lg-2"
              orderSecond="order-lg-1"
              imgSrc="./assets/bed-3.jpg"
              heading="SINGLE ROOM"
              paragraph="Furnishing chic and contemporary décor, the Executive Room offers spacious interiors designed to your comfort."
              roomSize="484 Sq feet"
              bedSize="1 King/Queen or Twin"
              bedView="City View, Pool View"
              features={features}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
