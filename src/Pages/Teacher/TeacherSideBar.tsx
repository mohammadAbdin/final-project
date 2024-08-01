import React from "react";
import { Link } from "react-router-dom";

const TeacherSideBar: React.FC = () => {
  return (
    <ul className="mt-6 space-y-1">
      <li>
        <Link
          to="/TeacherSchedule"
          className="block text-left rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-500"
        >
          Schedule
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className="block text-left rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Classes
        </Link>
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

export default TeacherSideBar;
