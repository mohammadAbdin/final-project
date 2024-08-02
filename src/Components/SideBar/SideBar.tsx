import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TeacherSideBar from '../../Pages/Teacher/TeacherSideBar'
import { UserContext } from '../../Context/UserContext'
import ParentSideBar from '../../Pages/ParentPage/ParentSideBar'
import StudentSideBar from '../../Pages/Student/StudentSideBar'
import { FaBars, FaTimes } from 'react-icons/fa'

const Sidebar: React.FC = () => {
  const { user } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = () => {
    if (isOpen) {
      toggleSidebar()
    }
  }

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
              {user?.userType === 'Teacher' && (
                <TeacherSideBar onItemClick={handleItemClick} />
              )}
              {user?.userType === 'Parent' && (
                <ParentSideBar onItemClick={handleItemClick} />
              )}
              {user?.userType === 'Student' && (
                <StudentSideBar onItemClick={handleItemClick} />
              )}
            </div>
          </div>
        )}

        <div className="hidden md:block sticky p-3">
          {user?.userType === 'Teacher' && (
            <TeacherSideBar onItemClick={handleItemClick} />
          )}
          {user?.userType === 'Parent' && (
            <ParentSideBar onItemClick={handleItemClick} />
          )}
          {user?.userType === 'Student' && (
            <StudentSideBar onItemClick={handleItemClick} />
          )}
        </div>
      </div>
      <main className="w-full p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Sidebar

// import React, { useContext } from "react";
// import { Link, Outlet } from "react-router-dom";
// import TeacherSideBar from "../../Pages/Teacher/TeacherSideBar";
// import { UserContext } from "../../Context/UserContext";
// import ParentSideBar from "../../Pages/ParentPage/ParentSideBar";
// import StudentSideBar from "../../Pages/Student/StudentSideBar";

// const Sidebar: React.FC = () => {
//   const { user } = useContext(UserContext);
//   console.log(user, "sidebar");
//   return (
//     <>
//       <div className=" lg:flex flex-col h-full justify-between  hidden mr-32  xl:mr-0 border-e bg-white lg:w-40 w-20 items-start   relative left-0  top-32">
//         <div className=" sticky px-1 py-6 w-32">
//           {user?.userType == "Teacher" ? <TeacherSideBar /> : <></>}
//           {user?.userType == "Parent" ? <ParentSideBar /> : <></>}
//           {user?.userType == "Student" ? <StudentSideBar /> : <></>}
//         </div>

//         <div className="sticky inset-x-0 bottom-0 mr-12 border-t  border-gray-100">
//           <a
//             href="#"
//             className="flex mr-12 items-start  gap-2 bg-white pb-4 hover:bg-gray-50"
//           >
//             <div>
//               <p className="text-xs w-20 relative ">
//                 <strong className="block font-medium text-wrap">
//                   {user ? user.userType : "user not found"}
//                 </strong>
//                 <Link
//                   to={
//                     user?.userType === "Parent"
//                       ? "/parent-card"
//                       : "/student-profile"
//                   }
//                 >
//                   <span className="block text-wrap w-20 ml-4 h-full">
//                     {user ? user.name : ""}
//                   </span>
//                 </Link>
//               </p>
//             </div>
//           </a>
//         </div>
//       </div>
//       <main className="mt-16 flex-grow home bg-red-700">
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Sidebar;
