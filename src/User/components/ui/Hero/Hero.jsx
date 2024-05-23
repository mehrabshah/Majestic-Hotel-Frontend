import React from "react";
import "./Hero.css";
import CarouselItem from "./components/CarousalItem";
function Hero() {
  return (
    <>
      <div className="hero   pb-lg-5 ">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <CarouselItem
              image="./assets/sea.jpg"
              title="The ultimate shopisticate and premium"
              subtitle="All Inclusive & Exclusive"
              active={true}
            />
            <CarouselItem
              image="./assets/banner-2.jpg"
              title="One Prgrammme, Saving everyday, New Experiences  "
              subtitle="Your Loyalty Rewarded"
            />
            <CarouselItem
              image="./assets/banner-7.jpg"
              title="Hospitality are the origins traditions Motto"
              subtitle="Generous & Authentic Approach"
            />
          </div>
          <button
            className="carousel-control-prev z-20"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next z-20"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
