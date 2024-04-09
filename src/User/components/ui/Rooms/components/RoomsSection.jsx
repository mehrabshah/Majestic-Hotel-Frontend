import React from "react";
import "../Rooms.css";
import RoomsCard from "./RoomsCard";

function RoomsSection() {
  return (
    <div className="mt-5 row">
      <div className="col-md-4">
        <RoomsCard
          imageSrc="./assets/banner-4.jpg"
          title="Luxury Suite"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$300/Night"
          bookText="Book Now"
        />
      </div>
      <div className="col-md-4">
        <RoomsCard
          imageSrc="./assets/banner-4.jpg"
          title="Luxury Suite"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$500/Night"
          bookText="Book Now"
        />
      </div>
      <div className="col-md-4">
        <RoomsCard
          imageSrc="./assets/banner-4.jpg"
          title="Executive King "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien vel mi."
          price="$450/Night"
          bookText="Book Now"
        />
      </div>
    </div>
  );
}

export default RoomsSection;
