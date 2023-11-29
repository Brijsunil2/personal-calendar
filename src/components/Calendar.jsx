import { useState, useEffect } from "react";

const Calendar = () => {
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
  const [calendarArr, setCalendarArr] = useState();
  

  useEffect(() => {
    setTimeout(() => {
      setCurrDate(new Date());
    }, 1000);
  }, [currDate, setCurrDate]);

  return <div>hello</div>;
};

export default Calendar;
