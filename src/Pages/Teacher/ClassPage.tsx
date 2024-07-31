import { ClassExams } from "./ClassesPage/ClassExams";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Units from "./Units";
import "react-calendar/dist/Calendar.css";
import { TeachersAttendanceJournal } from "../../Components/TeachersAttendanceJournal/TeachersAttendanceJournal";
import AddNewExam from "../../Api/PostNewExam";
import { UserContext } from "./../../Context/UserContext";
import UseGetClassDetails from "../../Hooks/UseGetClassExams";
import { ExamType } from "../../Types/ExamType";

const fetchTopics = [
  {
    id: 1,
    title: "Duplicate",
    videos: [
      {
        id: 1,
        title: "video1",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
    ],
  },
  {
    id: 2,
    title: "Divided",
    videos: [
      {
        id: 1,
        title: "video1",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/embed/jhiY62jG45o",
      },
    ],
  },
];

const ClassPage: React.FC = () => {
  const { classNumber } = useParams();
  const [view, setView] = useState<
    "exams" | "videos" | "Attendance journal" | "feedback"
  >("exams");
  // const [exams, setExams] = useState<ExamType[]>([]);
  // const [students, setStudents] = useState<string[]>([]);
  const [newExamName, setNewExamName] = useState("");
  const [isAddingExam, setIsAddingExam] = useState(false);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("user", user);
  const { getClassDetails, classDetails } = UseGetClassDetails(
    setIsLoading,
    classNumber
  );

  useEffect(() => {
    if (isLoading && user && !classDetails) {
      if (user._id != undefined) getClassDetails(user._id);
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
  console.log(classDetails);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class {classNumber}</h1>

      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            view === "exams" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("exams")}
        >
          Exams
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            view === "videos" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("videos")}
        >
          Videos
        </button>

        <button
          className={`px-4 py-2 ${
            view === "Attendance journal"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setView("Attendance journal")}
        >
          Attendance journal
        </button>
        <button
          className={`px-4 py-2 ${
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
        />
      )}

      {view === "videos" && <Units topics={fetchTopics} />}
      {view === "Attendance journal" && <TeachersAttendanceJournal />}
      {view === "feedback" && <div>feedback</div>}
    </div>
  );
};

export default ClassPage;
