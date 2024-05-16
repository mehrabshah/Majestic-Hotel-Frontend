import React from 'react'
import UpdatePrices from '../features/Price/UpdatePrices'

function Prices() {
  return (
    <>
       <div className="mb-10 flex items-center justify-between">
        <span className="text-3xl font-semibold">Update Prices</span>
      </div>
      <UpdatePrices/>
    </>
  )
}

export default Prices