import React, { useState } from "react";
import { usePriceDetails } from "./hooks/usePriceDetails";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calender({handleDateClick ,categoryId }) {
    const { price } = usePriceDetails(categoryId);  

  return (
    <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    dateClick={handleDateClick}
    events={price}
  />
  )
}

export default Calender