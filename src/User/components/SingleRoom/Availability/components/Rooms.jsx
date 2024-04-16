import React from "react";
import "../Availability.css";
function Rooms({ imgSrc, heading, numberOfGuests, price }) {
  const guestArray = Array.from({ length: numberOfGuests },(_, index) => index
  );
  return (
    <div className="row room">
      <div className="col-md-3 p-0">
        <img src={imgSrc} alt="imgSrc" className="side-image" />
      </div>
      <div className="col-md-9 p-0">
        <h2 className="p-fair room-heading">{heading}</h2>
        <ul className="room-ul-new row p-3">
          <li className="col-3">
            <div>
              <h4 className="guest-heading">Guest(s)</h4>
              <div className="flex flex-row mt-3">
                {guestArray.map((guest, index) => (
                  <img
                    key={index}
                    src="/assets/person.png"
                    className="img-fluid me-2"
                    alt={`Guest ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </li>
          <li className="col-3">
            <div>
            <h4 className="guest-heading">Booking Policy</h4>
            </div>
          </li>
          <li className="col-3">
              <h1 className="d-prices">
                <span>
                <span id="price" className="ft-16 font-bold">{price}</span>
                </span>
                <br/>
                <span>
                </span>
              </h1>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rooms;
