import React from "react";
import "./Input.css";

function Input({ label, type, register, placeholder = "", error }) {
  return (
    <>
    <label htmlFor="exampleFormControlInput1" className="form-label fw-bold mb-0">
      {label} <span className="text-danger">*</span>
    </label>
    <input
      type ={type}
      className ="form-control"
      {...register}
      placeholder ={placeholder}
      
    />
    {error && <p className="text-danger">{error.message}</p>}
  </>

  );
}

export default Input;
