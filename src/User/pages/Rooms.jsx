import React from "react";
import Hero from "../components/Rooms/Hero/Hero";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import Facilities from "../components/ui/Facilities/Facilities";
import Categories from "../components/Rooms/Categories/Categories";
function Rooms() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <div className="mt-36">
        <Facilities />
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
