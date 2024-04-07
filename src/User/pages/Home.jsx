import React from 'react'
import Navbar from '../components/ui/Navbar/Navbar'
import Welcome from '../components/ui/Welcome/Welcome'
import Dinning from '../components/ui/Dinning/Dinning'
import Hero from '../components/ui/Hero/Hero'
import Facilities from '../components/ui/Facilities/Facilities'

function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Welcome/>
       <Dinning/>
       <Facilities/>
    </>
  )
}

export default Home