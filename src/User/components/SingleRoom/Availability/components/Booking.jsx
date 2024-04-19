import React, { useEffect, useState, useMemo } from "react";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";
import {
  calculateNumberOfNights,
  extractLocalDate,
  getCurrentDate,
  getDateAfterCurrentDate,
} from "../../../../utils/helpers";
function Booking({ checkInOutDate, bookingDetails, PrizeDetails }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    if (checkInOutDate) {
      setStartDate(extractLocalDate(checkInOutDate.startDate));
      setEndDate(extractLocalDate(checkInOutDate.endDate));
    }
  }, [checkInOutDate]);
  // Calculate total price using reduce method
  const totalPrice = useMemo(() => {
    return PrizeDetails.reduce(
      (accumulator, detail) => accumulator + detail.price,
      0
    );
  }, [PrizeDetails]);
  // Calculate total number of rooms using reduce method
  const totalRooms = useMemo(() => {
    return bookingDetails.reduce(
      (accumulator, detail) => accumulator + parseInt(detail.numberOfRooms),
      0
    );
  }, [bookingDetails]);

  return (
    <div className="bookings  sm:sticky sm:top-0 flex flex-col">
      <h4 className="p-fair heading">Pearl Continental Hotel Lahore</h4>
      <h6>Check In:</h6>
      <span className="g-book text-black">{startDate || getCurrentDate()}</span>
      <h6>Check Out:</h6>
      <span className="g-book text-black">
        {endDate || getDateAfterCurrentDate()}
      </span>
      <h6>Total length of stay:</h6>
      <span className="g-book">
        {calculateNumberOfNights(startDate, endDate) || "1"} Night
      </span>
      <div className="room-type ">
        <div id="xhidn-trooms">
          <strong>{totalRooms}</strong> Rooms
        </div>
        <div id="xhidn-tprice" className="green">
          {totalPrice}
        </div>
      </div>
      {totalRooms === 0 ? (
        <Button
          text="Please select number of rooms required"
          backgroundColor="bg-[#181717]"
          color="text-[#f6d284]"
          padding="p-2"
        />
      ) : (
        <Link to="/payment">
          <Button
            text="BOOK NOW"
            backgroundColor="bg-[#181717] w-full"
            color="text-[#f6d284]"
            padding="p-2"
          />
        </Link>
      )}
    </div>
  );
}

export default Booking;
