import { useContext, useEffect, useState } from "react";

import "./ChildWidget.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UseGetParentChildren from "../../Hooks/UseGetParentChildren";
// import Avatar from "../Avatar/Avatar";

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

  return (
    <div>
      {parentChildren?.map((singleChild) => (
        <div
          onClick={() => naviagte(`/SubjectsPage/${singleChild.student_id}`)}
          key={singleChild.student_id}
          className="bg-white border border-gray-300 rounded-md p-2 m-4  hover:bg-gray-300"
        >
          {/* <Avatar studentName={singleChild.studentName} /> */}
          <h3>Child's name: {singleChild.studentName} </h3>
          <p>Class: {singleChild.class}</p>
          <p>Average: {singleChild.average}</p>
        </div>
      ))}
    </div>
  );
};

export default ChildWidget;
