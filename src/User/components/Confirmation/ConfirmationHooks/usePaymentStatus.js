import { useEffect, useState } from "react";

export default function usePaymentStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntentStatus = urlParams.get("redirect_status");

    if (paymentIntentStatus === "succeeded") {
      setStatus("succeeded");
    } else if (paymentIntentStatus === "failed") {
      setStatus("failed");
    } else {
      setStatus("Unknown Status");
    }
  }, []);

  return status;
}
