import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePriceDetails } from "./hooks/usePriceDetails";
import Modal from "../../components/ui/Modal";

function Calender({ categoryId }) {
  const { price } = usePriceDetails(categoryId);
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };

  return (
    <>
      
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
            events={price}
          />
       
    </>
  );
}

export default Calender;
