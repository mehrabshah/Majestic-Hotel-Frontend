import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { informationSchema } from "../../../components/Shared/Validations/Validations";
import Button from "../../Shared/Button/Button";
import CustomerInformation from "./CustomerInformation";
import { formatedDate } from "../../../utils/helpers";
import { Booking } from "../../../Services/Services";
function PaymentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoryId:JSON.parse(localStorage.getItem('categoryId')),
      numberOfRooms:JSON.parse(localStorage.getItem('numberOfRooms')),
      startDate:JSON.parse(localStorage.getItem('startDate')),
      endDate:JSON.parse(localStorage.getItem('endDate'))
    },
  });

  const onSubmit = async (data) => {
    reset();
    const response=await Booking(data)
    console.log("final",response);
    localStorage.clear();

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
          <CustomerInformation register={register} />
          <div className="d-flex justify-content-end mt-5">
            <Button
              text="Book"
              backgroundColor="bg-[#9b855b]"
              color="text-[white]"
              padding="ps-4 pe-4 pt-2 pb-2"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
