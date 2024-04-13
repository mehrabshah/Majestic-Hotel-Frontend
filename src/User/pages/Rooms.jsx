import React from 'react'
import Hero from '../components/Rooms/Hero/Hero'
import Navbar from '../components/ui/Navbar/Navbar'
import Accommodation from '../components/Rooms/Accommodation/Accommodation'
import Footer from '../components/ui/Footer/Footer'
function Rooms() {

  return (
    <>
         <Navbar/>
         <Hero/>
         <Accommodation/>
         <Footer/>
    </>
  )
}

export default Rooms