import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className=" pt-lg-5 pb-lg-0  pt-4 pb-4  text-center our-hotel">
        <div className="xl:max-w-screen-xl  lg:max-w-screen-lg   ps-4 pe-4 mx-auto ">
          <div className="row    ms-0 me-0">
            <div className="col-lg-6 lg:pb-0  pb-3  text-center text-lg-start">
              <h3 className="main-heading-font">
                Welcome to{" "}
                <span className="me-2  text-[#f6d284]"> 
                  Majestic <br className="d-none d-lg-block" />
                  the heaven 
                </span>
                 of your weekend
              </h3>
              <p className="pt-4 main-paragraph-font   ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio eligendi odit, impedit voluptas aliquam quidem
                explicabo dolor nesciunt quibusdam reiciendis labore cum quod
                assumenda blanditiis illum! Accusamus ipsum molestiae, a nisi
                laudantium quia? Suscipit, quidem!
              </p>
              <p className="pt-4 main-paragraph-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt numquam corporis sequi fuga recusandae labore eveniet
                illo, ratione placeat temporibus!
              </p>
              <button className="mt-4 border-2 border-[#f6d284] pt-2 pb-2 ps-4 pe-4 text-[#f6d284] font-bold rounded-3xl  ">
                   Explore
              </button>
            </div>
            <div className="col-lg-6  d-flex justify-center p-lg-4">
              <img src="./assets/sofa.jpg" alt="side-image"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
