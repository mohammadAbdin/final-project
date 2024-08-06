import { StudentAttendanceRow } from "./StudentAttendanceRow";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UseGetClassStudentsAttendance from "../../Hooks/UseGetClassStudentsAttendance";
import { StudentsAttendanceType } from "../../Types/StudentsAttendanceType";
import { PutStudentsAttendace } from "../../Api/PutStudentsAttendace";

const StudentList = () => {
  const location = useLocation();
  const selectedDate = location.state.selectedDate;

  const navigate = useNavigate();
  const { classNumber } = useParams();

  const [studentList, setStudentList] = useState<
    StudentsAttendanceType[] | null
  >(null);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getClassStudentsAttendance, classStudentsAttendance } =
    UseGetClassStudentsAttendance(setIsLoading, selectedDate, classNumber);

  useEffect(() => {
    if (isLoading || !user || !classStudentsAttendance) {
      if (user?._id != undefined) getClassStudentsAttendance(user._id);
    }
  }, [isLoading, user, getClassStudentsAttendance, classStudentsAttendance]);
  useEffect(() => {
    setStudentList(classStudentsAttendance);
  }, [classStudentsAttendance]);

  if (isLoading || classStudentsAttendance === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const handleCheckboxChange = (student_id: string) => {
    if (studentList != null) {
      const updatedStudents = studentList.map((student) =>
        student.student_id === student_id
          ? { ...student, attendance: !student.attendance }
          : student
      );

      setStudentList(updatedStudents);
    }
  };

  const handleSubmit = async () => {
    const studentsWithAttendanceTrue = studentList?.filter(
      (student) => student.attendance
    );

    await PutStudentsAttendace(
      studentsWithAttendanceTrue,
      selectedDate,
      user?._id,
      classNumber
    );
    navigate(`/class/${classNumber}`);
  };

  return (
    <fieldset className="p-8 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-2xl">
      <legend className="sr-only">Student List</legend>
      <div className="space-y-6">
        {studentList &&
          studentList.map((student) => (
            <StudentAttendanceRow
              student={student}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        <div className="flex justify-center mt-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-sm shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default StudentList;
