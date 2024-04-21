import React, { createContext, useContext, useState } from "react";
const BookingContext = createContext();
export const useBookingContext = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    startDate: null,
    endDate: null,
    bookingDetails: [],
    totalPrice: 0,
    totalRooms: 0,
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
