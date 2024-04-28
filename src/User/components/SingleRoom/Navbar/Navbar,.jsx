import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCurrency } from "../../../hooks/useCurrency";
import CurrencyItem from "./Components/CurrencyItem";
import useLocalStorage from "../../../hooks/useLoacalStorage";
//Currency that we need to show on the screen
const keysToKeep = [
  "eur",
  "ar",
  "aud",
  "azn",
  "bhd",
  "xof",
  "inr",
  "bgn",
  "cad",
  "cny",
  "cop",
  "nzd",
  "dkk",
  "egp",
  "fjd",
  "gel",
  "gbp",
  "idr",
  "jod",
  "kzt",
  "kwd",
  "chf",
  "myr",
  "mxn",
  "mdl",
  "omr",
  "pkr",
  "qar",
  "ron",
  "rub",
  "sar",
  "krw",
  "sek",
  "thb",
  "try",
  "aed",
  "ghs",
  "kes",
  "zar",
];
const currenciesFullName = [
  "Euro",
  "Argentine Peso",
  "Australian Dollar",
  "Azerbaijani Manat",
  "Bahraini Dinar",
  "West African CFA Franc",
  "Indian Rupee",
  "Bulgarian Lev",
  "Canadian Dollar",
  "Chinese Yuan",
  "Colombian Peso",
  "New Zealand Dollar",
  "Danish Krone",
  "Egyptian Pound",
  "Fijian Dollar",
  "Georgian Lari",
  "British Pound Sterling",
  "Indonesian Rupiah",
  "Jordanian Dinar",
  "Kazakhstani Tenge",
  "Kuwaiti Dinar",
  "Swiss Franc",
  "Malaysian Ringgit",
  "Mexican Peso",
  "Moldovan Leu",
  "Omani Rial",
  "Pakistani Rupee",
  "Qatari Rial",
  "Romanian Leu",
  "Russian Ruble",
  "Saudi Riyal",
  "South Korean Won",
  "Swedish Krona",
  "Thai Baht",
  "Turkish Lira",
  "United Arab Emirates ",
  "Ghanaian Cedi",
  "Kenyan Shilling",
  "South African Rand"
];
function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const { currencyRate } = useCurrency("usd");
  const currenciesData = currencyRate?.usd || {};
  const [code,setCode]=useState("Usd")
  const { setValue } = useLocalStorage();
  //Set the initial currency
  useEffect(()=>{
  setValue("currency-rate",{"code":"Usd","rate":1})
},[])
  // Filter the currencies that we need to show on the screen
  const filteredCurrencies = Object.entries(currenciesData)
  .filter(([key]) => keysToKeep.includes(key))
  .map(([code, rate]) => ({
    code,
    rate,
    fullName: currenciesFullName[keysToKeep.indexOf(code)],
  }));
  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  //for changing the currency
  const onCurrency = ( rate,code) => {
    setShowModal(false)
    setCode(code)
    setValue("currency-rate",{"code":code,"rate":rate})
  };

  return (
    <>
      <nav className="navbar navbar-expand-xl bg-white pt-0 px-0 px-md-3 pe-lg-5 pb-0 ">
        <div className="container-lg container-fluid nav-padding">
          <NavLink to="/home">
            <img
              src="/assets/Logo.png"
              alt="Logo"
              className="logo img-fluid py-2 w-auto"
            />
          </NavLink>
          <div>
            <button
              type="button"
              onClick={toggleModal}
              className="navbar-nav ms-auto mb-2 mb-lg-0  cursor-pointer"
            >
              Currency <span className="ms-2 underline   capitalize">{code}</span>
            </button>
          </div>
        </div>
      </nav>
      {/* Modal Start */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-none">
              <div className="modal-body">
                <h3 className="currency-setting-head mt-3 text-[#212529] text-start cursor-pointer font-bold text-2xl hover:text-[#0055a5]">
                  All Currencies
                </h3>
                <ul className="grid grid-cols-3 mt-3">
                  {filteredCurrencies.map(({ code, rate, fullName }) => (
                    <CurrencyItem
                      key={code}
                      code={code}
                      rate={rate}
                      fullName={fullName}
                      onClick={onCurrency}
                    />
                  ))}
                </ul>
              </div>
              <div className="modal-footer border-t-0">
                <button
                  type="button"
                  className="btn close-btn"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
      {/* Modal End */}
    </>
  );
}

export default Navbar;
