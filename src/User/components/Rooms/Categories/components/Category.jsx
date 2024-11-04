import React, { useState } from "react";
import "../Categories.css";
import Button from "../../../Shared/Button/Button";
import Feature from "./CategoriesFeature";
import { Link } from "react-router-dom";
function Category({
  id,
  orderFirst,
  orderSecond,
  imgSrc,
  heading,
  paragraph,
  features
}) {
  const [feature, showFeature] = useState(true);
  //Show or hide the Feature Section
  const onFeatureShow = () => {
    showFeature(!feature);
  };

  
  return (
    <div className="row category">
      <div className={`col-md-6   ${orderFirst}  p-0 m-0`}>
      {feature ? <img src={imgSrc}  alt="bed" className="category-image"  /> : <Feature features={features} />}
      </div>
      <div className={`col-md-6  ${orderSecond}  flex items-center`}>
        <div className="d-flex  items-center  justify-center flex-column px-3">
          <h2 className="p-fair mt-4 mt-md-0 mb-4 text-uppercase text-center">{heading}</h2>
          <p className="px-0 px-md-4  mx-auto mb-4 text-center">{paragraph}</p>
          <div className="rooms-btn d-flex flex-row ">
          <div className="me-2">
              <Button
                text={feature ? "SHOW DETAILS" : "Hide DETAILS"}
                backgroundColor="bg-[#fff]"
                color="text-[#d0902e]"
                padding="pt-2 pb-2 ps-2 pe-2"
                border="border-t-[#d0902e] border-b-[#f6d284] border-t-2 border-b-2"
                hover="hover:border-s-[#d0902e] hover:border-e-[#d0902e] hover:border-s-2 hover:border-e-2"
                onClick={onFeatureShow}
              />
            </div>
            <div className="ms-2">
              <Link  to="https://via.eviivo.com/MajesticHotelBN22">
                <Button
                  text="RESERVE"
                  backgroundColor="bg-[#000]"
                  color="text-[#f6d284] font-bold"
                  padding="pt-2 pb-2 ps-6 pe-6"
                  border="border-t-[#000] border-b-[#000] border-t-2 border-b-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
