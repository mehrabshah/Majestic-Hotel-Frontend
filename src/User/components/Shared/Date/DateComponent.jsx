import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateComponent.css";
function DateComponent({ control, name, placeholder, label , labelColor }) {
  // For getting the current date
  const currentDate = new Date();
  return (
    <div className="date-picker  xl:w-52  md:w-full  ">
      <label htmlFor={name} className={`${labelColor}`}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            id={name}
            selected={field.value}
            onSelect={(date) => {
              field.onChange(date);
            }}
            onChange={(date) => {
              field.onChange(date);
            }}
            minDate={currentDate}
            dateFormat="MMMM d, yyyy"
            placeholderText={placeholder} 
            className="cursor-pointer h-[40px] "
          />
        )}
      />
    </div>
  );
}

export default DateComponent;
