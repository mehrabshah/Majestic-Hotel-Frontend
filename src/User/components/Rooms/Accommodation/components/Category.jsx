import React, { useState } from "react";
import "../Accommodation.css";
import Button from "../../../Shared/Button/Button";
import Feature from "./Feature";
function Category({
  orderFirst,
  orderSecond,
  imgSrc,
  heading,
  paragraph,
  roomSize,
  bedSize,
  bedView,
  features
}) {
  const [feature,showFeature] = useState(true);
  //Show or hide the Feature Section
  const onFeatureShow = () => {
    showFeature(!feature)
  }

  return (
    <div className="row category">
      <div className={`col-md-6   ${orderFirst}  p-0 m-0`}>
       {feature ? <img src={imgSrc} /> : <Feature features={features}/>}
      </div>
      <div className={`col-md-6  ${orderSecond}  flex items-center`} >
        <div className="d-flex  items-center  justify-center flex-column px-3">
          <h2 className="p-fair mt-4 mt-md-0 mb-4 text-uppercase">{heading}</h2>
          <p className="px-0 px-md-4  mx-auto mb-4 text-center">{paragraph}</p>
          <div className="d-flex mb-4">
            <div class="room-facilaties  d-flex mb-2">
              <div class="mx-auto  d-flex pl-5 justify-content-center">
                <span class=" category-list mx-2">
                  <span class="text-center ">
                    <span className="font-bold">Room size</span>
                    <br /> {roomSize}
                  </span>
                </span>
                <span class=" category-list mx-2 text-center  ">
                  <span class="text-center">
                    <span className="font-bold">Bed Size(s)</span>
                    <br />
                    {bedSize}
                  </span>
                </span>
                <span class=" category-list mx-2 text-center ">
                  <span class="text-center ">
                    <span className="font-bold">View</span>
                    <br />
                    {bedView}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="rooms-btn d-flex flex-row">
            <div className="me-2">
              <Button
                text={feature ? 'SHOW DETAILS' : 'Hide DETAILS' }
                backgroundColor="bg-[#fff]"
                color="text-[#f6d284]"
                padding="pt-2 pb-2 ps-2 pe-2"
                border="border-t-[#f6d284] border-b-[#f6d284] border-t-2 border-b-2"
                onClick={onFeatureShow}
              />
            </div>
            <div className="ms-2">
              <Button
                text="RESERVE"
                backgroundColor="bg-[#000]"
                color="text-[#f6d284]"
                padding="pt-2 pb-2 ps-6 pe-6"
                border="border-t-[#000] border-b-[#000] border-t-2 border-b-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
