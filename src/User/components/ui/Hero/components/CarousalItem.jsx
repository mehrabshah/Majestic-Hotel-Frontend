import React from "react";
import "../Hero.css";
import BookingSection from "./BookingSectionInner";
function CarouselItem({ image, title, subtitle, active }) {
  return (
    <div className={`carousel-item  ${active ? "active" : ""}`}>
      <img
        src={image}
        className="d-block w-100 img-fluid hero-image-shadow md:h-[75vh] h-[50vh]"
        alt="carousel-image"
      />
      <div className="carousel-caption  d-flex flex-column  pb-24  justify-content-center h-100 top-0">
        <h6 className="main-heading-hero uppercase">{title}</h6>
        <h1 className="main-paragraph-hero text-center text-white mx-auto mt-3 text-uppercase d-inline-block px-3 pb-2">
          {subtitle}
        </h1>
        <BookingSection />
      </div>
    </div>
  );
}

export default CarouselItem;
