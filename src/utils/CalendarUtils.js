const generateCalendarList = (calendarDate) => {
  const date = new Date(calendarDate);
  date.setDate(1);
  date.setDate(date.getDate() - date.getDay());

  const calendarList = [];

  for (let i = 0; i < 41; i++) {
    calendarList.push({
      date: new Date(date),
      reminders: [],
    });
    date.setDate(date.getDate() + 1);
  }

  return calendarList;
};

export {generateCalendarList};

// Database Storage Structure
// const st = [{
//   user: "x",
//   email: "y@email.com",
//   reminders: [
//     {
//       createdAt: "x",
//       date: "x",
//       reminder: "x",
//     },
//     {
//       createdAt: "x",
//       date: "x",
//       reminder: "x",
//     },
//   ]
// }]

// calandar 7 X 6
