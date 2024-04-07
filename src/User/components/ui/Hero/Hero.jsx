import React from "react";
import "./Hero.css"

function Hero() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./assets/banner-2.jpg" className="d-block w-100  carousal-image " alt="carousal-image" />
        </div>
        <div className="carousel-item">
          <img src="./assets/banner-6.jpg" className="d-block w-100 carousal-image " alt="carousal-image" />
        </div>
        <div className="carousel-item">
          <img src="./assets/banner-7.jpg" className="d-block w-100 carousal-image" alt="carousal-image" />
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
  );
}

export default Hero;
