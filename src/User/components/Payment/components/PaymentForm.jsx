import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Button/Button";
import CustomerInformation from "./CustomerInformation";
import { Booking } from "../../../Services/Services";
import { formatedDate } from "../../../utils/helpers";
import CustomerInformationSecond from "./CustomerInformationSecond";
import useLocalStorage from "../../../hooks/useLoacalStorage";
import { useNavigate } from "react-router-dom";
function PaymentForm() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  //For get count of  errors of the form
  const [showError, setShowError] = useState(0);
  const {  removeValue,getValue }=useLocalStorage()
  const bookingData = getValue("Add-to-cart");
  const {  bookingDetails , startDate , endDate } = bookingData;
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
  //Error Count of the Form
  const errorKeys = Object.keys(errors);
  const errorCount = errorKeys.length;
  //Registering the fields of CustomerInformationSecond form
  const address = register("address", { required: "Address  is required" });
  const city = register("city", { required: "City is required" });
  const countryRegionCode = register("countryRegionCode", {
    required: "Country Region is required",
  });
  const postalCode = register("postalCode", {
    required: "Postal Code is required",
  });
  const onSubmit = async (data) => {
    reset();
    const filteredbookingDetails = bookingDetails.filter(
      (item) => item.numberOfRooms !== 0
    );
    const details = {
      bookingDetails: filteredbookingDetails,
      commonDetails: data,
    };    
    console.log("booking details",details)
    const response = await Booking(details);
    removeValue()
    navigate('/category/:categoryName');
  };
  //For next step of the Form
  const next = () => {
    if (errorCount === 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  //When to show the error in the second page of multi-Form
  const showErrors = () => {
    setShowError(1)
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
          {step === 0 && (
            <CustomerInformation register={register} errors={errors} />
          )}
          {step === 1 && (
            <CustomerInformationSecond
              register={register}
              errors={showError===1 ? errors : {}}
              address={address}
              city={city}
              countryRegionCode={countryRegionCode}
              postalCode={postalCode}
            />
          )}
          {step === 0 && (
            <div className="d-flex justify-content-end mt-5">
              <Button
                text="Continue"
                backgroundColor="bg-[#9b855b]"
                color="text-[white]"
                padding="ps-4 pe-4 pt-2 pb-2"
                onClick={next}
                type="submit"
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
                onClick={showErrors}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
