import React from "react";

function Accessibility() {
  return (
    <>
      <div
        className="text-center mt-auto mx-auto contact-info py-5 bg-cover bg-center"
        style={{ backgroundImage: "url(assets/contact-bg.jpg)" }}
      >
        <p className="g-book text-uppercase text-white mb-2">The Horizon Hotel</p>
        <h1 className="heading-fonts text-uppercase text-3xl md:text-6xl text-white mb-0">
          {" "}
          Accessibility
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Accessibility at The Horizon Hotel
        </h1>
        <p className="mb-6">
          Welcome to The Horizon Hotel, where we strive to ensure all our
          guests have a comfortable and accessible stay. Our commitment to
          accessibility extends throughout our premises, from our accommodations
          to our amenities and services.
        </p>

        <h2 className="text-2xl font-bold my-4">Accommodations:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Our hotel offers a variety of room types to suit your needs,
            including single, double, family, and twin rooms.
          </li>
          <li>
            For those seeking a picturesque view, we offer sea view options for
            all room types.
          </li>
          <li>
            Each room is equipped with amenities such as a hairdryer, kettle,
            TV, wardrobe, and ensuite bathrooms.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Facilities:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            The Horizon Hotel features a lift for convenient access to all
            floors.
          </li>
          <li>
            Free parking is available at the back of the hotel, with paid
            parking options along the seafront.
          </li>
          <li>
            Accessible toilets are located at the bar and reception areas for
            added convenience.
          </li>
          <li>
            An emergency alarm system is in place to ensure the safety of all
            our guests.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Services:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Service animals are welcome at our hotel.</li>
          <li>
            Our dedicated staff are available 24/7 at the front desk to assist
            you with any queries or requirements.
          </li>
          <li>Room service is available for added comfort and convenience.</li>
          <li>
            Parking permits are available for guests requiring accessible
            parking options.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Location:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Nestled just 200 meters from Eastbourne Beach and 700 meters from
            Eastbourne Pier, The Horizon Hotel offers easy access to the
            stunning South Downs coast.
          </li>
          <li>
            We are located only 0.9 miles from Eastbourne railway station,
            making travel to and from the hotel convenient for all guests.
          </li>
          <li>
            Explore nearby attractions such as the Eastbourne Miniature Steam
            Railway Adventure Park and Glyndebourne Opera House, both within
            easy reach of our hotel.
          </li>
          <li>
            For guests traveling by air, London Gatwick Airport is approximately
            73 km away.
          </li>
        </ul>

        <p className="mb-6">
          At The Horizon Hotel, we're committed to providing a welcoming and
          inclusive environment for all our guests. If you have any specific
          accessibility requirements or questions, please don't hesitate to
          contact us. We look forward to welcoming you to our hotel for an
          unforgettable stay by the sea.
        </p>
      </div>
    </>
  );
}

export default Accessibility;
