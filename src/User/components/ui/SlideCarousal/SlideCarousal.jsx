import React from "react";
import "./SlideCarousal.css"

function SlideCarousal() {
  return (
    <div className="slide-carousal ">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./assets/banner-2.jpg"
              className="d-block w-100 carousal-image"
              alt="banner-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/banner-10.jpg"
              className="d-block w-100 carousal-image"
              alt="banner-3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./assets/banner-11.jpg"
              className="d-block w-100 carousal-image"
              alt="banner-3"
            />
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
