import React, { useState } from "react";

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

  const [subject, setSubject] = useState("");

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
      </div>
    </div>
  );
};

export default SubjectsPage;
