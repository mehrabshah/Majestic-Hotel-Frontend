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

  const [priceDetails, setPriceDetails] = useState([
    { categoryId: 1, price: 0 },
    { categoryId: 2, price: 0 },
    { categoryId: 3, price: 0 },
    { categoryId: 4, price: 0 },
    { categoryId: 5, price: 0 },
    { categoryId: 6, price: 0 },
    { categoryId: 7, price: 0 },
    { categoryId: 8, price: 0 },
  ]);

  return (
    <BookingContext.Provider
      value={{ bookingDetails, setBookingDetails, priceDetails, setPriceDetails }}
    >
      {children}
    </BookingContext.Provider>
  );
};
