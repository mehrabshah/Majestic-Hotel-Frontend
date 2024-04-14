import React from "react";
import Hero from "../components/SingleRoom/Hero/Hero";
import Navbar from "../components/ui/Navbar/Navbar";
import AvailabilityForm from "../components/SingleRoom/AvailabilityForm/AvailabilityForm";
import RoomsSection from "../components/SingleRoom/RoomsDetails/RoomsSection";
import Footer from "../components/SingleRoom/Footer/Footer";
function SingleRoom() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailabilityForm/>
      <RoomsSection/>
      <Footer/>
    </>
  );
}

export default SingleRoom;
