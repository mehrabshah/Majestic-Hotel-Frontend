import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero relative ">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade -z-10 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            
            <div className="carousel-item active">
            <div className="image-overlay">
              <img
                src="./assets/banner-1.jpg"
                className="d-block w-100  img-fluid "
                alt="carousal-image"
              />
              </div>
              <div class="carousel-caption ">
                <div className="absolute  bottom-72    right-10 ">
                  <div className="caption text-center">
                    <h1 class=" light-color main-heading-hero ft-55">
                      An invitation to explore
                    </h1>
                    <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-hero text-uppercase border-bottom d-inline-block px-3 pb-2">
                      Badshahi Masjid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="./assets/pc/pc-2.jpg"
                className="d-block w-100 img-fluid "
                alt="carousal-image"
              />
              <div class="carousel-caption ">
                <div className="absolute    bottom-72   right-10 ">
                  <div className="caption text-center">
                    <h1 class=" light-color main-heading-hero ft-55">
                      Get A TASTE OF OLD LAHORE
                    </h1>
                    <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-hero text-uppercase border-bottom d-inline-block px-3 pb-2">
                      Badshahi Masjid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="./assets/pc/pc-3.jpg"
                className="d-block w-100 img-fluid"
                alt="carousal-image"
              />
              <div class="carousel-caption ">
                <div className="absolute  bottom-72   right-10  ">
                  <div className="caption text-center">
                    <h1 class=" light-color main-heading-hero ft-55">
                      An invitation to explore
                    </h1>
                    <h2 class="fadeInUp-2 text-start text-white mx-auto mt-3 main-paragraph-hero text-uppercase border-bottom d-inline-block px-3 pb-2">
                      Badshahi Masjid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      <div className="booking d-flex justify-center    ">
        <div className=" absolute container bottom-0  pe-36 ps-36 d-none d-lg-block">
          <div className="row ">
            <div className="box col-3 p-2">
              <div className="box-inner text-center p-3">
                <h1 className="box-heading">Destination</h1>
                <p className="box-paragraph">Lahore</p>
              </div>
            </div>

            <div className="box col-3 p-2">
              <div className="box-inner text-center p-3">
                <h1 className="box-heading">Destination</h1>
                <p className="box-paragraph">Lahore</p>
              </div>
            </div>
            <div className="box col-3 p-2">
              <div className="box-inner text-center p-3">
                <h1 className="box-heading">Destination</h1>
                <p className="box-paragraph">Lahore</p>
              </div>
            </div>
            <div className="box col-3 p-2">
              <div className="box-inner-last text-center p-3">
                <h1 className="box-heading">Destination</h1>
                <p className="box-paragraph">Lahore</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
