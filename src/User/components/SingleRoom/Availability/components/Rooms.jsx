import React from "react";
import "../Availability.css";
import Select from "../../../Shared/Select/Select";
import { useForm } from "react-hook-form";
function Rooms({
  imgSrc,
  heading,
  numberOfGuests,
  price,
  availableRooms,
  categoryId,
  setBookingDetails,
  setPriceDetails,
}) {
  //No of guests allowed for each category
  const guestArray = Array.from(
    { length: numberOfGuests },
    (_, index) => index
  );
  //No of rooms aray available for the specific category
  const roomOptions = Array.from({ length: availableRooms + 1 }, (_, index) => ({
    label: (index ).toString(),
    value: (index ).toString(),
  }));
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  // Function to update booking details
  const updateBookingDetails = () => {
    setBookingDetails(prevBookingDetails => {
      const updatedBookingDetails = [...prevBookingDetails];
      updatedBookingDetails[categoryId-1] = {categoryId:categoryId, numberOfRooms: watch("numberOfRooms")};
      return updatedBookingDetails;
    });
    updatePriceDetails();
  };
  // Function to update price details
const updatePriceDetails = () => {
  setPriceDetails(prevPriceDetails => {
    const updatedPriceDetails = [...prevPriceDetails];
    updatedPriceDetails[categoryId-1]={categoryId:categoryId, price: watch("numberOfRooms")*price};
    return updatedPriceDetails;
  });
};
  
  return (
    <div className="row room">
      <div className="col-md-3 p-0">
        <img src = {imgSrc} alt="imgSrc" className = "side-image" />
      </div>
      <div className = "col-md-9 p-0">
        <h2 className = "p-fair room-heading">{heading}</h2>
        <ul className = "room-ul-new row p-3">
          <li className = "col-3">
            <div>
              <h4 className = "guest-heading">Guest(s)</h4>
              <div className = "flex flex-row mt-3">
                {guestArray.map((guest, index) => (
                  <img
                    key = {index}
                    src = "/assets/person.png"
                    className = "img-fluid me-2"
                    alt = {`Guest ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </li>
          <li className = "col-3">
            <div>
              <h4 className = "guest-heading">Booking Policy</h4>
            </div>
          </li>
          <li className="col-3">
            <h1 className="d-prices">
              <span>
                <span id="price" className = "ft-16 font-bold">
                  {price}
                </span>
              </span>
              <br />
              <span></span>
            </h1>
          </li>
          <li className = "col-3">
            <h4 className = "guest-heading">No of Room(s)</h4>
            <div className = "mt-2">
                <Select
                  options = {roomOptions}
                  register = {register("numberOfRooms")}
                  onClick = {updateBookingDetails}
                />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rooms;
