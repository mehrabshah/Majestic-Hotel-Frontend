import React from "react";

function TermsCondition() {
  return (
    <>
      <div
        className="text-center mt-auto mx-auto contact-info py-5 bg-cover bg-center"
        style={{ backgroundImage: "url(assets/contact-bg.jpg)" }}
      >
        <p className="g-book text-uppercase text-white mb-2">Majestic Hotel</p>
        <h1 className="heading-fonts text-uppercase text-3xl md:text-6xl text-white mb-0">
          Terms & Conditions
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-6">
          Welcome to The Majestic Hotel. We're delighted to have you as our
          guest and want to ensure your stay with us is as smooth and enjoyable
          as possible. Please take a moment to review our terms and conditions
          outlined below:
        </p>

        <h2 className="text-2xl font-bold my-4">
          1. Booking and Reservation Policies:
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>All bookings are subject to availability.</li>
          <li>
            Guests must be at least 18 years of age to make a reservation.
          </li>
          <li>
            A valid credit or debit card is required to secure your booking.
          </li>
          <li>
            Reservation changes or cancellations may be subject to fees; please
            review our cancellation policy for details.
          </li>
          <li>
            Special requests, such as room preferences or dietary requirements,
            should be communicated at the time of booking.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">2. Check-in and Check-out:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Check-in time is at 3:00 PM local time.</li>
          <li>Check-out time is at 11:00 AM local time.</li>
          <li>
            Early check-in and late check-out may be available upon request and
            are subject to availability.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">
          8. Changes to Terms and Conditions:
        </h2>
        <p className="mb-6">
          The Majestic Hotel reserves the right to update or modify these terms
          and conditions at any time without prior notice. Any changes will be
          effective immediately upon posting on our website.
        </p>

        <p className="mb-6">
          By making a reservation at The Majestic Hotel, you agree to abide by
          these terms and conditions. If you have any questions or concerns,
          please don't hesitate to <span className="text-blue-500">contact us</span>
          . Thank you for choosing The Majestic Hotel for your stay. We look
          forward to welcoming you soon!
        </p>
      </div>
    </>
  );
}

export default TermsCondition;
