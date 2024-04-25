import React from "react";
import "../Payments.css";
import Input from "../../Shared/Input/Input";

function CustomerInformation({ register, errors }) {
  return (
    <div className="col-md-12 p-4 bg-[#f7f8f9] border shadow-sm mt-4 nav-border">
      <div className="row  pt-6">
        <div className="col-lg-6 col-md-6">
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
            register={register("firstName",{ required: "First name is required" })}
          />
          {errors.firstName && <span className="text-red-700">{errors.firstName.message}</span>}
        </div>
        <div className="col-lg-6 col-md-6">
          <Input
            label="Last Name"
            type="text"
            placeholder="Last Name"
            register={register("lastName",{ required: "Last name is required" })}
          />
          {errors.lastName && <span className="text-red-700">{errors.lastName.message}</span>}
        </div>
      </div>

      <div className="row  mt-2 pt-6 ">
        <div className="col-lg-8 col-md-6">
          <Input
            label="Phone Number"
            type="text"
            placeholder="Phone Number"
            register={register("phoneNumber",{ required: "Phone number is required" })}
          />
          {errors.phoneNumber && <span className="text-red-700">{errors.phoneNumber.message}</span>}
        </div>
      </div>
      <div className="row  mt-2 pt-6">
        <div className="col-lg-8 col-md-6">
          <Input
            label="Email"
            type="text"
            placeholder="Email"
            register={register("emailAddress",{
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.emailAddress && <span className="text-red-700">{errors.emailAddress.message}</span>}
        </div>
      </div>

      <div className="row  mt-2 pt-6 pb-6">
        <div className="col-lg-8 col-md-6">
          <Input
            label="Age"
            type="text"
            placeholder="Age"
            register={register("age",{ required: "Age is required" })}
          />
          {errors.age && <span className="text-red-700">{errors.age.message}</span>}
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation;
