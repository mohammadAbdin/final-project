import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import TeacherSideBar from "../../Pages/Teacher/TeacherSideBar";
import { UserContext } from "../../Context/UserContext";
import ParentSideBar from "../../Pages/ParentPage/ParentSideBar";
import StudentSideBar from "../../Pages/Student/StudentSideBar";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-4/5 mx-auto mt-10 bg-white">
      <div className="relative">
        <button onClick={toggleSidebar} className="md:hidden">
          <FaBars className="w-6 h-6 text-gray-900" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 bg-white shadow-lg z-10 md:hidden">
            <div>
              <button onClick={toggleSidebar}>
                <FaTimes className="text-gray-900" />
              </button>
              {user?.userType === "Teacher" && (
                <TeacherSideBar onItemClick={handleItemClick} />
              )}
              {user?.userType === "Parent" && (
                <ParentSideBar onItemClick={handleItemClick} />
              )}
              {user?.userType === "Student" && (
                <StudentSideBar onItemClick={handleItemClick} />
              )}
            </div>
          </div>
        )}

        <div className="hidden md:block sticky p-3">
          {user?.userType === "Teacher" && (
            <TeacherSideBar onItemClick={handleItemClick} />
          )}
          {user?.userType === "Parent" && (
            <ParentSideBar onItemClick={handleItemClick} />
          )}
          {user?.userType === "Student" && (
            <StudentSideBar onItemClick={handleItemClick} />
          )}
        </div>
      </div>
      <main className="w-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
