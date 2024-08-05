import { useContext, useEffect, useState } from "react";
import Schedule from "../../../Components/ClassSchedule/Schedule";
import { ScheduleEntry } from "../../../Types/ScheduleEntry";
import { UserContext } from "../../../Context/UserContext";
import UseGetTeacherSchedule from "../../../Hooks/UseGetTeacherSchedule";
import { addBreaksToSchedule } from "../../../Functions/refactorTeacherSchedule";
function TeacherSchedule() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("user", user);
  const { getTeacherSchedule, teacherSchedule } = UseGetTeacherSchedule(
    isLoading,
    setIsLoading
  );

  useEffect(() => {
    if (isLoading && user && !teacherSchedule) {
      if (user._id != undefined) getTeacherSchedule(user._id);
    }
  }, [isLoading, user, getTeacherSchedule, teacherSchedule]);

  if (isLoading || teacherSchedule === null) {
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
    addBreaksToSchedule(teacherSchedule); // omar you can ask chat gbt to (any period from sunday to thursday that are not included in the data add an obj to it )
  console.log(exampleScheduleData); // console

  return (
    <div>
      <Schedule schedule={exampleScheduleData} />
    </div>
  );
}

export default TeacherSchedule;
