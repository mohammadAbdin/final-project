import React, { useContext } from "react";
import { ScheduleEntry } from "../../Types/ScheduleEntry";
import { UserContext } from "../../Context/UserContext";

const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
  const { user } = useContext(UserContext);

  const scheduleMap: Record<string, Record<string, string>> = {};

  schedule.forEach((entry) => {
    if (!scheduleMap[entry.period]) {
      scheduleMap[entry.period] = {};
    }
    scheduleMap[entry.period][entry.day] = entry.class;
  });

  const days = Array.from(new Set(schedule.map((entry) => entry.day)));

  return (
    <div className="c-div-s overflow-x-auto">
      <div className={user?.userType === "Parent" ? "w-5/10" : "w-full"}>
        <h2 className="h2-s">schedule</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1 text-xs font-semibold text-gray-700"></th>{" "}
              {days.map((day) => (
                <th
                  key={day}
                  className="border border-gray-300 p-1 text-center text-xs font-semibold text-gray-700"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(scheduleMap).map((period) => (
              <tr key={period} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-1 font-semibold text-xs text-gray-800">
                  {period}
                </td>
                {days.map((day) => (
                  <td
                    key={`${period}-${day}`}
                    className="border border-gray-300 p-1 text-center text-xs"
                  >
                    {scheduleMap[period][day] ? (
                      <div className="bg-gray-200 rounded-md font-semibold p-1 text-xs text-gray-800 shadow-sm">
                        <p className="text-xs font-normal">
                          {scheduleMap[period][day]}
                        </p>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-xs">-</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
