import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './events.css'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import Footer from '../ui/Footer/Footer';
import { useContactUs } from '../forms/ContactUs/hooks/useCreateContactUs';
const EventNCelebrations = () => {
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [token, setToken] = useState("");
  const { register, handleSubmit, setValue,formState: { errors } } = useForm();
  const { submitContactUs, isLoading } = useContactUs(setRefreshReCaptcha,refreshReCaptcha);
  const [telephone, setTelephone] = useState('');
  const onTelephoneChange = (status, phoneNumber, country) => {
    setValue('telephone', phoneNumber); // Set the telephone field phoneNumber using setValue
    setTelephone(phoneNumber);
  };
  const onSubmit = (data) => {
    console.log(data);
    submitContactUs(data);
    // Handle form submission here (e.g., send data to server)
  };
  const setTokenFunc = (getToken) => {
    setToken(getToken);
  };
  // Sample dropdown options (replace with your actual data)
  const subjectOptions = [
    { value: 'General information of the hotel', label: 'General information of the hotel' },
    { value: 'Report website bugs or suggest improvements', label: 'Report website bugs or suggest improvements' },
    { value: 'I want to book this hotel', label: 'I want to book this hotel' },
    { value: 'I booked my stay ON THIS WEBSITE and require further information', label: 'I booked my stay ON THIS WEBSITE and require further information' },
    { value: 'I booked my stay ON A DIFFERENT WEBSITE and require further information', label: 'I booked my stay ON A DIFFERENT WEBSITE and require further information' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <>
          <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
          <GoogleReCaptcha
            className="google-recaptcha-custom-class"
            onVerify={setTokenFunc}
            refreshReCaptcha={refreshReCaptcha}
          />
        </GoogleReCaptchaProvider>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(./assets/banner-10.jpg)` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl fontPlayfair font-bold text-white">Events & Celebrations</h1>
          <p className="mt-4 text-lg md:text-xl text-white">Extraordinary Elegant Venues</p>
        </div>
      </div>
    </div>
      <div className="bg-auto bg-center" style={{ backgroundImage: 'url(assets/ONLY_DECOR1.png)' }}>
      <div className="row">
      <div className="col-md-12 py-5 text-center">
        <h2 className='fontPlayfair text-xl md:text-2xl font-bold mb-2'>Majestic Hotel England</h2>
        <h4 className='text-xl mb-2'>Begin Your Story With Us</h4>
        <p>Celebrate an unforgettable events at<br />Majestic Hotel England's indoor and outdoor venues.</p>
              <button type="submit" className="border-yellow-top-bottom  mt-3 text-brand-600 font-bold py-2 px-4 focus:outline-none">
                ENQUIRE NOW
              </button>
      </div>
    </div>
        </div>
        <div className="row bg-[#d0ecf1]">
      <div className="col-md-12 pt-5 pb-3 text-center">
        <h2 className="text-uppercase g-book ft-17 border-bottom d-inline-block px-0 px-sm-3 border-color-dark mx-auto pb-2">Wedding planning</h2>
        <h4 className="heading-fonts ft-34 text-uppercase mt-3 col-12 col-md-10 col-lg-6 mx-auto">LET US HELP ORGANIZE YOUR SPECIAL DAY</h4>
        <p className="col-12 col-md-10 col-lg-6 mx-auto">From spacious halls to expansive indoor and outdoor spaces, we are equipped to accommodate banquets, receptions, weddings and official ceremonies.</p>
      </div>

      <div className="col-12">
        <ul className="text-center list-unstyled p-0 wed-plan">
          <div className="row no-gutters">
            <li className="d-inline-block col-6 col-md-2 svg-img">
              <img src="assets/Floral-Arrangement.svg" className="mb-0 mb-md-3" alt="Flower Arrangement" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Flower Arrangement</span>
            </li>
            <li className="d-inline-block col-6 col-sm-2 svg-img">
              <img src="assets/Catering.svg" className="mb-0 mb-md-3" alt="Catering" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Catering</span>
            </li>
            <li className="d-inline-block col-6 col-sm-2 svg-img">
              <img src="assets/Wedding-Cake.svg" className="mb-0 mb-md-3" alt="Wedding Cakes" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Wedding Cakes</span>
            </li>
            <li className="d-inline-block col-6 col-sm-2 svg-img">
              <img src="assets/Car-Rental.svg" className="mb-0 mb-md-3" alt="Car Rental" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Car Rental</span>
            </li>
            <li className="d-inline-block col-6 col-sm-2 svg-img">
              <img src="assets/Accomodation.svg" className="mb-0 mb-md-3" alt="Accommodation" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Accommodation</span>
            </li>
            <li className="d-inline-block col-6 col-sm-2 svg-img">
              <img src="assets/Photography.svg" className="mb-0 mb-md-3" alt="Photography" />
              <span className="g-light text-uppercase d-block mb-3 mb-sm-0">Photography</span>
            </li>
          </div>
        </ul>

        <div className="button-hov button-hov-dark d-block mx-auto mt-3 mt-md-5">
          <a href="javascript:void()" className="text-uppercase inquery-section ft-22 g-bold border-top border-bottom py-2 border-color-dark text-center d-block btn-1 text-dark mx-auto">
            <span>Enquire now</span>
          </a>
        </div>
      </div>
    </div>
      <div className="bg-auto bg-center" style={{ backgroundImage: 'url(assets/ONLY_DECOR1.png)' }}>
        <div className="flex justify-center items-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
            <div className='row'>
              <div className="mb-4 col-md-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input {...register('name', { required: true })} className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                {errors.name && <span className="text-red-500 text-xs italic">Name is required</span>}
              </div>
              <div className="mb-4 col-md-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                {errors.email && (
                  <span className="text-red-500 text-xs italic">
                    {errors.email.type === 'required' && 'Email is required'}
                    {errors.email.type === 'pattern' && 'Invalid email format'}
                  </span>
                )}
              </div>
              <div className="mb-4 col-md-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">Telephone</label>
                <IntlTelInput
                  {...register('telephone', { required: true })}
                  containerClassName="intl-tel-input"
                  inputClassName="appearance-none border-sidebottom-0 w-full py-2 px-3 m-[40px] text-gray-700 leading-tight focus:outline-none"
                  value={telephone}
                  onPhoneNumberChange={onTelephoneChange}
                />
                {errors.telephone && <span className="text-red-500 text-xs italic">Telephone is required</span>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <select {...register('subject', { required: true })} className="form-control border-rd-2 base-soft-gray-bg w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none">
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.subject && <span className="text-red-500 text-xs italic">Subject is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">Comments</label>
              <textarea rows={8} {...register('comments')} className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="bg-dark  text-brand-600 font-bold py-2 px-4 focus:outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EventNCelebrations;
