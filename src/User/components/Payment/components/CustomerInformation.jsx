import React from "react";
import "../Payments.css";
import Input from "../../Shared/Input/Input";

function CustomerInformation() {
  return (
    <div className="col-md-12 bg-[#f7f8f9] border shadow-sm mt-4">
      <div className="row">
        <div className="col-lg-6 col-md-6">
            <Input label="First Name" type="text"/>
        </div>
        <div className="col-lg-6 col-md-6">
          
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation;
