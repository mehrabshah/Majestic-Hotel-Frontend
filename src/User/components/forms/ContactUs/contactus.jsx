import React from 'react';
import { useForm } from 'react-hook-form';
import './contactus.css'
import ContactUsInfo from './ContactUsInfo';
const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here (e.g., send data to server)
  };

  // Sample dropdown options (replace with your actual data)
  const dropdownOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Mrs', label: 'Mrs' },
  ];

  return (
    <>
    <ContactUsInfo/>
    <div className="bg-auto bg-center" style={{ backgroundImage: 'url(assets/ONLY_DECOR1.png)' }}>
      <div className="flex justify-center items-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
          <div className='row'>
          <div className="mb-4 col-md-2 col-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <select {...register('title', { required: true })} className="appearance-none border border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none">
              {dropdownOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.title && <span className="text-red-500 text-xs italic">Title is required</span>}
          </div>
          <div className="mb-4 col-md-5 col-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
            <input {...register('firstName', { required: true, maxLength: 50 })} className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
            {errors.firstName && (
              <span className="text-red-500 text-xs italic">
                {errors.firstName.type === 'required' && 'First name is required'}
                {errors.firstName.type === 'maxLength' && 'First name cannot exceed 50 characters'}
              </span>
            )}
          </div>
          <div className="mb-4 col-md-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
            <input {...register('lastName', { required: true, maxLength: 50 })} className="appearance-none border-sidebottom-0  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
            {errors.lastName && (
              <span className="text-red-500 text-xs italic">
                {errors.lastName.type === 'required' && 'Last name is required'}
                {errors.lastName.type === 'maxLength' && 'Last name cannot exceed 50 characters'}
              </span>
            )}
          </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
            {errors.email && (
              <span className="text-red-500 text-xs italic">
                {errors.email.type === 'required' && 'Email is required'}
                {errors.email.type === 'pattern' && 'Invalid email format'}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input {...register('phone', { pattern: /^\d+$/ })} className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
            {errors.phone && (
              <span className="text-red-500 text-xs italic">
                {errors.phone.type === 'pattern' && 'Invalid phone number (digits only)'}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="howCanWeHelp">How Can We Help You?</label>
            <textarea rows={8} {...register('howCanWeHelp')} className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>

  );
};

export default ContactUs;
