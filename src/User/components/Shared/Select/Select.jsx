import React from 'react'
import "./Select.css"
function Select({ label, register, options ,width, onChange }) {
  return (
    <div className={`${width}`}>
    <label  className="form-label text-[#fff] mb-0">
      {label} 
    </label>
    <select
      className ="form-select h-[40px]"
      {...register}
      onChange={onChange}
      
    >
      {options.map((option) => (
        <option key ={option.value} value ={option.value} >
          {option.label}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Select


