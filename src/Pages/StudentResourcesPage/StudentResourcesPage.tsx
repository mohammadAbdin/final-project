import { useContext, useEffect, useState } from "react";
import UseGetChildSubjects from "../../Hooks/UseGetChildSubjects";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Units from "../Teacher/Units";
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

const StudentResourcesPage = () => {
  const { student_id } = useParams<{ student_id: string }>();
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
    if (childSubjects) {
      setSubject(subject || childSubjects[0]);
    }
  }, [isLoading, user, getChildSubjects, childSubjects, subject]);

  return (
    <div>
      <div>
        <h2 className="h2-s">You are watching: {subject}</h2>
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

      <Units topics={fetchTopics} />
    </div>
  );
};

export default StudentResourcesPage;
