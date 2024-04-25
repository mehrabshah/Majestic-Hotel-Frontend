import React from "react";
import Input from "../../Shared/Input/Input"

function CustomerInformationSecond({ register,errors  }) {
  return (
    <div className="col-md-12 p-4 bg-[#f7f8f9] border shadow-sm mt-4">
      <div className="row">
        <div className="row pt-8">
          <div className="col-lg-6 col-md-6">
            <Input
              label="Address"
              type="text"
              placeholder="Address"
              register={register("address",{ required: "Address  is required" })}
            />
            {errors.address && <span className="text-red-700">{errors.address.message}</span>}
          </div>
          <div className="col-lg-6 col-md-6">
            <Input
              label="City"
              type="text"
              placeholder="City"
              register={register("city",{ required: "City is required" })}              
            />
            {errors.city && <span className="text-red-700">{errors.city.message}</span>}

          </div>
        </div>
        <div className="row  mt-2 pt-12">
          <div className="col-lg-6 col-md-6">
            <Input
              label="Postal Code"
              type="text"
              placeholder="Postal Code"
              register={register("postalCode",{ required: "Postal Code is required" })}              
            />
            {errors.postalCode && <span className="text-red-700">{errors.postalCode.message}</span>}

          </div>
        </div>
        <div className="row  mt-2 pt-12 pb-8">
          <div className="col-lg-6 col-md-6">
            <Input
              label="Country Region Code"
              type="text"
              placeholder="country Region Code"
              register={register("countryRegionCode",{ required: "Country Region is required" })}              
            />
            {errors.countryRegionCode && <span className="text-red-700">{errors.countryRegionCode.message}</span>}

          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformationSecond;
