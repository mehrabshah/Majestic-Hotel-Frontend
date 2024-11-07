import React from "react";
import "../Rooms.css";
import { Link } from "react-router-dom";
const iconPaths = [
  "./assets/room-icons1.png",
  "./assets/room-icons2.png",
  "./assets/room-icons3.png",
  "./assets/room-icons4.png",
  "./assets/room-icons5.png",
  "./assets/room-icons6.png",
];
function RoomsCard({ imageSrc, title, description, price, bookText }) {
  return (
    <div className="card roomscard">
      <img className="card-img-top" src={imageSrc} alt="Card  cap" />
      <div className="card-body pt-0 p-4">
        <div className="day-book p">
          <ul className="d-flex day-book-inner row p-3  flex justify-center ">
            <li className="col-6  text-2xl">
              <Link
                to="https://via.eviivo.com/MajesticHotelBN22"
                className="cursor-pointer"
              >
                {bookText}
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-3">
          <h5 className="card-title main-heading-room">{title}</h5>
          <p className="card-text main-paragraph-room pt-3">{description}</p>
        </div>
        <div className="icons p-4">
          <ul className="d-flex flex-row justify-between">
            {iconPaths.map((path, index) => (
              <li key={index}>
                <img
                  src={path}
                  className="room-icon"
                  alt={`icon${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
