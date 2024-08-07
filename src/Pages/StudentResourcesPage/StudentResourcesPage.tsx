import { useContext, useEffect, useState } from "react";
import UseGetChildSubjects from "../../Hooks/UseGetChildSubjects";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Units from "../Teacher/Units";
import { Topic } from "../../Types/TopicsTypes";

const StudentResourcesPage = () => {
  const { student_id } = useParams<{ student_id: string }>();
  const [subjects, setSubjects] = useState<string[] | null>(null);
  const [resourcesData, setResourcesData] = useState<Topic[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);

  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );
  const [subject, setSubject] = useState<string | null>(null);
  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects();
    }
  }, [isLoading, user, getChildSubjects, childSubjects]);
  useEffect(() => {
    if (childSubjects && !isLoading) {
      setSubjects(Object.keys(childSubjects.details));
    }
  }, [childSubjects, isLoading]);
  useEffect(() => {
    if (subjects != null) {
      setSubject(subject || subjects[0]);
      if (subject != null && childSubjects != null)
        setResourcesData(childSubjects.details[`${subject}`].resources);
    }
  }, [subjects, subject, childSubjects]);
  if (
    isLoading ||
    childSubjects === null ||
    subjects === null ||
    subject == null ||
    resourcesData == null
  ) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="subjects-container">
          {subjects?.map((subjectItem, index) => (
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

      <Units
        setIsLoading={setIsLoading}
        classNumber=""
        topics={resourcesData}
      />
    </div>
  );
};

export default StudentResourcesPage;
