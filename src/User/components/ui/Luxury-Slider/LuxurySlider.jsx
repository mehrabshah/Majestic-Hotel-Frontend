import React from "react";
import "./LuxurySlider.css";
import Slider from "react-slick";

function LuxurySlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (

      <div className="slider-container mx-auto mt-4">
        <Slider {...settings}>
          <div>
            <img src="./assets/banner-1.jpg" alt="Banner 1"></img>
          </div>
          <div>
            <img src="./assets/banner-2.jpg" alt="Banner 2"></img>
          </div>
          <div>
            <img src="./assets/banner-3.jpg" alt="Banner 3"></img>
          </div>
          <div>
            <img src="./assets/banner-4.jpg" alt="Banner 4"></img>
          </div>
          <div>
            <img src="./assets/banner-5.jpg" alt="Banner 5"></img>
          </div>
          <div>
            <img src="./assets/banner-6.jpg" alt="Banner 6"></img>
          </div>
        </Slider>
      </div>
    
  );
}

export default LuxurySlider;
