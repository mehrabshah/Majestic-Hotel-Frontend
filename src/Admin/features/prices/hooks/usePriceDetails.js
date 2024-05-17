import React, { useState, useEffect } from "react";
import { getRoomsPrices } from "../../../services/apiPrices";

export const usePriceDetails = (categoryId) => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingPrices = async (categoryId) => {
      try {
        const obj={
            id:categoryId
        }
        const response = await getRoomsPrices(obj);
        console.log("response",response)

        const newResponse = response.map(({ date, price }) => ({
          date,
          title: `£ ${price}`,
        }));
        setPrice(newResponse);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false); 
      }
    };
      fetchBookingPrices(categoryId);

  }, [categoryId]); 

  return { price, error, loading };
};
