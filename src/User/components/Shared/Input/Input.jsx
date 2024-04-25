import React from "react";
import "./Input.css";

function Input({ label, register }) {
  return (
    <>
      <div className="wrapper">
        <div className="input-data">
          <input type="text" 
             className ="form-control"
             {...register}      
          />
          <div className="underline"></div>
          <label>{label} *</label>
        </div>
      </div>
    </>
  );
}

export default Input;
