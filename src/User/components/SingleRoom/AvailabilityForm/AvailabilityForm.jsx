import React from "react";
import { useForm } from "react-hook-form";
import DateComponent from "../../Shared/Date/DateComponent";
import Button from "../../Shared/Button/Button";
import "./AvailabilityForm.css";
const  AvailabilityForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  //For Submitting the booking of the User
  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };
  return (
    <div className="xl:ps-[300px] xl:pe-[300px] ">
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg  ps-4 pe-4 mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="booking pb-4 pt-4">
            <div className="flex md:flex-row  flex-col  justify-center">
              <div className="flex md:flex-row flex-col items-center">
                <div className="mx-1 lg:mt-0 mt-3 ">
                  <DateComponent
                    control={control}
                    name="checkin"
                    placeholder="checkin"
                    label="Check In"
                    labelColor="text-[#fff]"
                  />
                </div>
                <div className="mx-1 lg:mt-0 mt-3">
                  <DateComponent
                    control={control}
                    name="checkout"
                    placeholder="checkout"
                    label="Check Out"
                    labelColor="text-[#fff]"
                  />
                </div>
              </div>
              <div className="d-flex lg:flex-row justify-center  items-end">
                <div className="mx-1 lg:mt-0 mt-4">
                  <Button
                    type="submit"
                    text="Check Availability"
                    backgroundColor="bg-[#ebc880bf]"
                    color="text-[#000]"
                    size="text-[13px]"
                    padding="pt-2 pb-2 ps-12 pe-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityForm;
