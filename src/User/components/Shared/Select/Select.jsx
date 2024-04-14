import React from 'react'
import "./Select.css"
function Select({ label, register, options, onChange}) {
  return (
    <div className="">
    <label  className="form-label fw-bold mb-0">
      {label} 
    </label>
    <select
      className ="form-select"
      {...register}
      onChange={(e) => {
        if (onChange) onChange(e.target.value);
      }}
    >
      {options.map((option) => (
        <option key ={option.value} value ={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Select