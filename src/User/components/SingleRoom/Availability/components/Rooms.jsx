import React, { useState, useEffect } from "react";
import "../Availability.css";
import Select from "../../../Shared/Select/Select";
import { useForm } from "react-hook-form";
import { useBookingContext } from "../../../../contexts/BookingContext";
import {
  extractLocalDate,
  getCurrentDate,
  getDateAfterCurrentDate,
  formatedDate,
} from "../../../../utils/helpers";
import { calculateRoomsPrices } from "../../../../Services/Services";

function Rooms({
  imgSrc,
  heading,
  checkInOutDate,
  availableRooms,
  categoryId,
  description,
  capacityChild,
  capacity,
}) {
  const { bookingDetails, setBookingDetails ,totalPrice, setTotalPrice } =
 useBookingContext();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    checkInCheckOut();
  },[checkInOutDate])


  useEffect(() => {
    fetchRoomPrices();
  }, [bookingDetails, startDate, endDate]);

  //No of Adults allowed for each category
  const capacityArray = Array.from({ length: capacity }, (_, index) => index);
  //No of childs allowed for each cetegory
  const childCapacityArray = Array.from(
    { length: capacityChild },
    (_, index) => index
  );
  //No of rooms aray available for the specific category
  const roomOptions = Array.from(
    { length: availableRooms + 1 },
    (_, index) => ({
      label: index.toString(),
      value: index.toString(),
    })
  );
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  //Function to select the number of rooms
  const updateRooms = () => {

    setBookingDetails((prevBookingDetails) => {
      prevBookingDetails.forEach((bookingDetail, index) => {
        if (bookingDetail.categoryId === categoryId) {
          prevBookingDetails[index] = {
            ...bookingDetail,
            numberOfRooms: watch("numberOfRooms"),
          };
        }
      });
      return [...prevBookingDetails];
    });
  };

  const handleRoomsChange = (e) => {
    const numberOfRooms = e.target.value;
    setValue("numberOfRooms", numberOfRooms); 
    onSubmit({ numberOfRooms }); 
  };

  //Function to set the checkin and checkout date
  //If the checkin and checkout date is null then we  will set the check in and checkout date to present date
  const checkInCheckOut = () => {
    if (checkInOutDate) {
      const startDate = formatedDate(
        extractLocalDate(checkInOutDate.startDate)
      );
      setStartDate(startDate);
      const endDate = formatedDate(extractLocalDate(checkInOutDate.endDate));
      setEndDate(endDate);
    } else {
      const startDate = formatedDate(getCurrentDate());
      setStartDate(startDate);
      const endDate = formatedDate(getDateAfterCurrentDate());
      setEndDate(endDate);
    }
  };

  //Function to fetch the the rooms prices
  const fetchRoomPrices = async () => {
    
    const data = {
      bookingDetails:bookingDetails,
      startDate:startDate,
      endDate:endDate
    };
      
      const response = await calculateRoomsPrices(data);
      setTotalPrice(response)
  };

  // Function to update booking details
  const onSubmit = (data) => {
    updateRooms(data.numberOfRooms);
  }

  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="row room">
      <div className="col-md-3 p-0">
        <img src={imgSrc} alt="imgSrc" className="side-image" />
      </div>
      <div className="col-md-9 p-0">
        <h2 className="p-fair room-heading">{heading}</h2>
        <ul className="room-ul-new row p-3">
          <li className="col-3">
           <div>
              <h4 className="guest-heading">People Allowed</h4>
              <div className="flex flex-row mt-3 items-end">
                {capacity !== 4 ? (
                  capacityArray.map((guest, index) => (
                    <img
                      key={index}
                      src="/assets/person.png"
                      className="img-fluid me-2"
                      alt={`Guest ${index + 1}`}
                    />
                  ))
                ) : (
                  <>
                    <img
                      src="/assets/person.png"
                      className="img-fluid me-2"
                      alt="Guest Family"
                    />
                    <span className="">X 3</span>
                  </>
                )}
                {childCapacityArray.map((guest, index) => (
                  <img
                    key={index}
                    src="/assets/person.png"
                    className="child-image me-2"
                    alt={`Guest ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </li>
          <li className="col-3">
            <div>
              <button
                type="button"
                className="guest-heading cursor-pointer  underline"
                onClick={toggleModal}
              >
                Room Details
              </button>
            </div>
          </li>
          <li className="col-3">
            <h1 className="d-prices">
              <span>
                <span id="price" className="ft-16  uppercase"></span>
              </span>
              <br />
              <span></span>
            </h1>
          </li>
          <li className="col-3">
            <h4 className="guest-heading">No of Room(s)</h4>
            <div className="mt-2">
              <Select
                options={roomOptions}
                register={register("numberOfRooms")}
                onChange={handleRoomsChange}
              /> 
            </div>
          </li>
        </ul>
      </div>
      {/*------------------- Modal Start -----------------*/}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-none">
              <div className="modal-body p-0">
                <img src={imgSrc} alt="imgSrc" className="modal-image" />

                <div className="ps-3 pt-1 pe-2">
                  <h1 className="modal-title d-inline-block p-fair text-[#9b855b]  text-[22px]   mb-3 mt-2">
                    {heading}
                  </h1>
                  <h5 className="text-[#9b855b] text-[22px] ">Description</h5>
                  <p className="mt-3 text-sm">{description}</p>
                </div>
              </div>
              <div className="modal-footer  border-t-0">
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
      {/*------------------------- Modal End ----------------------*/}
    </div>
  );
}

export default Rooms;
