import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
// import { UserContext } from "../Context/UserContext";
// import { useNavigate } from "react-router-dom";
// import { showToastInfoMessage } from "./Toast/Toasts";

const StudentSideBar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="/StudentSchedule"
          className="block text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Schedule
        </a>
      </li>
      <li>
        <button
          onClick={() => {
            console.log(user?._id);

            navigate(`/SubjectsPage/${user?._id}`);
          }}
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          My details
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            console.log(user?._id);

            navigate(`/StudentResourcesPage/${user?._id}`);
          }}
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Resources
        </button>
      </li>
      {/* 
      <li>
        <a
          href="/EventCalendar"
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Assignments/ exams
        </a>
      </li> */}
      <li>
        <a
          href="/EventCalendar"
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Events
        </a>
      </li>
    </ul>
  );
};

export default StudentSideBar;
