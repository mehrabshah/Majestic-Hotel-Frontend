import React from "react";
import "../Rooms.css";
import RoomsCard from "./RoomsCard";

function RoomsSection() {
  return (
    <div className="mt-5 row">
      <div className="col-md-4">
        <RoomsCard />
      </div>
      <div className="col-md-4">
        <RoomsCard />
      </div>
      <div className="col-md-4">
        <RoomsCard />
      </div>
    </div>
  );
}

export default RoomsSection;
