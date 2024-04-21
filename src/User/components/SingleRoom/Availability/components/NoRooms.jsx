import React from "react";

function NoRooms() {
  return (
    <div class="alert alert-warning" role="alert">
      <strong className="flex flex-row justify-center text-center">
        No available rooms on the selected dates, Please select new dates !
      </strong>
    </div>
  );
}

export default NoRooms;
