import { ScheduleEntry } from "../Types/ScheduleEntry";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
const periods = [
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
];

export function addBreaksToSchedule(schedule: ScheduleEntry[]) {
  const updatedSchedule: ScheduleEntry[] = [];

  days.forEach((day) => {
    periods.forEach((period) => {
      const found = schedule.find(
        (entry) => entry.day === day && entry.period === period
      );
      if (found) {
        updatedSchedule.push(found);
      } else {
        updatedSchedule.push({ day, period, class: "Break" });
      }
    });
  });

  return updatedSchedule;
}
