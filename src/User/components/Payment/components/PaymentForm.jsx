import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Button/Button";
import CustomerInformation from "./CustomerInformation";
import { Booking } from "../../../Services/Services";
import {formatedDate} from  "../../../utils/helpers"
import { useBookingContext } from "../../../contexts/BookingContext"
import CustomerInformationSecond from "./CustomerInformationSecond";
function PaymentForm() {
  const [step, setStep] = useState(0);
  const { bookingData } = useBookingContext();
  const { startDate,endDate,bookingDetails } = bookingData;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: formatedDate(startDate),
      endDate: formatedDate(endDate),
      status: "Confirmed",
    },
  });
  const onSubmit = async (data) => {
    reset();
    const filteredbookingDetails = bookingDetails.filter(item => item.numberOfRooms !== 0);
    const details={
      bookingDetails:filteredbookingDetails,
      commonDetails:data
    }
    console.log("details",details)
     const response = await Booking(details);
  };
  //For next strp of the Form
  const next = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="col-md-12 ps-4">
      <div className="row">
        <div class="col-md-12 border shadow-sm mt-4 mt-sm bg-green-light">
          <div class="green text-[13px] pt-3 pb-3 mb-0 ">
            Please complete the below data to secure your booking
          </div>
        </div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className="p-0">
          {step === 0 && <CustomerInformation register={register} />}
          {step === 1 && <CustomerInformationSecond register={register} />}
          {step === 0 && (
            <div className="d-flex justify-content-end mt-5">
              <Button
                text="Continue"
                backgroundColor="bg-[#9b855b]"
                color="text-[white]"
                padding="ps-4 pe-4 pt-2 pb-2"
                type="button"
                onClick={next}
              />
            </div>
          )}
          {step === 1 && (
            <div className="d-flex justify-content-end mt-5">
              <Button
                text="Confirm"
                backgroundColor="bg-[#9b855b]"
                color="text-[white]"
                padding="ps-4 pe-4 pt-2 pb-2"
                type="submit"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
