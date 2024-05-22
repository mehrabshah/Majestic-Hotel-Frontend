import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./events.css";
// import IntlTelInput from 'react-intl-tel-input';
// import 'react-intl-tel-input/dist/main.css';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Footer from "../ui/Footer/Footer";
import { useContactUs } from "../forms/ContactUs/hooks/useCreateContactUs";
import EventsHero from "./EventsInnerComponent/EventsHero";
import EventsWedding from "./EventsInnerComponent/EventsWedding";
import ConferenceFacts from "./EventsInnerComponent/conferenceFacts";
import EventsSlider from "./EventsInnerComponent/EventSlider";
const EventNCelebrations = () => {
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { submitContactUs, isLoading } = useContactUs(
    setRefreshReCaptcha,
    refreshReCaptcha
  );
  const [telephone, setTelephone] = useState("");
  const onTelephoneChange = (status, phoneNumber, country) => {
    setValue("telephone", phoneNumber); // Set the telephone field phoneNumber using setValue
    setTelephone(phoneNumber);
  };
  const onSubmit = (data) => {
    submitContactUs(data);
    // Handle form submission here (e.g., send data to server)
  };
  const setTokenFunc = (getToken) => {
    setToken(getToken);
  };
  // Sample dropdown options (replace with your actual data)
  const subjectOptions = [
    {
      value: "General information of the hotel",
      label: "General information of the hotel",
    },
    {
      value: "Report website bugs or suggest improvements",
      label: "Report website bugs or suggest improvements",
    },
    { value: "I want to book this hotel", label: "I want to book this hotel" },
    {
      value: "I booked my stay ON THIS WEBSITE and require further information",
      label: "I booked my stay ON THIS WEBSITE and require further information",
    },
    {
      value:
        "I booked my stay ON A DIFFERENT WEBSITE and require further information",
      label:
        "I booked my stay ON A DIFFERENT WEBSITE and require further information",
    },
    { value: "Other", label: "Other" },
  ];

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
      >
        <GoogleReCaptcha
          className="google-recaptcha-custom-class"
          onVerify={setTokenFunc}
          refreshReCaptcha={refreshReCaptcha}
        />
      </GoogleReCaptchaProvider>

      <EventsHero />
      <EventsWedding />
      
      <EventsSlider />
      <div
        className="bg-auto container bg-center"
        style={{ backgroundImage: "url(assets/ONLY_DECOR1.png)" }}
        name="enquiry"
      >
        <div className="flex justify-center items-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl"
          >
            <div className="row">
              <div className="mb-4 col-md-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs italic">
                    Name is required
                  </span>
                )}
              </div>
              <div className="mb-4 col-md-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs italic">
                    {errors.email.type === "required" && "Email is required"}
                    {errors.email.type === "pattern" && "Invalid email format"}
                  </span>
                )}
              </div>
              <div className="mb-4 col-md-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="telephone"
                >
                  Telephone
                </label>
                {/* <IntlTelInput
                  {...register('telephone', { required: true })}
                  containerClassName="intl-tel-input"
                  inputClassName="appearance-none border-sidebottom-0 w-full py-2 px-3 m-[40px] text-gray-700 leading-tight focus:outline-none"
                  value={telephone}
                  onPhoneNumberChange={onTelephoneChange}
                />
                {errors.telephone && <span className="text-red-500 text-xs italic">Telephone is required</span>} */}
                <input
                  {...register("telephone", { required: true })}
                  className="appearance-none border-sidebottom-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                />
                {errors.telephone && (
                  <span className="text-red-500 text-xs italic">
                    telephone is required
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <select
                {...register("subject", { required: true })}
                className="form-control border-rd-2 base-soft-gray-bg w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none"
              >
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <span className="text-red-500 text-xs italic">
                  Subject is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comments"
              >
                Comments
              </label>
              <textarea
                rows={8}
                {...register("comments")}
                className="appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-dark  text-[#f6d284] font-bold py-2 px-4 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventNCelebrations;
