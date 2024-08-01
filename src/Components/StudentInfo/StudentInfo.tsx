import { useNavigate } from "react-router-dom";
import { StudentFeedbackDetailsType } from "../../Types/StudentFeedbackDetailsType";

const StudentInfo = ({
  students,
}: {
  students: StudentFeedbackDetailsType[];
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      {students.map((student) => (
        <div
          key={student.student_id}
          className="flex justify-between items-center bg-white border rounded-lg p-4 shadow mb-2"
        >
          <span className="text-lg">{student.name}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate(`/FeedbackDrop/${student.student_id}`)}
          >
            Go Feedback
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentInfo;
