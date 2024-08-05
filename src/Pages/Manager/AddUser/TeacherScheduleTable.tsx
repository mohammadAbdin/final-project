import { ScheduleButton } from "./ScheduleButton";
import { useState, useEffect } from "react";
import { FormDataType } from "../../../Types/FormDataType";
import { getAllClasses } from "../../../Api/GetAllClasses";
import { ClassSchedule } from "../../../Types/ClassScheduleType";

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
  const [allClasses, setAllClasses] = useState<ClassSchedule[]>([
    { class: "", schedule: [] },
  ]);
  useEffect(() => {
    const getAllClassesRequest = async () => {
      const res = await getAllClasses();
      setAllClasses(res);
    };
    getAllClassesRequest();
  }, []);

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
                <ScheduleButton
                  allClasses={allClasses}
                  formData={formData}
                  day={day}
                  period={period}
                  handleButtonClick={handleButtonClick}
                  classNumber={classNumber}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
