import React from "react";
import Hero from "../components/Rooms/Hero/Hero";
import Navbar from "../components/ui/Navbar/Navbar";
import Accommodation from "../components/Rooms/Accommodation/Accommodation";
import Footer from "../components/ui/Footer/Footer";
import Facilities from "../components/ui/Facilities/Facilities";
function Rooms() {
  return (
    <>
      <Navbar />
      <Hero />
      <Accommodation />
      <div className="mt-36">
      <Facilities/>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
