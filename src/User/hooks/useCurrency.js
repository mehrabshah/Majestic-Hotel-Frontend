import  { useEffect, useState } from "react";
import axios from "axios";

export const useCurrency = (currency) => {
  const [currencyRate, setCurrencyRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );
        setCurrencyRate(response.data);
      } catch (error) {
        console.log("Error fetching currency data:", error);
        setCurrencyRate(null);
      }
    };
    fetchData();
  },[currency]);

  return { currencyRate };
};
