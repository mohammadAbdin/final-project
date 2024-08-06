import { ClassExams } from "./ClassesPage/ClassExams";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Units from "./Units";
import "react-calendar/dist/Calendar.css";
import { TeachersAttendanceJournal } from "../../Components/TeachersAttendanceJournal/TeachersAttendanceJournal";
import StudentInfo from "../../Components/StudentInfo/StudentInfo";
import AddNewExam from "../../Api/PostNewExam";
import { UserContext } from "./../../Context/UserContext";
import UseGetClassDetails from "../../Hooks/UseGetClassExams";

const ClassPage: React.FC = () => {
  const { classNumber } = useParams();
  const [view, setView] = useState<
    "exams" | "videos" | "Attendance journal" | "feedback"
  >("exams");
  const [newExamName, setNewExamName] = useState("");
  const [isAddingExam, setIsAddingExam] = useState(false);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getClassDetails, classDetails } = UseGetClassDetails(
    setIsLoading,
    classNumber
  );

  useEffect(() => {
    if (isLoading || !user || !classDetails) {
      if (user?._id != undefined) getClassDetails(user._id);
    }
  }, [isLoading, user, getClassDetails, classDetails]);
  useEffect(() => {
    if (classDetails) {
      // setExams(classDetails.exams);
      // setStudents(classDetails.students);
    }
  }, [classDetails]);

  if (isLoading || classDetails === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const addExam = () => {
    setIsAddingExam(true);
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class {classNumber}</h1>

      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-sm ${
            view === "exams" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("exams")}
        >
          Exams
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded-sm ${
            view === "videos" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("videos")}
        >
          Videos
        </button>

        <button
          className={`mr-2 px-4 py-2 ${
            view === "Attendance journal"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setView("Attendance journal")}
        >
          Attendance journal
        </button>
        <button
          className={`px-4 py-2 rounded-sm ${
            view === "feedback" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("feedback")}
        >
          Feedback
        </button>
      </div>

      {view === "exams" && (
        <ClassExams
          students={classDetails.students}
          exams={classDetails.exams}
          isAddingExam={isAddingExam}
          newExamName={newExamName}
          setNewExamName={setNewExamName}
          classNumber={classNumber}
          user={user}
          AddNewExam={AddNewExam}
          addExam={addExam}
          setIsLoading={setIsLoading}
        />
      )}

      {view === "videos" && (
        <Units
          setIsLoading={setIsLoading}
          classNumber={classNumber}
          topics={classDetails.resources}
        />
      )}
      {view === "Attendance journal" && (
        <TeachersAttendanceJournal classNumber={classNumber} />
      )}
      {view === "feedback" && (
        <div>
          <StudentInfo students={classDetails.students} />
        </div>
      )}
    </div>
  );
};

export default ClassPage;
