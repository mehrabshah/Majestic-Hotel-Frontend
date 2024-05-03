import { useEffect, useState } from "react";
import { Booking } from "../../../Services/Services";

export default function usePaymentStatus() {
  const [status, setStatus] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function func() {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentIntentStatus = urlParams.get("redirect_status");

      if (paymentIntentStatus === "succeeded") {
        const pendingBooking = localStorage.getItem("pendingBooking");
        if (!pendingBooking) {
          setStatus("No pending booking found");
          return;
        }
        const parsedPendingBooking = JSON.parse(pendingBooking);
        const response = await Booking(parsedPendingBooking);
        console.log(response);
        setResponse(response);
        setStatus("succeeded");
        localStorage.removeItem("pendingBooking");
        localStorage.setItem("confirmBooking", JSON.stringify(response));
      } else if (paymentIntentStatus === "failed") {
        setStatus("failed");
      } else {
        setStatus("Unknown Status");
      }
    }
    func();
  }, []);

  return { status: status, response: response };
}
