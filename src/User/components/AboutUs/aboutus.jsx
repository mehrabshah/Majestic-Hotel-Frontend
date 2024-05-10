import React from "react";
import "./aboutus.css";
import { Bed, Champagne, ForkKnife } from "@phosphor-icons/react";
const AboutUs = () => {
  return (
    <>
      {/* Section One */}
      <div className="container-fluid about-us-background">
        <div className="row h-[80vh] mx-auto align-items-center">
          <div className="col-md-6 p-md-5 p-3">
            <h1 className="el-messiri-bold text-[#d0902e] text-4xl md:text-8xl">
              ABOUT
            </h1>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-2">
                <p className="el-messiri-bold text-4xl text-white md:text-8xl">
                  US
                </p>
              </div>
              <div className="col-md-9">
                <div className="border-b border-white  mx-auto"></div>
              </div>
            </div>
            <p className="text-white">
              Located along the picturesque beachfront of Eastbourne lies The
              Majestic Hotel, a charming haven boasting 3-star accommodations
              that promise a delightful retreat. With a splendid terrace
              overlooking the glistening waters, a cozy restaurant, and a
              stylish bar, this hotel invites guests to indulge in leisure and
              relaxation.Just a stone's throw away, lies the inviting Eastbourne
              Beach, while the iconic Eastbourne Pier beckons from a mere 600
              meters away, promising endless seaside adventures. And with
              complimentary WiFi throughout the premises, staying connected is
              effortless
            </p>
          </div>
          <div className="col-md-6 p-md-5 p-3">
            <img src="assets/345694611.jpg" alt="345694611"  className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Section Two */}
      <div className="flex flex-col w-full mb-5 mb-md-3 3xlmax-w- mx-auto py-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center my-5">
          Our <span className="text-[#d0902e]">Facilities</span>
        </h2>
        <div className="flex flex-wrap align-items-center justify-content-around">
          <div className="flex flex-col items-center ">
            <div className="w-14 h-14 rounded-full bg-[#d0902e] flex items-center justify-center">
              <Bed size={32} color="white" />
            </div>
            <div className="flex-grow  pb-2">
              <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2">
               Dining
              </h3>
            </div>
            <p className="text-gray-700">Exceptional dining & impeccable hospitality</p>
          </div>
          <div className="flex flex-col items-center mt-4 lg:mt-0">
            <div className="w-14 h-14 rounded-full bg-[#d0902e] flex items-center justify-center">
              <Champagne size={32} color="white" />
            </div>
            <div className="flex-grow  pb-2">
              <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2">
                 Drinks
              </h3>
            </div>
            <p className="text-gray-700">Sea views, exquisite bar service</p>
          </div>
          <div className="flex flex-col items-center mt-4 lg:mt-0">
            <div className="w-14 h-14 rounded-full bg-[#d0902e] flex items-center justify-center">
              <ForkKnife size={32} color="white" />
            </div>
            <div className="flex-grow  pb-2">
              <h3 className="text-lg font-bold border-b border-brand-50 px-3 mt-2 ">
               Rooms
              </h3>
            </div>
            <p className="text-gray-700">Luxury comfort & elegant rooms</p>
          </div>
        </div>
      </div>
      {/* Section Three */}
      <div className="relative h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(assets/345693907.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 w-full flex flex-col justify-between text-center">
          <div className="flex justify-center items-center mt-4 sm:mt-8 md:mt-12 lg:mt-16">
            <span className="w-1/3 h-px bg-white"></span>
            <span className="ml-2 mr-2 text-white text-lg">★</span>
            <span className="w-1/3 h-px bg-white"></span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex text-center justify-center items-baseline">
              <p className="font-bold text-4xl text-white md:text-8xl ps-3">
                 Heritage
              </p>
              <p className="ms-3 font-bold text-3xl text-[#d0902e] md:text-4xl pe-3">
                Coastal Elegance awaits
              </p>
            </div>
            <p className="text-white w-full md:w-1/2 mt-3  ps-3 pe-3">
              Welcome to The Majestic Hotel, a historic landmark nestled in the
              heart of Eastbourne, UK. Established in the late 1800s, our hotel
              boasts a rich heritage and a prime location on Royal Parade,
              overlooking the picturesque beachfront and offering stunning views
              of the sea.Perched against the backdrop of the magnificent South
              Downs, The Majestic Hotel exudes charm and elegance. Whether
              you're seeking a tranquil retreat or an adventure-filled getaway,
              our hotel provides the perfect setting for an unforgettable
              experience.
            </p>
          </div>
          <div className="flex justify-center items-center mb-4 sm:mb-8 md:mb-12 lg:mb-16">
            <span className="w-1/3 h-px bg-white"></span>
            <span className="ml-2 mr-2 text-white text-lg">★</span>
            <span className="w-1/3 h-px bg-white"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
