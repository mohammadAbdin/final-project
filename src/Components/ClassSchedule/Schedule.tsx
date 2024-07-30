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
        className="flex-shrink-0 w-full md:text-2xl md:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
      >
        <h2 className="text-lg md:text-3xl font-semibold mb-2 text-grey-400">
          <p className="text-xl font-normal">{day}</p>
        </h2>
        <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
          {groupedByDay[day].map((entry) => (
            <div
              onClick={() => {}}
              key={`${day}-${entry.period}`}
              className="p-4 border-b border-gray-400 last:border-b-0"
            >
              <div className="text-xs md:text-lg text-gray-400">
                <p className="text-xs font-normal">{entry.period}</p>
              </div>
              <div className="text-white bg-blue-400 rounded-sm font-semibold  p-1">
                <p className="text-sm font-normal ">{entry.class}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const scheduleJSX = generateScheduleJSX(schedule);

  return (
    <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-grey-900 ">
          The schedule
        </h1>
        <div className="flex flex-row  gap-10   mb-6 ml-7 w-full overflow-x-auto whitespace-nowrap text-xs"></div>
        {/* <div className="flex flex-row  gap-24 mb-6 ml-14 w-full overflow-x-auto whitespace-nowrap">
          {Object.keys(
            schedule.reduce((acc, curr) => ({ ...acc, [curr.day]: true }), {})
          ).map((day, index) => (
            <div
              key={day}
              className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm m-2 "
            >
              Day {index + 1}: {day}
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap ">{scheduleJSX}</div>
      </div>
    </div>
  );
};

export default Schedule;
