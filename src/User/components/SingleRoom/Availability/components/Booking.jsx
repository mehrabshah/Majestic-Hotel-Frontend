import React from "react";
import Button from "../../../Shared/Button/Button"

function Booking() {
  return (
    <div className="bookings flex flex-col">
      <h4 className="p-fair heading">Pearl Continental Hotel Lahore</h4>
      <h6>Check In:</h6>
      <span className="g-book">Sunday 14, April 2024</span>
      <h6>Check Out:</h6>
      <span className="g-book">Monday 15, April 2024</span>
      <h6>Total length of stay:</h6>
      <span className="g-book">1 Night</span>
      <Button 
        text="Please select number of rooms required" 
        backgroundColor="bg-[#181717]" 
        color="text-[#f6d284]"
        padding="p-2"
      />
      <div className="mt-2 hidden">
       <Button 
        text="BOOK NOW" 
        backgroundColor="bg-[#181717]" 
        color="text-[#f6d284]"
        padding="p-2"
      />
      </div>
    </div>
  );
}

export default Booking;
