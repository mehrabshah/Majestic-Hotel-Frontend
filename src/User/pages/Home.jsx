import React from 'react'
import Navbar from '../components/ui/Navbar/Navbar'
import Welcome from '../components/ui/Welcome/Welcome'
import Dinning from '../components/ui/Dinning/Dinning'
import Hero from '../components/ui/Hero/Hero'
import Facilities from '../components/ui/Facilities/Facilities'
import Awards from '../components/ui/Awards/Awards'
import Footer from '../components/ui/Footer/Footer'
import Rooms from '../components/ui/Rooms/Rooms'

function Home() {
  return (
    <>
       <Navbar/>
        <Hero/>
        <Welcome/>
         <Rooms/>
        <Dinning/> 
       
        <Facilities/>  
         {/* <Awards/> */}
         <Footer/>     
    </>
  )
}

export default Home