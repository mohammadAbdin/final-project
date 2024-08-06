import { StudentsAttendanceType } from "../../Types/StudentsAttendanceType";
export function StudentAttendanceRow({
  student,
  handleCheckboxChange,
}: {
  student: StudentsAttendanceType;
  handleCheckboxChange: (student_id: string) => void;
}) {
  return (
    <div
      key={student.student_id}
      className="flex items-start gap-4 p-6 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
    >
      <input
        type="checkbox"
        id={`student_${student.student_id}`}
        className="h-5 w-5 text-teal-500 border-gray-300 rounded-sm focus:ring-teal-500 transition duration-150 ease-in-out"
        checked={student.attendance}
        onChange={() => handleCheckboxChange(student.student_id)}
      />
      <div className="flex-1">
        <label
          htmlFor={`student_${student.student_id}`}
          className="block cursor-pointer"
        >
          <strong className="text-xl font-semibold text-gray-800">
            {student.studentName}
          </strong>
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out" // onClick={() => toggleDetails(student.student_id)}
      >
        View Details
      </button>
    </div>
  );
}
