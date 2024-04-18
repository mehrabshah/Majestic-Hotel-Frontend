import React from "react";
import "../Availability.css";
import Booking from "./Booking";
import Rooms from "../../Availability/components/Rooms";
function RoomsSection({ RoomsData , checkInOutDate }) {
  return (
    <div className="ps-8 pe-8 mx-auto mt-16">
      <div className="row">
        <div className="col-md-9">
          {RoomsData.map((Room) => (
            <div key={Room.id} className="mt-4">
              <Rooms
                imgSrc={Room.image}
                heading={Room.name}
                price={Room.price}
                availableRooms={Room.availableRooms}
              />
            </div>
          ))}
        </div>
        <div className="col-md-3">
          <Booking checkInOutDate={checkInOutDate}/>
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
