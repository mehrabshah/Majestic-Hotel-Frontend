import React, { useEffect, useState } from "react";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";
import {
  calculateNumberOfNights,
  extractLocalDate,
  getCurrentDate,
  getDateAfterCurrentDate,
} from "../../../../utils/helpers";

function Booking({ checkInOutDate }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    if (checkInOutDate) {
      setStartDate(extractLocalDate(checkInOutDate.startDate));
      setEndDate(extractLocalDate(checkInOutDate.endDate));
    }
  }, [checkInOutDate]);
  return (
    <div className="bookings flex flex-col">
      <h4 className="p-fair heading">Pearl Continental Hotel Lahore</h4>
      <h6>Check In:</h6>
      <span className="g-book text-black">{startDate || getCurrentDate()}</span>
      <h6>Check Out:</h6>
      <span className="g-book text-black">
        {endDate || getDateAfterCurrentDate()}
      </span>
      <h6>Total length of stay:</h6>
      <span className="g-book">
        {calculateNumberOfNights(startDate, endDate)}
      </span>
      {/* <Button  
        text="Please select number of rooms required" 
        backgroundColor="bg-[#181717]" 
        color="text-[#f6d284]"
        padding="p-2"
      /> */}
      {/* <div className="mt-2 "> */}
      <Link to="/payment">
        <Button
          text="BOOK NOW"
          backgroundColor="bg-[#181717]"
          color="text-[#f6d284]"
          padding="p-2"
        />
      </Link>
      {/* </div> */}
    </div>
  );
}

export default Booking;
