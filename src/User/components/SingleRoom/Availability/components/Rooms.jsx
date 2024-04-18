import React from "react";
import "../Availability.css";
import Select from "../../../Shared/Select/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../Shared/Button/Button"
import { useNavigate } from 'react-router-dom';
function Rooms({
  imgSrc,
  heading,
  numberOfGuests,
  price,
  availableRooms,
  checkInOutDate,
  categoryId
}) {
  //No of guests allowed for each category
  const guestArray = Array.from(
    { length: numberOfGuests },
    (_, index) => index
  );
  //No of rooms aray available for the specific category
  const roomOptions = Array.from({ length: availableRooms }, (_, index) => ({
    label: (index + 1).toString(),
    value: (index + 1).toString(),
  }));
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    
    navigate('/payment');
  };
  return (
    <div className="row room">
      <div className="col-md-3 p-0">
        <img src={imgSrc} alt="imgSrc" className="side-image" />
      </div>
      <div className="col-md-9 p-0">
        <h2 className="p-fair room-heading">{heading}</h2>
        <ul className="room-ul-new row p-3">
          <li className="col-3">
            <div>
              <h4 className="guest-heading">Guest(s)</h4>
              <div className="flex flex-row mt-3">
                {guestArray.map((guest, index) => (
                  <img
                    key={index}
                    src="/assets/person.png"
                    className="img-fluid me-2"
                    alt={`Guest ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </li>
          <li className="col-3">
            <div>
              <h4 className="guest-heading">Booking Policy</h4>
            </div>
          </li>
          <li className="col-3">
            <h1 className="d-prices">
              <span>
                <span id="price" className="ft-16 font-bold">
                  {price}
                </span>
              </span>
              <br />
              <span></span>
            </h1>
          </li>
          <li className="col-3">
            <h4 className="guest-heading">No of Room(s)</h4>
            <div className="mt-2">
              <form onSubmit={handleSubmit(onSubmit)} className="p-0">
                <Select options={roomOptions}  register={register("numberOfRooms")}/>
               <div className="mt-4">
                <Button
                type="submit"
                text="BOOK NOW"
                backgroundColor="bg-[#181717]"
                color="text-[#f6d284]"
                padding="p-2"
             />
             </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rooms;
