import Schedule from "../../../Components/ClassSchedule/Schedule";

import { ScheduleEntry } from "../../../Types/ScheduleEntry";
function StudentSchedule() {
  const exampleScheduleData: ScheduleEntry[] = [
    { day: "Sunday", period: "08:00-09:00", class: "1" },
    { day: "Sunday", period: "09:00-10:00", class: "2" },
    { day: "Sunday", period: "10:00-11:00", class: "3" },
    { day: "Sunday", period: "11:00-12:00", class: "Break" },
    { day: "Sunday", period: "12:00-13:00", class: "4" },

    { day: "Monday", period: "08:00-09:00", class: "1" },
    { day: "Monday", period: "09:00-10:00", class: "2" },
    { day: "Monday", period: "10:00-11:00", class: "Break" },
    { day: "Monday", period: "11:00-12:00", class: "3" },
    { day: "Monday", period: "12:00-13:00", class: "4" },

    { day: "Tuesday", period: "08:00-09:00", class: "Math" },
    { day: "Tuesday", period: "09:00-10:00", class: "History" },
    { day: "Tuesday", period: "10:00-11:00", class: "GYM" },
    { day: "Tuesday", period: "11:00-12:00", class: "English" },
    { day: "Tuesday", period: "12:00-13:00", class: "Break" },

    { day: "Wednesday", period: "08:00-09:00", class: "Break" },
    { day: "Wednesday", period: "09:00-10:00", class: "Two" },
    { day: "Wednesday", period: "10:00-11:00", class: "3" },
    { day: "Wednesday", period: "11:00-12:00", class: "4" },
    { day: "Wednesday", period: "12:00-13:00", class: "1" },

    { day: "Thursday", period: "08:00-09:00", class: "1" },
    { day: "Thursday", period: "09:00-10:00", class: "Break" },
    { day: "Thursday", period: "10:00-11:00", class: "2" },
    { day: "Thursday", period: "11:00-12:00", class: "3" },
    { day: "Thursday", period: "12:00-13:00", class: "4" },
  ];
  return (
    <div>
      <Schedule schedule={exampleScheduleData} />
    </div>
  );
}

export default StudentSchedule;
