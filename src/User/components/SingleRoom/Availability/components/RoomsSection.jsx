import React,{useState} from "react";
import "../Availability.css";
import Booking from "./Booking";
import Rooms from "../../Availability/components/Rooms";
import NoRooms from "./NoRooms";
function RoomsSection({ RoomsData , checkInOutDate , isLoading }) {
  //the numbers of rooms select by the user for each category
  const [bookingDetails, setBookingDetails] = useState([
    { categoryId: 1, numberOfRooms: 0 },
    { categoryId: 2, numberOfRooms: 0 },
    { categoryId: 3, numberOfRooms: 0 },
    { categoryId: 4, numberOfRooms: 0 },
    { categoryId: 5, numberOfRooms: 0 },
    { categoryId: 6, numberOfRooms: 0 },
    { categoryId: 7, numberOfRooms: 0 },
    { categoryId: 8, numberOfRooms: 0 },  
  ]);
  //Price of each category
  const [PrizeDetails, setPriceDetails] = useState([
    { categoryId: 1, price: 0 },
    { categoryId: 2, price: 0 },
    { categoryId: 3, price: 0 },
    { categoryId: 4, price: 0 },
    { categoryId: 5, price: 0 },
    { categoryId: 6, price: 0 },
    { categoryId: 7, price: 0 },
    { categoryId: 8, price: 0 },  
  ]);
  
  return (
    <div className="ps-8 pe-8 mx-auto mt-16">
      <div className="row">
        <div className="col-md-9">
         {RoomsData.map((Room) => (
            <div key={Room.id} className="mt-4">
              <Rooms
                categoryId={Room.id}
                imgSrc={Room.image}
                heading={Room.name}
                price={Room.price}
                availableRooms={Room.availableRooms}
                setBookingDetails={setBookingDetails}
                setPriceDetails={setPriceDetails}
                description={Room.description}
              />
            </div>
          ))}
        </div>
        <div className="col-md-3 ps-4 mt-4 ">
           <Booking checkInOutDate={checkInOutDate}  bookingDetails={bookingDetails} PrizeDetails={PrizeDetails}/> 
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
