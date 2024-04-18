import React from "react";
import "../Payments.css";
import Input from "../../Shared/Input/Input";

function CustomerInformation({ register }) {
  return (
    <div className="col-md-12 p-4 bg-[#f7f8f9] border shadow-sm mt-4">
      <div className="row ">
        <div className="col-lg-6 col-md-6">
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
            register={register("firstName")}
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <Input
            label="Last Name"
            type="text"
            placeholder="Last Name"
            register={register("lastName")}
          />
          
        </div>
      </div>
      <div className="row  mt-2">
        <div className="col-lg-6 col-md-6">
          <Input
            label="Age"
            type="text"
            placeholder="Age"
            register={register("age")}
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <Input
            label="Status"
            type="text"
            placeholder="Status"
            register={register("status")}
          />
          
        </div>
      </div>
      <div className="row  mt-2">
        <div className="col-lg-6 col-md-6">
          <Input
            label="Phone Number"
            type="text"
            placeholder="Phone Number"
            register={register("phoneNumber")}
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <Input
            label="Email"
            type="text"
            placeholder="Email"
            register={register("email")}
          />
        </div>
      </div>
      <div className="row  mt-2">
        <div className="col-lg-6 col-md-6">
          <Input
            label="Address"
            type="text"
            placeholder="Address"
            register={register("address")}
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <Input
            label="Zip Code"
            type="text"
            placeholder="Zip Code"
            register={register("zipCode")}
          />
        </div>
      </div>
      <div className="row  mt-2">
      <div className="col-lg-6 col-md-6">
          <Input
            label="City"
            type="text"
            placeholder="City"
            register={register("city")}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation;
