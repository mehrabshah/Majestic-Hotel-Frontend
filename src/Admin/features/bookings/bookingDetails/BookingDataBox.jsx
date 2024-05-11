import { format, parseISO, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../../utils/helpers";
import { FaStar } from "react-icons/fa";
import { extractLocalDate } from "../../../../User/utils/helpers";
import {
  ChatDots,
  CheckCircle,
  CurrencyCircleDollar,
  Warehouse,
} from "@phosphor-icons/react";


function BookingDataBox({ booking }) {
  return (
    <div className="flex min-w-full flex-col overflow-hidden rounded-md bg-gray-0 shadow-sm">
      <div className="flex items-center justify-between bg-[#fff] px-10 py-5 text-xl font-medium text-brand-50">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto mt-12">
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
                Booking Details
              </h1>
            </div>
            <div className="row mt-10">
              <div className="flex flex-row mt-4">
                <div className="flex flex-col justify-between pe-5 ">
                  <span>Booking:</span>
                  <span className="font-bold">{booking.orderId}</span>
                </div>
                <div className="flex flex-col justify-between px-5">
                  <span>Check-in:</span>
                  <span className="font-bold">
                    {extractLocalDate(
                      booking.categories[0].bookingDetails[0].startDate
                    )}
                  </span>
                </div>
                <div className="flex flex-col justify-between px-5">
                  <span>Checkout:</span>
                  <span className="font-bold">
                    {extractLocalDate(
                      booking.categories[0].bookingDetails[0].endDate
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mb-24">
              <h1 className="text-3xl text-[#000000] font-bold mt-10 p-fair">
                Details
              </h1>

              {booking.categories.map((category, index) => (
                <div className="row" key={index}>
                  <div className="col-6">
                    <span className="font-bold">Category:</span>
                    <span className="ms-1">{category.category.name}</span>
                  </div>
                  <div className="col-6">
                    <span className="font-bold">Number of Rooms:</span>
                    <span className="ms-1">{category.numberOfRooms}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDataBox;
