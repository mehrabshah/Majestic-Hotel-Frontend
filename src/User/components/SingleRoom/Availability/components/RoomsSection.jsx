import React,{useEffect, useState} from "react";
import "../Availability.css";
import Booking from "./Booking";
import Rooms from "../../Availability/components/Rooms";
import useLocalStorage from "../../../../hooks/useLoacalStorage"
function RoomsSection({ RoomsData , checkInOutDate}) {
  const  {getValue} = useLocalStorage() 
  const currencyRate = getValue("currency-rate")
  
  return (
    <div className="ps-8 pe-8 mx-auto mt-16">
      <div className="row">
        <div className="col-md-9">
         {RoomsData.map((Room) => (
            <div key={Room.id} className="mt-4">
              <Rooms
                categoryId={Room.id}
                imgSrc={Room.image}
                heading={Room.name}
                availableRooms={Room.availableRooms}
                description={Room.description}
                capacityChild={Room.capacityChild}
                currency={currencyRate}
                checkInOutDate={checkInOutDate}
              />
            </div>
          ))}
        </div>
        <div className="col-md-3 ps-4 mt-4 ">
           <Booking checkInOutDate={checkInOutDate}  currency={currencyRate}/> 
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
