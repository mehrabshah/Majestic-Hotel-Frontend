import React from "react";
import "../Rooms.css";
import RoomsCard from "./RoomsCard";

function RoomsSection() {
  return (
    <div className="pt-5 pb-5 row ms-2 me-2">
      <div className="col-lg-4   mt-0 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/banner-4.jpg"
          title="Double Room"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$300/Night"
          bookText="Book Now"
        />
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/bed-2.jpg"
          title="Twim Room"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$500/Night"
          bookText="Book Now"
        />
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/bed-3.jpg"
          title="Single Room"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$450/Night"
          bookText="Book Now"
        />
      </div>
    </div>
  );
}

export default RoomsSection;
