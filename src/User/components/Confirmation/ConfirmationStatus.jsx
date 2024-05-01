import React  from "react";
import Success from "./ConfirmationComponents/Success";
import Failure from "./ConfirmationComponents/Failure";
import usePaymentStatus from "./ConfirmationHooks/usePaymentStatus";

function ConfirmationStatus() {
 const status = usePaymentStatus();

  return (
    <>
       {status=="succeeded" ? <Success/> :  <Failure/> } 
    </>
  );
}

export default ConfirmationStatus;
