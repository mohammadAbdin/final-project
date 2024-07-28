import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../../Components/StatsChart/StatsChart";

const SubjectsPage = () => {
  const subjectData = [
    {
      subjectName: "Mathematics",
      teacher_id: "teacher001",
    },
    {
      subjectName: "Physics",
      teacher_id: "teacher002",
    },
    {
      subjectName: "History",
      teacher_id: "teacher003",
    },
    {
      subjectName: "Biology",
      teacher_id: "teacher004",
    },
  ];

  // const Data = [
  //   { examName: "exam1", Grade: 80 },
  //   { examName: "exam2", Grade: 70 },
  //   { examName: "midterm", Grade: 60 },
  //   { examName: "final", Grade: 85 },
  // ];

  const [subject, setSubject] = useState("");
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

  return (
    <div className="main-subjects-container">
      <h2>You are watching: {subject}</h2>
      <div className="subjects-container">
        {subjectData.map((subjectItem) => (
          <button
            key={subjectItem.teacher_id}
            className="subject-item"
            value={subjectItem.subjectName}
            onClick={(e) => console.log(e) || setSubject(e.target.value)}
          >
            {subjectItem.subjectName}
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
