import React, { useEffect, useState } from "react";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  calculateNumberOfNights,
  extractLocalDate,
  getCurrentDate,
  getDateAfterCurrentDate,
} from "../../../../utils/helpers";
import { formatedDate } from "../../../../utils/helpers";
import useLocalStorage from "../../../../hooks/useLoacalStorage";
import { formatNumber } from "../../../../utils/helpers";
function Booking({ checkInOutDate, bookingDetails, PrizeDetails, currency }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkInOutDate) {
      const startDate = extractLocalDate(checkInOutDate.startDate);
      setStartDate(startDate);
      const endDate = extractLocalDate(checkInOutDate.endDate);
      setEndDate(endDate);
    } else {
      const startDate = getCurrentDate();
      setStartDate(startDate);
      const endDate = getDateAfterCurrentDate();
      setEndDate(endDate);
    }
  }, [checkInOutDate]);
  // For sending the data to payment component
  const { setValue } = useLocalStorage();
  // Calculate total price using reduce method
  const totalPrice = PrizeDetails.reduce(
    (accumulator, detail) => accumulator + detail.price,
    0
  );
  // Calculate total number of rooms using reduce method
  const totalRooms = bookingDetails.reduce(
    (accumulator, detail) => accumulator + parseInt(detail.numberOfRooms),
    0
  );
  // For sending booking data from one component to other
  const BookNow = () => {
    setValue("Add-to-cart", {
      bookingDetails,
      totalPrice,
      totalRooms,
      startDate,
      endDate,
    });
    navigate("/payment");
  };

  return (
    <div className="bookings sm:sticky sm:top-0 flex flex-col">
      <h4 className="p-fair heading">Majestic Hotel England</h4>
      <h6>Check In:</h6>
      <span className="g-book text-black">
        {startDate || formatedDate(getCurrentDate())}
      </span>
      <h6>Check Out:</h6>
      <span className="g-book text-black">
        {endDate || formatedDate(getDateAfterCurrentDate())}
      </span>
      <h6>Total length of stay:</h6>
      <span className="g-book">
        {calculateNumberOfNights(startDate, endDate) || "1"} Night
      </span>
      {totalRooms !== 0 && (
        <div className="room-type ">
          <div id="xhidn-trooms">
            <strong>{totalRooms}</strong> Rooms
          </div>
          <div id="xhidn-tprice" className="green uppercase">
            {currency.code} {formatNumber(totalPrice * currency.rate)}
          </div>
        </div>
      )}
      {totalRooms > 0 ? (
        <Link to="/payment">
          <Button
            text="BOOK NOW"
            backgroundColor="bg-[#181717] w-full"
            color="text-[#f6d284]"
            padding="p-2"
            onClick={BookNow}
          />
        </Link>
      ) : (
        <Button
          text="Please select number of rooms required"
          backgroundColor="bg-[#181717]"
          color="text-[#f6d284]"
          padding="p-2"
        />
      )}
    </div>
  );
}

export default Booking;
