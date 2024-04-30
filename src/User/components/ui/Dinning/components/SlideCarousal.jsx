import React from "react";
import "../Dinning.css";
function SlideCarousal() {
  return (
    <div className="slide-carousal ">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner h-50">
          <div className="carousel-item active">
            <img
              src="./assets/interior-4.jpg"
              className="d-block w-100  slick-image"
              alt="banner-3"
            />
            <div className="carousel-caption d-flex  justify-center pb-12  lg:justify-between lg:pb-0  lg:bottom-[-0.75rem]">
              <div className="  pt-20">
                <h1 className=" light-color main-heading-dinning ft-55">
                  {" "}
                  Events
                </h1>
                <h2 className="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  Corporate Events
                </h2>
              </div>
              <div className="menu hidden lg:block">
                <div className="menu-inner p-12 ">
                  <p className="text-start">
                    Impress clients and colleagues with our sophisticated venues
                    ideal for meetings, conferences, and retreats. Our
                    customizable packages ensure a seamless and productive event
                    experience.Our spaces are meticulously designed to exude
                    professionalism and sophistication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  ">
            <img
              src="./assets/b-day.jpg"
              className="d-block w-100  slick-image"
              alt="banner-2"
            />
            <div className="carousel-caption d-flex  justify-center  pb-12  lg:justify-between lg:pb-0  lg:bottom-[-0.75rem]   ">
              <div className="  pt-20">
                <h1 className=" light-color main-heading-dinning ft-55">
                  {" "}
                  BIRTHDAYS
                </h1>
                <h2 className="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  Birthdays & Parties
                </h2>
              </div>
              <div className="menu hidden lg:block">
                <div className="menu-inner p-12 ">
                  <p className="text-start">
                    Our venue offers a variety of adaptable event spaces that
                    are perfect for hosting gatherings of up to 200 guests in
                    each space. Designed with flexibility in mind, our
                    facilities can easily accommodate large parties, ensuring
                    that each event is both unique and memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="./assets/interior-6.jpg"
              className="d-block w-100  slick-image"
              alt="banner-3"
            />
            <div className="carousel-caption d-flex  justify-center  pb-12  lg:justify-between lg:pb-0  lg:bottom-[-0.75rem]">
              <div className="pt-20">
                <h1 className=" light-color main-heading-dinning ft-55">
                  Occasions
                </h1>
                <h2 className="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  Special Occasions
                </h2>
              </div>
              <div className="menu hidden lg:block">
                <div className="menu-inner p-12 ">
                  <p className="text-start">
                    From anniversaries, graduation parties, or baby showers, our
                    dedicated team will make every moment memorable, tailored to
                    your unique preferences.We understand that each celebration is as unique as the individuals being honored, which is why we take the time to tailor every detail to your specific preferences and vision. 
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SlideCarousal;
