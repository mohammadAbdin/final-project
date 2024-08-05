import { useContext, useEffect, useState } from "react";
import Schedule from "../../../Components/ClassSchedule/Schedule";
import { ScheduleEntry } from "../../../Types/ScheduleEntry";
import { UserContext } from "../../../Context/UserContext";
import UseGetStudentSchedule from "../../../Hooks/UseGetStudentSchedule";
import { addBreaksToSchedule } from "../../../Functions/refactorStudentSchedule";
function StudentSchedule() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getStudentSchedule, studentSchedule } =
    UseGetStudentSchedule(setIsLoading);

  useEffect(() => {
    if (isLoading && user && !studentSchedule) {
      if (user._id != undefined) getStudentSchedule(user._id);
    }
  }, [isLoading, user, getStudentSchedule, studentSchedule]);

  if (isLoading || studentSchedule === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const exampleScheduleData: ScheduleEntry[] =
    addBreaksToSchedule(studentSchedule);

  console.log(exampleScheduleData);

  return (
    <div>
      <Schedule schedule={exampleScheduleData} />
    </div>
  );
}

export default StudentSchedule;
