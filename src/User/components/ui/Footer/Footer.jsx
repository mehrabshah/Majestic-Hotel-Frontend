import React from "react";
import "./Footer.css";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  PaperPlaneRight,
} from "@phosphor-icons/react";
const companyLinks = [
  { label: "Rooms", url: "#" },
  { label: "Services", url: "#" },
  { label: "Gallery", url: "#" },
  { label: "Events", url: "#" },
  { label: "Special Offers", url: "#" },
];
const supportLinks = [
  { label: "Reservation Policy", url: "#" },
  { label: "Cancellation Policy", url: "#" },
  { label: "Privacy Policy", url: "#" },
  { label: "Terms and Conditions", url: "#" },
  { label: "Blogs", url: "#" },
];
function Footer() {
  return (
    <>
      <div
        className="mx-auto max-w-screen-xl py-16 xl:px-20 lg:px-12 sm:px-6 px-4 bg-auto bg-center"
        style={{ backgroundImage: "url(assets/ONLY_DECOR1.png)" }}
      >
        <div className="grid ">
          <div className="row">
            <div className="col-md-4">
              <div className="flex flex-col  items-center lg:items-start flex-shrink-0">
                <div className="dark:text-white">
                  <img
                    src="./assets/Logo.png"
                    alt="Logo"
                    className="logo img-fluid py-2 h-[150px] w-auto"
                  />
                </div>
                <div className="flex items-center gap-x-4 mt-2 lg:mt-12">
                  <FacebookLogo size={32} color="#f6d284" />
                  <InstagramLogo size={32} color="#f6d284" />
                  <LinkedinLogo size={32} color="#f6d284" />
                  <XLogo size={32} color="#f6d284" />
                  <YoutubeLogo size={32} color="#f6d284" />
                </div>
              </div>
            </div>
            <div className="col-md-8 md:pt-0 pt-12">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="sm:ml-0 ml-8 flex flex-col">
                    <h2 className="text-base font-semibold leading-4 text-brand-600 bg-black p-3 py-2 w-fit dark:text-white">
                      Company
                    </h2>
                    {companyLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="focus:outline-none focus:underline  hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="flex flex-col">
                    <h2 className="text-base font-semibold leading-4 text-brand-600 bg-black p-3 py-2 w-fit dark:text-white">
                      Support
                    </h2>
                    {supportLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="focus:outline-none focus:underline  hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-10 lg:block">
                    <label className="text-xl font-medium leading-5 text-gray-800 dark:text-white">
                      Get updates
                    </label>
                    <div className="cursor-pointer flex items-center justify-between border border-gray-800 dark:border-white mt-4">
                      <input
                        type="text"
                        className="text-base leading-4 p-4 w-full border-0 focus:outline-none text-gray-800 dark:text-white dark:placeholder-white dark:bg-gray-900 dark:border-white placeholder-gray-800"
                        placeholder="Enter your email"
                      />
                      <button
                        aria-label="send"
                        className="mr-4 fill-current text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      >
                        <PaperPlaneRight size={32} color="#f6d284" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
            © Copyright 2024 Majestic Hotel. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="#_"
              class="text-sm text-gray-600 transition hover:text-primary"
            >
              Terms
            </a>
            <a
              href="#_"
              className="text-sm text-gray-600 transition hover:text-primary"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
