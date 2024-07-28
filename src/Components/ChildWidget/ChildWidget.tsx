import { useContext, useEffect, useState } from "react";

import "./ChildWidget.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UseGetParentChildren from "../../Hooks/UseGetParentChildren";

const ChildWidget = () => {
  const naviagte = useNavigate();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getParentChildren, parentChildren } =
    UseGetParentChildren(setIsLoading);

  useEffect(() => {
    if (isLoading && user && !parentChildren) {
      if (user._id != undefined) getParentChildren(user._id);
    }
  }, [isLoading, user, getParentChildren, parentChildren]);

  if (isLoading || parentChildren === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  console.log(parentChildren);

  // const childData: Child[] = [
  //   { student_id: "S001", studentName: "John Doe", class: 10, average: 85 },
  //   { student_id: "S002", studentName: "Jane Smith", class: 9, average: 92 },
  //   {
  //     student_id: "S003",
  //     studentName: "Michael Johnson",
  //     class: 11,
  //     average: 78,
  //   },
  //   { student_id: "S004", studentName: "Emily Davis", class: 12, average: 88 },
  //   {
  //     student_id: "S005",
  //     studentName: "William Brown",
  //     class: 10,
  //     average: 91,
  //   },
  // ];

  return (
    <div>
      {parentChildren?.map((singleChild) => (
        <div
          onClick={() => naviagte(`/SubjectsPage/${singleChild.student_id}`)}
          key={singleChild.student_id}
          className="child-widget-container"
        >
          <h3>Child's name: {singleChild.studentName} </h3>
          <p>Class: {singleChild.class}</p>
          <p>Average: {singleChild.average}</p>
        </div>
      ))}
    </div>
  );
};

export default ChildWidget;
