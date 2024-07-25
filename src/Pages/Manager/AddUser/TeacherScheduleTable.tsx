import React from "react";
import { FormDataType } from "../../../Types/FormDataType";

interface TeacherScheduleTableProps {
  days: string[];
  periods: string[];
  formData: FormDataType;
  handleButtonClick: (day: string, period: string, classNumber: string) => void;
  classNumber: string;
}
export function TeacherScheduleTable({
  days,
  periods,
  formData,
  handleButtonClick,
  classNumber,
}: TeacherScheduleTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Period/Day</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {periods.map((period) => (
          <tr key={period}>
            <td>{period}</td>
            {days.map((day) => (
              <td key={day}>
                <button
                  className="bg-gray-700 p-1"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(formData);
                    console.log(day, period);
                    handleButtonClick(day, period, classNumber);
                  }}
                >
                  Add
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
