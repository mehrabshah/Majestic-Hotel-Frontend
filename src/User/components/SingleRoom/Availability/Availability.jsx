import React, { useEffect, useState } from "react";
import RoomsSection from "./components/RoomsSection";
import AvailabilityForm from "./components/AvailabilityForm";
import { getRoomsAvailability } from "../../../Services/Services";
import { getAvailibilityObject } from "../../../utils/helpers";
const Availability = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [RoomsData, setRoomsData] = useState([]);
  useEffect(() => {
    getRooms()
  }, [RoomsData]);
  //Function for get the rooms on selected date
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
      const RoomsData = await getRoomsAvailability(data);
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
      <div className="row">
        <RoomsSection RoomsData={RoomsData}/>
      </div>
    </div>
  );
};

export default Availability;
