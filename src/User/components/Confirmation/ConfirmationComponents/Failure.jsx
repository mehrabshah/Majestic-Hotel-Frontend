import React from "react";
import { FaStar } from "react-icons/fa";
import "../Confirmation.css";
import Button from "../../Shared/Button/Button";
import  useLocalStorage  from "../../../hooks/useLoacalStorage";
import { useNavigate } from 'react-router-dom';

function Failure() {
  const navigate = useNavigate();
  const { removeValue } = useLocalStorage();
  const backToBooking = () => {
    removeValue()
    navigate('/single-room');
  };
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto mt-24">
      <div className="row">
        <div className="flex flex-row   justify-center">
          <FaStar className="star-color ms-2 me-2 mt-[1.1rem]" size={5} />
          <FaStar className="star-color ms-2 me-2 mt-[0.7rem]" size={10} />
          <FaStar className="star-color ms-2 me-2 mt-[0.3rem]" size={15} />
          <FaStar className="star-color ms-2 me-2" size={20} />
          <FaStar className="star-color ms-2 me-2 mt-[0.3rem]" size={15} />
          <FaStar className="star-color ms-2 me-2 mt-[0.7rem]" size={10} />
          <FaStar className="star-color ms-2 me-2 mt-[1.1rem]" size={5} />
        </div>
        <div className="row">
          <h1 className="text-center text-5xl text-[#000000] font-semibold p-fair mt-6 ">
            Booking Rejected
          </h1>
          <p className=" mt-24 text-2xl font-medium">
            We're sorry, but your booking could not be confirmed.
          </p>
          <p className=" mt-8 text-2xl font-medium">
            Your Booking is Rejected. Thank You!
          </p>
          <div className="flex w-full flex-row justify-start mt-[2.4rem]">
            <Button
              text="Back to Booking"
              backgroundColor="bg-[#9b855b]"
              color="text-[white]"
              padding="ps-4 pe-4 pt-2 pb-2"
              onClick={backToBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Failure;
