import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Button/Button";
import CustomerInformation from "./CustomerInformation";
import { Booking } from "../../../Services/Services";
import { formatedDate } from "../../../utils/helpers";
import CustomerInformationSecond from "./CustomerInformationSecond";
import useLocalStorage from "../../../hooks/useLoacalStorage";
import { useNavigate } from "react-router-dom";
import Checkout from "../../../../Admin/features/payment/Checkout";
function PaymentForm() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  //For get count of  errors of the form
  const [showError, setShowError] = useState(0);
  const { removeValue, getValue } = useLocalStorage();
  const bookingData = getValue("Add-to-cart");
  const { totalPrice, bookingDetails, startDate, endDate } = bookingData;

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
  const address = register("address", 
  { required: "Address  is required" }
);
  const city = register("city", 
  { required: "City is required" }
);
  const countryRegionCode = register("countryRegionCode", {
    required: "Country Region is required",
  });
  const postalCode = register("postalCode", {
    required: "Postal Code is required",
  });
  const onSubmit = async (data) => {
    setStep(2);
    reset();
    const filteredbookingDetails = bookingDetails.filter(
      (item) => item.numberOfRooms !== 0
    );
    const details = {
      bookingDetails: filteredbookingDetails,
      commonDetails: data,
    };
    localStorage.setItem("pendingBooking", JSON.stringify(details));;
  };
  //For next step of the Form
  const next = () => {
    if (errorCount === 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const back = () => {
    setStep((prevStep) => prevStep - 1);
  };
  //When to show the error in the second page of multi-Form
  const showErrors = () => {
    setShowError(1);
  };
  const [clientSecret, setClientSecret] = useState("");
  // const
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_BACKEND_URL}booking/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount:totalPrice, currency:"USD" })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  return (
    <div className="col-md-12 sm:ps-4">
      <div className="row">
        <div className="col-md-12 border shadow-sm mt-4 mt-sm bg-green-light">
          <div className="green text-[13px] pt-3 pb-3 mb-0 ">
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
              errors={showError === 1 ? errors : {}}
              address={address}
              city={city}
              countryRegionCode={countryRegionCode}
              postalCode={postalCode}
            />
          )}
          <div className="flex justify-end w-full mt-3">
            {step <= 1 && step > 0 && (
              <div className="d-flex justify-content-end">
                <Button
                  text="Back"
                  backgroundColor="bg-[#9b855b]"
                  color="text-[white]"
                  padding="ps-4 pe-4 pt-2 pb-2"
                  onClick={back}
                  />
              </div>
            )}
            {step < 1 && (
              <div className="flex w-full flex-row justify-end">
                <Button
                  text="Continue"
                  backgroundColor="bg-[#9b855b]"
                  color="text-[white]"
                  padding="ps-4 pe-4 pt-2 pb-2"
                  onClick={next}
                  />
              </div>
            )}
            {step === 1 && (
              <div className="flex w-full  justify-end">
                <Button
                  text="Payment"
                  backgroundColor="bg-[#9b855b]"
                  color="text-[white]"
                  padding="ps-4 ms-4  pe-4 pt-2 pb-2 "
                  type="submit"
                  onClick={showErrors}
                  />
              </div>
            )}
          </div>
        </form>
      {step === 2 && <Checkout clientSecret={clientSecret}/>}
      </div>
    </div>
  );
}

export default PaymentForm;
