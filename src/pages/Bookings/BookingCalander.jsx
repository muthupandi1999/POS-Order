import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const bookings = [
  {
    title: "Booking1",
    start: new Date(2024, 1, 7, 8, 0), // Start at 8:00 AM
    end: new Date(2024, 1, 7, 9, 0), // End at 5:00 PM
  },
  {
    title: "Booking2",
    start: new Date(2024,1, 7, 11, 0), // Start at 10:00 AM
    end: new Date(2024, 1, 7, 12, 0), // End at 12:00 PM
  },
  {
    title: "Booking3",
    start: new Date(2024, 1, 7, 14, 0), // Start at 1:30 PM
    end: new Date(2024, 1, 7, 15, 0), // End at 3:00 PM
  },
  {
    title: "Booking4",
    start: new Date(2024, 1, 7, 16, 0), // Start at 9:30 AM
    end: new Date(2024, 1, 7, 18, 0), // End at 12:00 PM
  },
  {
    title: "Booking5",
    start: new Date(2024, 1, 7, 19, 0), // Start at 2:00 PM
    end: new Date(2024, 1, 7, 22, 0), // End at 4:00 PM
    desc: "Big conference for important people",
  },
];

function BookingCalander() {
  return (
    <div className="mx-8 py-4">
      <Calendar
        onSelectEvent={(e) => {
          console.log(e);
        }}
        onSelecting={() => alert(312321)}
        localizer={localizer}
        events={bookings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default BookingCalander;
