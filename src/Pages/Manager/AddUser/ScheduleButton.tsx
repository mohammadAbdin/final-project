import { FormDataType } from "../../../Types/FormDataType";
import { ClassSchedule } from "../../../Types/ClassScheduleType";

type ButtonProps = {
  formData: FormDataType;
  day: string;
  period: string;
  classNumber: string;
  allClasses: ClassSchedule[];
  handleButtonClick: (day: string, period: string, classNumber: string) => void;
};
export function ScheduleButton({
  formData,
  day,
  period,
  handleButtonClick,
  classNumber,
  allClasses,
}: ButtonProps) {
  return (
    <button
      className="bg-gray-700 p-1"
      onClick={(e) => {
        e.preventDefault();
        console.log(formData);

        handleButtonClick(day, period, classNumber);
      }}
    >
      {allClasses.some(
        (aclass) =>
          aclass.class === classNumber &&
          aclass.schedule.some(
            (lesson) => lesson.day === day && lesson.period === period
          )
      )
        ? "Disabled"
        : "Add"}
    </button>
  );
}
