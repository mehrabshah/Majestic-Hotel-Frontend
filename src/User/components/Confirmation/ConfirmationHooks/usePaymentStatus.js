import { useEffect, useState } from "react";
import { Booking } from "../../../Services/Services";

export default function usePaymentStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function func(){
      const urlParams = new URLSearchParams(window.location.search);
      const paymentIntentStatus = urlParams.get("redirect_status");
      
      if (paymentIntentStatus === "succeeded") {
        const pendingBooking = JSON.parse(
          localStorage.getItem("pendingBooking")
        );
        const response = await Booking(pendingBooking);
        setStatus("succeeded");
      } else if (paymentIntentStatus === "failed") {
        setStatus("failed");
      } else {
        setStatus("Unknown Status");
      }
    }
    func()
  }, []);

  return status;
}
