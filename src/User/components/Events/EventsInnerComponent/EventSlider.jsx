import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard'; // Assuming the component is in the same directory

const EventsSlider = () => {
  // Array to store event information
  const events = [
    {
      imageSrc: "assets/family-events.jpg",
      title: "Cooprate Events",
      description: "Impress clients and colleagues with our sophisticated venues ideal for meetings, conferences, and retreats.  Our customizable packages ensure a seamless and productive event experience."
    },
    {
      imageSrc: "assets/Anniversaries_Nights.jpg",
      title: "Special Occasions",
      description: "From anniversaries, graduation parties, or baby showers, our dedicated team will make every moment memorable, tailored to your unique preferences."
    },
    {
        imageSrc: "assets/b-day.jpg",
        title: "Birthday Parties",
        description: "Celebrate your loved ones' birthdays at Pearl-Continental Lahore in a magical outdoor or indoor setting."
    },
    {
      imageSrc: "assets/Anniversaries_Nights.jpg",
      title: "Weddings",
      description: "Say 'I do' in style amidst the elegant ambiance of our stunning ballrooms and picturesque outdoor spaces. Our experienced wedding planners will bring your vision to life with personalized décor and exquisite catering options."
    }
  ];


  // Custom left arrow component
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[150px] left-[20px] z-10 text-white`}
        style={{ ...style, zIndex: 10, }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

  // Custom right arrow component
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[150px] right-[40px] z-10 text-white`}
        style={{ ...style, zIndex: 10 }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <div className='container-fluid'>
    <Slider {...settings}>
      {events.map((event, index) => (
        <div key={index} className="slick-slide slick-cloned" data-slick-index={index} aria-hidden="true" style={{ width: '483px' }}>
          <EventCard
            imageSrc={event.imageSrc}
            title={event.title}
            description={event.description}
          />
        </div>
      ))}
    </Slider>
      </div>
  );
};

export default EventsSlider;
