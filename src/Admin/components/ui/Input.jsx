import React from 'react'
export const Input = ({ label, type, register, placeholder, error}) => {
  return (
    <div className="form-group mt-2">
    <label className='text-lg'>{label}:</label>
    <input
      className="w-full border border-gray-300 rounded p-2"
      {...register}
      type={type}
      placeholder={placeholder}
    />
     {error && <p className="text-red-500">{error.message}</p>}
  </div>
  )
}