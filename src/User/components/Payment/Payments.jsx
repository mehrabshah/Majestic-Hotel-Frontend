import React from 'react'
import "./Payments.css"
import Sidebar from "../Payment/components/Sidebar"
import PaymentForm from './components/PaymentForm'

function Payments() {
  return (
    <div className='xl:max-w-screen-xl lg:max-w-screen-lg  ps-12 pe-12 mx-auto'>
         <div className='row'>
              <div className='col-md-4'>
                  <Sidebar/>    
              </div>
              <div className='col-md-8'>
                  <PaymentForm/>
              </div>
         </div>
    </div>
  )
}

export default Payments