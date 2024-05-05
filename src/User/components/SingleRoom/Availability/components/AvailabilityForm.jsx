import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button/Button";
import Select from "../../../Shared/Select/Select";
import DateComponent from "../../../Shared/Date/DateComponent";
import {
  extractLocalDate,
  getCurrentDate,
  getDateAfterCurrentDate,
} from "../../../../utils/helpers";
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
function AvailabilityForm({ submitAvailabilityForm }) {
  const {
    handleSubmit,
    setValue,
    control,
  } = useForm();
  //Check that which rooms are available on the selected date
  const onSubmit = async (data) => {
    const currentDate = new Date();
    const dateAfterCurrentDate = new Date(currentDate);
    dateAfterCurrentDate.setDate(currentDate.getDate() + 1);
    const startDateValue = data.startDate ? extractLocalDate(data.startDate) : extractLocalDate(currentDate);
    const endDateValue = data.endDate ? extractLocalDate(data.endDate) : extractLocalDate(dateAfterCurrentDate);

    if (!data.startDate || !data.endDate) {
      const newData = { ...data }; 
      if (!data.startDate) {
          newData.startDate = startDateValue;
      }
      if (!data.endDate) {
          newData.endDate = endDateValue;
      }
      data = newData; 
  }
    setValue("startDate", startDateValue);
    setValue("endDate", endDateValue);
    submitAvailabilityForm(data);
};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="booking pb-4 pt-1 ">
          <div className="flex md:flex-row  flex-col  justify-center ps-4 pe-4">
            <div className="row">
              <div className="col-md-3 col-6 lg:mt-0 mt-3  xl:px-1">
                <DateComponent
                  control={control}
                  name="startDate"
                  placeholder={getCurrentDate()}
                  label="Check In"
                  labelColor="text-[#fff]"
                  minDate={getCurrentDate()}
                />
              </div>
              <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                <DateComponent
                  control={control}
                  name="endDate"
                  placeholder={getDateAfterCurrentDate()}
                  label="Check Out"
                  labelColor="text-[#fff]"
                  minDate={getDateAfterCurrentDate()}
                />
              </div>
              <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                <Select
                  label="Adult(s)"
                  options={adultOptions}
                  register="Adultss"
                  width="xl:w-52  md:w-full"
                />
              </div>
              <div className="col-md-3 col-6 lg:mt-0 mt-3 xl:px-1">
                <Select
                  label="Child(s)"
                  options={childOptions}
                  register="Adults"
                  width="xl:w-52  md:w-full"
                />
              </div>
            </div>
            <div className="d-flex lg:flex-row justify-center items-end px-2">
              <div className="px-1 lg:mt-0 mt-4">
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
    </>
  );
}

export default AvailabilityForm;
