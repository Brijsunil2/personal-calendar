import { useState, useEffect } from "react";
import { generateCalendarList } from "../utils/CalendarUtils";

const CalendarInterface = () => {
  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currDate, setCurrDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(
    new Date(currDate.getFullYear(), currDate.getMonth(), 1)
  );
  const [calendarList, setCalendarList] = useState([]);

  useEffect(() => {
    setCalendarList([...generateCalendarList(calendarDate)]);
  }, [calendarDate]);

  return (
    <div>
      {calendarList.map((item, i) => (
        <h3 key={i}>{item.date.getDate()}</h3>
      ))}
    </div>
  );
};

export default CalendarInterface;
