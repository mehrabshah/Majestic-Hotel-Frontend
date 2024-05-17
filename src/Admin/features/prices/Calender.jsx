import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePriceDetails } from "./hooks/usePriceDetails";

function Calender({ categoryId }) {
  const { price } = usePriceDetails(categoryId);


  const handleDateClick = (arg) => {
    alert(arg.dateStr);
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
