import React from "react";

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
  return (
    <div className="subjects-container">
      {subjectData.map((subjectItem) => (
        <div key={subjectItem.teacher_id} className="subject-item">
          <p>{subjectItem.subjectName}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectsPage;
