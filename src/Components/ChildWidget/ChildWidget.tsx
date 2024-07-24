import React from "react";

import "./ChildWidget.css";
import { Link } from "react-router-dom";

const ChildWidget = () => {
  const childData = [
    { student_id: "S001", studentName: "John Doe", class: 10, average: 85 },
    { student_id: "S002", studentName: "Jane Smith", class: 9, average: 92 },
    {
      student_id: "S003",
      studentName: "Michael Johnson",
      class: 11,
      average: 78,
    },
    { student_id: "S004", studentName: "Emily Davis", class: 12, average: 88 },
    {
      student_id: "S005",
      studentName: "William Brown",
      class: 10,
      average: 91,
    },
  ];

  return (
    <Link to="/SubjectsPage">
      <div>
        {childData?.map((singleChild) => (
          <div key={singleChild.student_id} className="child-widget-container">
            <h3>Child's name: {singleChild.studentName} </h3>
            <p>Grade: {singleChild.class}</p>
            <p>Average: {singleChild.average}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ChildWidget;
