import React, { useState } from "react";
import UseGetChildSubjects from "../../Hooks/UseGetChildSubjects";
import { useParams } from "react-router-dom";

const StudentResourcesPage = () => {
  const { student_id } = useParams<{ student_id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );
  const [subject, setSubject] = useState<string | null>(null);
  return (
    <div>
      <h2>You are watching: {subject}</h2>
      <div className="subjects-container">
        {childSubjects?.map((subjectItem, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || "")
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentResourcesPage;
