import React from "react";
// import { UserContext } from "../Context/UserContext";
// import { useNavigate } from "react-router-dom";
// import { showToastInfoMessage } from "./Toast/Toasts";

const ParentSideBar: React.FC = () => {
  // const navigate = useNavigate();
  // const { isLogedIn } = useContext(UserContext);

  return (
    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="/ParentPage"
          className="block text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Children
        </a>
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

export default ParentSideBar;
