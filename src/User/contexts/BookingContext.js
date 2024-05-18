// BookingContext.js

import React, { createContext, useContext, useState } from "react";
const BookingContext = createContext();
export const useBookingContext = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState([
    { categoryId: 1, numberOfRooms: 0 },
    { categoryId: 2, numberOfRooms: 0 },
    { categoryId: 3, numberOfRooms: 0 },
    { categoryId: 4, numberOfRooms: 0 },
    { categoryId: 5, numberOfRooms: 0 },
    { categoryId: 6, numberOfRooms: 0 },
    { categoryId: 7, numberOfRooms: 0 },
    { categoryId: 8, numberOfRooms: 0 },
  ]);

  const [totalPrice,setTotalPrice]=useState(null)

  return (
    <BookingContext.Provider
      value={{ bookingDetails, setBookingDetails ,totalPrice, setTotalPrice }}
    >
      {children}
    </BookingContext.Provider>
  );
};
