import React from "react";
import "./Awards.css";
function Awards() {
  return (
    <div className="Awards-background">
      <div className="max-w-screen-lg mx-auto / pb-32 ">
        <h2 className="main-heading-font text-center text-uppercase ft-34 mb-5 pt-20 ">
          AWARDED BY
        </h2>
        <div className="flex flex-row justify-center mt-4">
          <div className="">
            <img src="./assets/pc/award-2.png" className="img-fluid me-3"></img>
          </div>
          <div>
            <img src="./assets/pc/award-2.png" className="img-fluid ms-3"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
