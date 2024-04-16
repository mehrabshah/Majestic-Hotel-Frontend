import React from "react";
import { useForm } from "react-hook-form";
import DateComponent from "../../Shared/Date/DateComponent";
import Button from "../../Shared/Button/Button";
import "./Availability.css";
import Select from "../../Shared/Select/Select";
import RoomsSection from "./components/RoomsSection";
const childOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];
const adultOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];
const Availability = () => {
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
    <div className="xl:ps-[4rem] xl:pe-[4rem]">
      <div className="xl:max-w-screen-xl   xl:ps-4 xl:pe-4 mx-auto ">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="booking pb-4 pt-1 ">
              <div className="flex md:flex-row  flex-col  justify-center ps-4 pe-4">
                <div className="row">
                  <div className="col-md-3 col-6 lg:mt-0 mt-3  xl:px-1">
                    <DateComponent
                      control={control}
                      name="checkin"
                      placeholder="checkin"
                      label="Check In"
                      labelColor="text-[#fff]"
                    />
                  </div>
                  <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                    <DateComponent
                      control={control}
                      name="checkout"
                      placeholder="checkout"
                      label="Check Out"
                      labelColor="text-[#fff]"
                    />
                  </div>
                  <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                    <Select
                      label="Adult(s)"
                      options={adultOptions}
                      register="Adultss"
                    />
                  </div>
                  <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                    <Select
                      label="Child(s)"
                      options={childOptions}
                      register="Adults"
                    />
                  </div>
                </div>
                <div className="d-flex lg:flex-row justify-center items-end px-2">
                  <div className="px-1 lg:mt-0 mt-4">
                    <Button
                      type="button"
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
        <div className="row">
           <RoomsSection/>
        </div>
      </div>
    </div>
  );
};

export default Availability;
