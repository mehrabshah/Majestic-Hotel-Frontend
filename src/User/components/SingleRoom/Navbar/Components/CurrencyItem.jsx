// CurrencyItem.js
import React from "react";

const CurrencyItem = ({ code, fullName, rate, onClick }) => {

  return (
    <li className="mt-2  cursor-pointer capitalize" onClick={() => onClick(rate,code)}>
      { code}: <span className="text-[#0099cc]">{fullName}</span>
    </li>
  );
};

export default CurrencyItem;
