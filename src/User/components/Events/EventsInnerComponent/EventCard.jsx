import React from 'react';

const EventCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative h-[400px]">
      <img className="object-cover object-center w-full h-full" src={imageSrc} alt={title} />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
        </div>
      <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-center p-4">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
