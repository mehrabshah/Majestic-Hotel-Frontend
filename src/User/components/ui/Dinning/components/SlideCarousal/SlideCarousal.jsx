import React from "react";
import "./SlideCarousal.css";

function SlideCarousal() {
  return (
    <div className="slide-carousal ">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner h-50">
          <div className="carousel-item active">
            <img
              src="./assets/banner-11.jpg"
              className="d-block w-100  slick-image"
              alt="banner-2"
            />
            <div class="carousel-caption d-flex justify-between pb-0 bottom-[-0.75rem]">
              <div className="  pt-20">
                <h1 class=" light-color main-heading-dinning ft-55">NADIA</h1>
                <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  BAR & RESTAURENT
                </h2>
              </div>
              <div className="menu">
                <div className="menu-inner p-12 ">
                  <p className="text-start">
                    Nadia offers a diverse combination of food and beverages in
                    a relaxed and comfortable environment. The restaurant serves
                    delicious options in Pakistani and Continental cuisines to
                    cater to every taste and mood.
                  </p>
                  <div class="mx-auto w-25 mt-3">
                    <a
                    
                      className="text-uppercase ft-14 g-bold border-top border-bottom border-yellow py-2 mb-0 mb-md-0 text-center text-yellow d-block btn-1"
                      target="_blank"
                      tabindex="0"
                    >
                      <span>menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./assets/interior-4.jpg"
              className="d-block w-100  slick-image"
              alt="banner-3"
            />
            <div class="carousel-caption d-flex justify-between pb-0 bottom-[-0.75rem]">
              <div  className="  pt-20">
                <h1 class=" light-color main-heading-dinning ft-55">
                  MARCO POLO{" "}
                </h1>
                <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  BAR & RESTAURENT
                </h2>
              </div>
              <div className="menu">
                <div className="menu-inner ps-12 pe-12 pb-4 pt-12 ">
                  <p className="text-start">
                    Offering an all-day international dining experience, Marco
                    Polo is perfect for business luncheons and relaxed Sunday
                    brunches with friends and family.Relax in a classic ambience
                    and let our chefs serve you a myriad of meals sure to
                    tantalise your taste buds.
                  </p>
                  <div class="mx-auto w-25 mt-3">
                    <a
                    
                      className="text-uppercase ft-14 g-bold border-top border-bottom border-yellow py-2 mb-0 mb-md-0 text-center text-yellow d-block btn-1"
                      target="_blank"
                      tabindex="0"
                    >
                      <span>menu</span>
                    </a>
                  </div>
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
            <div class="carousel-caption d-flex justify-between pb-0 bottom-[-0.75rem]">
              <div  className="pt-20">
                <h1 class=" light-color main-heading-dinning ft-55">
                  MARCO POLO{" "}
                </h1>
                <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-dinning text-uppercase border-bottom d-inline-block px-3 pb-2">
                  BAR & RESTAURENT
                </h2>
              </div>
              <div className="menu">
                <div className="menu-inner p-12 ">
                  <p className="text-start">
                    Serving authentic Chinese cuisine with an essence of the
                    Canton and Shanghai provinces, Tai-Pan specialities are
                    prepared using the four Chinese cooking methods: steamed,
                    braised, baked and fried. 
                  </p>
                  <div class="mx-auto w-25 mt-3">
                    <a
                    
                      className="text-uppercase ft-14 g-bold border-top border-bottom border-yellow py-2 mb-0 mb-md-0 text-center text-yellow d-block btn-1"
                      target="_blank"
                      tabindex="0"
                    >
                      <span>menu</span>
                    </a>
                  </div>
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
