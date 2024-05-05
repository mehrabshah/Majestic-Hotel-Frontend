import React,{useState} from "react";
import Hero from "../components/SingleRoom/Hero/Hero";
import Footer from "../components/SingleRoom/Footer/Footer";
import Navbar from "../components/SingleRoom/Navbar/Navbar,";
import Availability from "../components/SingleRoom/Availability/Availability";
function SingleRoom() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Navbar showModal={showModal} setShowModal={setShowModal}  />
      <Hero />
       <Availability/> 
      <Footer/>
    </>
  );
}

export default SingleRoom;
