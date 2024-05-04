import React from "react";
import "../Categories.css";
import { IoIosArrowForward } from "react-icons/io";
function CategoriesFeature({features}) {
  return (
    <div className="h-[20.8rem] p-4">
      <h5 className="heading-fonts ft-22 text-uppercase mb-4">Features</h5>
      {features.map((feature, index) => (
        <div key={index} className="mb-0 d-flex flex-row items-center   g-book">
          <IoIosArrowForward /> 
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoriesFeature;
