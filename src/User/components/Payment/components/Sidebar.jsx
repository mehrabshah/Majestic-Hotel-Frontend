import React,{useState,useEffect} from "react";
import "../Payments.css";
import { FaStar } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import { useNavigate } from 'react-router-dom';
import {calculateNumberOfNights} from "../../../utils/helpers"
import useLocalStorage from "../../../hooks/useLoacalStorage";
import  {useBookingContext} from "../../../contexts/BookingContext"

function Sidebar() {
  const navigate = useNavigate();
  const { getValue , removeValue }=useLocalStorage()
  const [currency,setCurrency]=useState({})
  useEffect(()=>{
    const currencyRate = getValue("currency-rate")
    setCurrency(currencyRate)
  },[])
  const bookingData = getValue("Add-to-cart");
  const { totalPrice, totalRooms,startDate,endDate } = bookingData;
  const  {setBookingDetails,setTotalPrice} = useBookingContext()

  const Change=()=>{
    navigate('/rooms');
    removeValue() 
    //Reset the bookings details
    setBookingDetails(
      [
        { categoryId: 1, numberOfRooms: 0 },
        { categoryId: 2, numberOfRooms: 0 },
        { categoryId: 3, numberOfRooms: 0 },
        { categoryId: 4, numberOfRooms: 0 },
        { categoryId: 5, numberOfRooms: 0 },
        { categoryId: 6, numberOfRooms: 0 },
        { categoryId: 7, numberOfRooms: 0 },
        { categoryId: 8, numberOfRooms: 0 },
      ]
    )
    //Reset the price details
    setTotalPrice(null)
  }
  return (
    <div className="col-md-12 sidebar">
      <div className="row">
        <div className="flex shadow-sm mt-0 mt-md-4  box-border   p-3 bg-[#ffffff]  mb-3">
          <img src="/assets/banner-1.jpg" className="info-image" />
          <div className="flex flex-col ms-2 box-border">
            <h5 className=" text-[15px]  leading-5">Majestic Hotel England</h5>
            <div className="flex flex-row mt-1">
              <FaStar className="star-color" />
              <FaStar className="star-color ms-1" />
              <FaStar className="star-color ms-1" />
              <FaStar className="star-color ms-1" />
              <FaStar className="star-color ms-1" />
            </div>
            <p className="text-dark  varela-round mb-0 mb-md-2 text-[13px] break-words mt-2  pe-8 ">
            26-34 Royal Parade, Eastbourne, BN22 7AN, United Kingdom
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 border  shadow-sm mt-8 mt-md-4  mx-md-0">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0 d-none d-md-block">
              <div className="bg-[#000] text-uppercase text-center  ft-13 mt-n3 shadow py-2 text-white">
                Booking Details
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-6 border-bottom border-md-bottom-0 border-right px-0 px-md-2 pb-3">
              <div className="mt-3">
                <h1 className="text-capitalize text-[16px] g-book text-[#9b855b] ft-14-res text-center">
                  Check In:
                </h1>
                <p className="text-capitalize checkin-date text-[14px] ft-14-res text-center g-book mt-1">
                  <b> {startDate} </b>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-6 border-bottom border-md-bottom-0 border-left border-md-left-0 px-0 pb-3 px-md-2">
              <div className="mt-3">
                <h1 className="text-capitalize text-[16px] g-book text-[#9b855b] ft-14-res text-center">
                  Check Out:
                </h1>
                <p className="text-capitalize checkout-date text-[14px] ft-14-res text-center g-book mt-1">
                  <b>{endDate}</b>
                </p>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-md-6 col-6">
              <Button
                text="Change"
                color="text-[#9b855b]"
                border="border-2 border-[#9b855b] rounded-md"
                padding="ps-2 pe-2 pt-2 pb-2"
                onClick={Change}
              />
            </div>
            <div className="col-md-6 col-6 my-auto">
              <p className=" text-[15px]  float-end text-capitalize text-[#9b855b]">
              {calculateNumberOfNights(startDate, endDate)} Night
              </p>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-md-12">
              <div className="mt-3">
                <h1 className="text-capitalize  text-[14px]  text-bold">
                {totalRooms} Rooms
                  <span className="float-right text-[13px] uppercase  text-lighter ">
                  {currency.code} {" "} {totalPrice*currency.rate}
                  </span>
                </h1>
                <h1 className="text-capitalize loyaltydiscountdiv  ft-[14px]  text-bold  hidden">
                  Loyalty Discount
                  <span className="float-right text-[13px]  text-lighter">
                    USD -<span className="discountamount"></span>
                  </span>
                </h1>
                <h1 className="text-capitalize loyaltydiscountdiv pb-4 text-[14px] text-bold hidden">
                  Room Price After Discount
                  <span className="float-right text-[13px] text-lighter">
                    USD
                    <span className="afterdiscountamount"></span>
                  </span>
                </h1>
                <br />
                <div className="clearfix"></div>
                <span className="text-capitalize  text-[14px] text-bold"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mt-3 border mb-3 p-3 shadow-sm  float-left w-100">
                <h1 className="text-capitalize  text-[20px]  text-lighter">
                  Price <span className="text-[12px] mt-2"></span>
                </h1>
                <h1 className=" ft-14 ft-14-res text-lighter">
                  <span className="float-right ft-13-res ft-18 text-bold text-main totalprice uppercase  linethrough mt-xl-n4">
                  {currency.code} {" "}
                    <span id="totalprice wwss" className="linethrough">
                      {totalPrice*currency.rate}
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Sidebar;
