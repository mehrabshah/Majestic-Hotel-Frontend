import React from "react";
import "../Rooms.css";

function RoomsCard({ imageSrc, title, description, price, bookText }) {
  return (
    <div className="card roomscard">
      <img className="card-img-top" src={imageSrc} alt="Card image cap" />
      <div className="card-body pt-0 p-4">
        <div className="day-book p">
          <ul className="d-flex day-book-inner row p-4 ">
            <li className="col-6">{price}</li>
            <li className="col-6">{bookText}</li>
          </ul>
        </div>

        <div className="p-3">
          <h5 className="card-title main-heading-room">{title}</h5>
          <p className="card-text main-paragraph-room pt-3">{description}</p>
        </div>

        <div className="icons p-4">
          <ul className="d-flex flex-row justify-between">
            <li>
              <img src="./assets/room-icons1.png" className="room-icon" alt="icon1" />
            </li>
            <li>
              <img src="./assets/room-icons2.png" className="room-icon" alt="icon2" />
            </li>
            <li>
              <img src="./assets/room-icons3.png" className="room-icon" alt="icon3" />
            </li>
            <li>
              <img src="./assets/room-icons4.png" className="room-icon" alt="icon4" />
            </li>
            <li>
              <img src="./assets/room-icons5.png" className="room-icon" alt="icon5" />
            </li>
            <li>
              <img src="./assets/room-icons6.png" className="room-icon" alt="icon6" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
