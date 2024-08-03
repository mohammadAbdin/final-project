export const generateSchedule = (data) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const periods = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
  ];

  const schedule = [];

  daysOfWeek.forEach((day) => {
    periods.forEach((period) => {
      const entry = data.find(
        (item) => item.day === day && item.period === period
      );
      schedule.push({
        day: day,
        period: period,
        class: entry ? entry.subject : "Break", // Replace "subject" with "class"
      });
    });
  });

  return schedule;
};
