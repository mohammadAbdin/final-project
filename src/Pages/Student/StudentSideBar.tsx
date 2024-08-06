import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const StudentSideBar: React.FC<{ onItemClick: () => void }> = ({
  onItemClick,
}) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <ul className="mt-6 space-y-1">
      <li>
        <button
          onClick={onItemClick}
          className="block text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          <NavLink to="/StudentSchedule">Schedule</NavLink>
        </button>
      </li>
      <li>
        <button
          onClick={() => {
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
            navigate(`/StudentResourcesPage/${user?._id}`);
          }}
          className="block text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Resources
        </button>
      </li>
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
