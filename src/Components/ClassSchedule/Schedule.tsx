import React from "react";
import { ScheduleEntry } from "../../Types/ScheduleEntry";

const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
  const generateScheduleJSX = (schedule: ScheduleEntry[]): JSX.Element[] => {
    const groupedByDay: Record<string, ScheduleEntry[]> = {};

    schedule.forEach((entry) => {
      if (!groupedByDay[entry.day]) {
        groupedByDay[entry.day] = [];
      }
      groupedByDay[entry.day].push(entry);
    });

    return Object.keys(groupedByDay).map((day) => (
      <div
        key={day}
        className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
      >
        <h2 className="text-lg font-semibold mb-2 text-white">{day}</h2>
        <div className="bg-gray-800 rounded-lg ">
          {groupedByDay[day].map((entry) => (
            <div
              onClick={() => {}}
              key={`${day}-${entry.period}`}
              className="p-4 border-b border-gray-700 last:border-b-0"
            >
              <div className="text-sm text-gray-400">{entry.period}</div>
              <div className="text-white font-semibold mt-1">{entry.class}</div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const scheduleJSX = generateScheduleJSX(schedule);

  return (
    <div className="min-h-full bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-white">The schedule</h1>
        <div className="flex flex-row  gap-10   mb-6 ml-7 w-full overflow-x-auto whitespace-nowrap"></div>
        <div className="flex flex-wrap ">{scheduleJSX}</div>
      </div>
    </div>
  );
};

export default Schedule;
