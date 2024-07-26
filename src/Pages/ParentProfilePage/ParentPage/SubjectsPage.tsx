import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import UseGetChildSubjects from "../../../Hooks/UseGetChildSubjects";

const SubjectsPage = () => {
  const { student_id } = useParams();
  console.log(student_id);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id != undefined) getChildSubjects();
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
  console.log(childSubjects);
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
    <div className="subjects-container">
      {childSubjects.map((subjectItem, index) => (
        <div
          key={index}
          //  key={subjectItem.teacher_id}
          className="subject-item"
        >
          <p>{subjectItem}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectsPage;
