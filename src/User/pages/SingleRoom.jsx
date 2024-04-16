import React from "react";
import Hero from "../components/SingleRoom/Hero/Hero";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/SingleRoom/Footer/Footer";
import Availability from "../components/SingleRoom/Availability/Availability";
function SingleRoom() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Availability/>
      <Footer/>
    </>
  );
}

export default SingleRoom;
