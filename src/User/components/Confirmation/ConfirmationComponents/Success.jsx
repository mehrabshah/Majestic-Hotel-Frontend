import React from "react";
import { FaStar } from "react-icons/fa";
import "../Confirmation.css";
import {extractLocalDate} from "../../../utils/helpers"

function Success({ response }) {

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
            Booking Confirmed
          </h1>
          <p className=" mt-24 text-2xl font-medium">
            We are pleased to inform you that your reservation request has been
            received and confirmed.
          </p>
          <p className=" mt-8 text-2xl font-medium">
            Your Booking is confirmed. Thank You!
          </p>
        </div>
        <div className="row">
          <h1 className="text-3xl text-[#000000] font-bold mt-1 p-fair">
            Booking Details
          </h1>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col justify-between pe-5">
              <span>Order No:</span>
              <span className="font-bold">{response?.order?.id}</span>
            </div>
            <div className="flex flex-col justify-between pe-5">
              <span>User Details:</span>
              <span className="font-bold">{response?.order?.firstName} {response?.order?.lastName}, {response?.order?.emailAddress}</span>
            </div>
            <div className="flex flex-col justify-between pe-5">
              <span>Number of Rooms Booked:</span>
              <span className="font-bold">{response?.bookings?.length}</span>
            </div>
            <div className="flex flex-col justify-between pe-5">
              <span>Start Date:</span>
              <span className="font-bold">{extractLocalDate(response?.bookings[0].startDate)}</span>
            </div>
            <div className="flex flex-col justify-between pe-5">
              <span>End Date:</span>
              <span className="font-bold">{extractLocalDate(response?.bookings[0].endDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
