import React, { useEffect, useState } from "react";
import RoomsSection from "./components/RoomsSection";
import AvailabilityForm from "./components/AvailabilityForm";
import { getRoomsAvailability } from "../../../Services/Services";
import { getAvailibilityObject } from "../../../utils/helpers";
import NoRooms from "./components/NoRooms";
import Loader from "./components/Loader";
const Availability = () => {
  const [setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [RoomsData, setRoomsData] = useState([]);
  const [checkInOutDate, setCheckInOutDate] = useState(null);
  useEffect(() => {
  getRooms();
}, []);
 
  //Function for get the rooms on current date
  const getRooms = async () => {
    try {
      const RoomsData = await getRoomsAvailability(getAvailibilityObject());
      setRoomsData(RoomsData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  //Submit the availibility form with the selected date
  const submitAvailabilityForm = async (data) => {
    try {
      setRoomsData([]);
      setIsLoading(true);
      const RoomsData = await getRoomsAvailability(data);
      setCheckInOutDate(data);
      setRoomsData(RoomsData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="xl:max-w-screen-xl mx-auto ps-4 pe-4 ">
      <div className="row">
        <AvailabilityForm submitAvailabilityForm={submitAvailabilityForm} />
      </div>
      {RoomsData.length !== 0 && (
        <div className="row">
          <RoomsSection
            RoomsData={RoomsData}
            checkInOutDate={checkInOutDate}
            isLoading={isLoading}
          />
        </div>
      )}
      {isLoading === true && (
        <div className="row  mt-32  xl:mx-60  lg:mx-48  flex flex-row justify-center">
          <Loader />
        </div>
      )}
      {RoomsData.length === 0 && isLoading === false && (
        <div className="row  my-14  xl:mx-60  lg:mx-48 ">
          <NoRooms />
        </div>
      )}
    </div>
  );
};

export default Availability;
