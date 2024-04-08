import React from "react";
import "../Rooms.css";

function RoomsCard() {
  return (
    <div className="card  roomscard ">
      <img
        className="card-img-top"
        src="./assets/banner-4.jpg"
        alt="Card image cap"
      />
      <div className="card-body pt-0">
        <div className="day-book  ">
          <ul className="d-flex day-book-inner row p-4">
            <li className="col-6">$400/Night</li>
            <li className="col-6">Book Now</li>
          </ul>
        </div>

        <div className="p-3">
          <h5 className="card-title main-heading-room">Superior Double Room</h5>
          <p className="card-text main-paragraph-room pt-3">
            Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam.
            Nunc rutrum porta ex, in imperdiet tortor feugiat at.
          </p>
        </div>

        <div className="icons">
          <ul className="d-flex flex-row justify-between p-4">
            <li>
              <img
                src="./assets/room-icons1.png"
                className="room-icom"
                alt="img"
              />
            </li>
            <li>
              <img
                src="./assets/room-icons2.png"
                className="room-icom"
                alt="img"
              />
            </li>
            <li>
              <img
                src="./assets/room-icons3.png"
                className="room-icom"
                alt="img"
              />
            </li>
            <li>
              <img
                src="./assets/room-icons4.png"
                className="room-icom"
                alt="img"
              />
            </li>
            <li>
              <img
                src="./assets/room-icons5.png"
                className="room-icom"
                alt="img"
              />
            </li>
            <li>
              <img
                src="./assets/room-icons6.png"
                className="room-icom"
                alt="img"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
