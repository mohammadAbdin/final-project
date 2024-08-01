import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Units from "./Units";
import "react-calendar/dist/Calendar.css";
import { TeachersAttendanceJournal } from "../../Components/TeachersAttendanceJournal/TeachersAttendanceJournal";

type Exam = {
  id: number;
  name: string;
};

const fetchTopics = [
  {
    id: 1,
    title: "Duplicate",
    videos: [
      {
        id: 1,
        title: "video1",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
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
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
      },
      {
        id: 2,
        title: "video2",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
      },
      {
        id: 3,
        title: "video3",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://www.youtube.com/watch?v=jhiY62jG45o",
      },
    ],
  },
];

const ClassPage: React.FC = () => {
  const { classNumber } = useParams<{ classNumber: string }>();

  const [view, setView] = useState<
    "exams" | "videos" | "Attendance journal" | "feedback"
  >("exams");
  const [exams, setExams] = useState<Exam[]>([
    { id: 1, name: "Exam 1" },
    { id: 2, name: "Exam 2" },
  ]);

  // const [topics, setTopics] = useState<Topic[]>(fetchTopics);

  const addExam = () => {
    const newExam = { id: exams.length + 1, name: `Exam ${exams.length + 1}` };
    setExams([...exams, newExam]);
  };

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
          className={`px-4 py-2 ${
            view === "feedback" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("feedback")}
        >
          Feedback
        </button>
      </div>

      {view === "exams" && (
        <div>
          <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
            {exams.map((exam) => (
              <li key={exam.id} className="border-b py-2 last:border-b-0">
                {exam.name}
              </li>
            ))}
          </ul>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={addExam}
          >
            Add Exam
          </button>
        </div>
      )}

      {view === "videos" && <Units topics={fetchTopics} />}
      {view === "Attendance journal" && (
        // <div>
        <TeachersAttendanceJournal />
        // </div>
      )}
      {view === "feedback" && <div>feedback</div>}
    </div>
  );
};

export default ClassPage;
