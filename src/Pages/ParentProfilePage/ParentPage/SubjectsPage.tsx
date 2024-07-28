import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import UseGetChildSubjects from "../../../Hooks/UseGetChildSubjects";
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
import LineChart from "../../../Components/StatsChart/StatsChart";

const SubjectsPage = () => {
  const { student_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [chartData, setChartData] = useState({
    labels: ["Exam1", "Exam2", "Midterm", "Final"],
    datasets: [
      {
        label: "First dataset",
        data: [85, 92, 78, 85],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });
  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );
  const [subject, setSubject] = useState<string | null>();

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id != undefined) getChildSubjects();
    }
    if (childSubjects) {
      setSubject(subject || childSubjects[0]);
      console.log("hi");
    }
  }, [isLoading, user, getChildSubjects, childSubjects]);

  if (isLoading || childSubjects === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  // console.log(childSubjects);
  // setSubject(childSubjects[0]);

  // const subjectData = [
  //   {
  //     subjectName: "Mathematics",
  //     teacher_id: "teacher001",
  //   },
  //   {
  //     subjectName: "Physics",
  //     teacher_id: "teacher002",
  //   },
  //   {
  //     subjectName: "History",
  //     teacher_id: "teacher003",
  //   },
  //   {
  //     subjectName: "Biology",
  //     teacher_id: "teacher004",
  //   },
  // ];
  return (
    <div className="main-subjects-container">
      <h2>You are watching: {subject}</h2>
      <div className="subjects-container">
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className="subject-item"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || "")
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>
      <div className="main-info-container">
        <div className="calendar-container">
          <h3>Student's Attendance:</h3>
          <div className="calender-div">
            <p>Here will be the Attendance calendar</p>
          </div>
        </div>
        <div className="marks-container">
          <p>Exam 1: Mark</p>
          <p>Exam 2: Mark</p>
          <p>Midterm: Mark</p>
        </div>
        <div className="student-schedule-container">
          <p>Sunday...</p>
          <p>Monday...</p>
        </div>
        <div className="feedback-container">
          <h3>Feedback To Teacher:</h3>
          <input type="text" placeholder="Write your massage here.." />
        </div>
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export default SubjectsPage;
