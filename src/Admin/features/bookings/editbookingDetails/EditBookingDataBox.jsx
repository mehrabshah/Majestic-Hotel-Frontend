import { format, parseISO, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../../utils/helpers";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import toast from 'react-hot-toast';
import { extractLocalDate, formatedDate } from "../../../../User/utils/helpers";
import Button from "../../../../User/components/Shared/Button/Button";
import { useNavigate } from 'react-router-dom';
import {
  getCurrentDate,
  getDateAfterCurrentDate,
} from "../../../../User/utils/helpers";
import {
  ChatDots,
  CheckCircle,
  CurrencyCircleDollar,
  Warehouse,
} from "@phosphor-icons/react";
import Date from "../../../components/ui/Date";
import { updateBooking } from "../../../services/apiBookings";

function EditBookingDataBox({ booking }) {


  const navigate = useNavigate();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  //Edit the booking details
  const onSubmit = async (data) => {
    const newOrderDetails = {
      firstName: booking.firstName,
      lastName: booking.lastName,
      status: "UpdatedStatus",
      phoneNumber: booking.phoneNumber,
      emailAddress: booking.emailAddress,
      address: booking.address,
      city: booking.city,
      postalCode: booking.postalCode,
      countryRegionCode: booking.countryRegionCode,
    };
    const newData = {
      orderId: booking.orderId,
      startDate: formatedDate(extractLocalDate(data.startDate)),
      endDate: formatedDate(extractLocalDate(data.endDate)),
      newOrderDetails: newOrderDetails,
    };
    updateBooking(newData);
    toast.success('Booking successfully updated.');
    navigate('/bookings');
  };

  return (
    <div className="flex min-w-full flex-col overflow-hidden rounded-md bg-gray-0 shadow-sm">
      <div className="flex items-center justify-between bg-[#fff] px-10 py-5 text-xl font-medium text-brand-50">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto mt-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="flex flex-row   justify-center">
                <FaStar className="star-color ms-2 me-2 mt-[1.1rem]" size={5} />
                <FaStar
                  className="star-color ms-2 me-2 mt-[0.7rem]"
                  size={10}
                />
                <FaStar
                  className="star-color ms-2 me-2 mt-[0.3rem]"
                  size={15}
                />
                <FaStar className="star-color ms-2 me-2" size={20} />
                <FaStar
                  className="star-color ms-2 me-2 mt-[0.3rem]"
                  size={15}
                />
                <FaStar
                  className="star-color ms-2 me-2 mt-[0.7rem]"
                  size={10}
                />
                <FaStar className="star-color ms-2 me-2 mt-[1.1rem]" size={5} />
              </div>
              <div className="row">
                <h1 className="text-center text-5xl text-[#000000] font-semibold p-fair mt-6 ">
                  Edit Booking Details
                </h1>
              </div>
              <div className="row mt-10">
                <div className="flex flex-row mt-4">
                  <div className="flex flex-col justify-between pe-5 ">
                    <span>Booking Id:</span>
                    <span className="font-bold">{booking.orderId}</span>
                  </div>
                  <div className="flex flex-col justify-between px-5">
                    <span>Check-in:</span>
                    <Date
                      control={control}
                      name="startDate"
                      placeholder={extractLocalDate(
                        booking.categories[0].bookingDetails[0].startDate
                      )}
                      label="Check In"
                      labelColor="text-[#fff]"
                      minDate={getCurrentDate()}
                    />
                  </div>
                  <div className="flex flex-col justify-between px-5">
                    <span>Checkout:</span>
                    <Date
                      control={control}
                      name="endDate"
                      placeholder={extractLocalDate(
                        booking.categories[0].bookingDetails[0].endDate
                      )}
                      label="Check Out"
                      labelColor="text-[#fff]"
                      minDate={getDateAfterCurrentDate()}
                    />
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
              <div className="  flex   flex-col  items-end  justify-end">
                <Button
                  type="submit"
                  text="Edit Booking"
                  backgroundColor="bg-green-700"
                  color="text-[#fff]"
                  size="text-[13px]"
                  padding="pt-2 pb-2 ps-12 pe-12"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBookingDataBox;
