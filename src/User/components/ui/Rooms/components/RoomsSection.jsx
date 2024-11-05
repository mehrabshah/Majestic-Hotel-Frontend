import React,{useEffect,useState} from "react";
import { getRoomsPrices } from "../../../../Services/Services"
import { getAvailibilityObject } from "../../../../utils/helpers";
import "../Rooms.css";
import RoomsCard from "./RoomsCard";
function RoomsSection() {
  const [singleRoomPrice, setSingleRoomPrice] = useState(null);
  const [doubleRoomPrice, setDoubleRoomPrice] = useState(null);
  const [twimRoomPrice, setTwimRoomPrice] = useState(null);
  useEffect(()=>{
    getRooms();
  },[]) 
   //Function for get the rooms on selected date
   const getRooms = async () => {
    try {
      const RoomsData = await getRoomsPrices(getAvailibilityObject());
      setSingleRoomPrice(RoomsData[2].price)
      setDoubleRoomPrice(RoomsData[0].price)
      setTwimRoomPrice(RoomsData[1].price)

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="pt-5 pb-5 row ms-2 me-2">
      <div className="col-lg-4   mt-0 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/double-room-image.jpg"
          title="Double Room"
          description="Indulge in the comfort and elegance of our contemporary double rooms, each featuring a plush double bed and a luxurious en-suite bathroom"
          price={`£${doubleRoomPrice}/Night`}
          bookText="Book Now"
        />
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/twim-room-image.jpg"
          title="Twim Room"
          description="Experience spacious comfort and exceptional value in our twin rooms, featuring two cozy single beds ideal for a relaxing stay"
          price={`£${twimRoomPrice}/Night`}
          bookText="Book Now"
        />
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
        <RoomsCard
          imageSrc="./assets/single-image.jpg"
          title="Single Room"
          description="Single rooms, where comfort meets convenience for the solo traveler & features a snug single bed designed for a peaceful night's rest."
          price={`£${singleRoomPrice}/Night`}
          bookText="Book Now"
        />
      </div>
    </div>
  );
}

export default RoomsSection;
