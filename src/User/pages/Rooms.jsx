import React from "react";
import Hero from "../components/Rooms/Hero/Hero";
import Footer from "../components/ui/Footer/Footer";
import Facilities from "../components/ui/Facilities/Facilities";
import Categories from "../components/Rooms/Categories/Categories";
import NavbarShared from "../components/ui/NavbarShared/NavbarShared"
function Rooms() {
  return (
    <>

      <NavbarShared/>
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
