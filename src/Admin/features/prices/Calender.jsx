import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calender({handleDateClick ,categoryId,price}) {

  return (
    <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    dateClick={handleDateClick}
    events={price}
  />
  )
}

export default Calender