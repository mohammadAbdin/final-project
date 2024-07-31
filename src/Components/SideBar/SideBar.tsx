import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TeacherSideBar from "../../Pages/Teacher/TeacherSideBar";
import { UserContext } from "../../Context/UserContext";
import ParentSideBar from "../../Pages/ParentPage/ParentSideBar";
import StudentSideBar from "../../Pages/Student/StudentSideBar";
// import { UserContext } from "../Context/UserContext";
// import UserSideBarSections from "./UserSideBarSections";
// import useGetTokens from "../Hooks/UseGetTokens";
// import AdminSideBarSections from "../Pages/Admin/Components/AdminSideBarSections";

const Sidebar: React.FC = () => {
  const { user } = useContext(UserContext);
  console.log(user, "sidebar");

  // const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log("User after fetch:", user);
  //   }
  // }, [isLoading, user]);

  // if (isLoading) {
  //   return <></>;
  // }
  return (
    <>
      <div className=" lg:flex flex-col h-full justify-between  hidden mr-32  xl:mr-0 border-e bg-white lg:w-40 w-20 items-start   relative left-0  top-32">
        <div className=" sticky px-1 py-6 w-32">
          {user?.userType == "Teacher" ? <TeacherSideBar /> : <></>}
          {user?.userType == "Parent" ? <ParentSideBar /> : <></>}
          {user?.userType == "Student" ? <StudentSideBar /> : <></>}
        </div>

        <div className="sticky inset-x-0 bottom-0 mr-12 border-t  border-gray-100">
          <a
            href="#"
            className="flex mr-12 items-start  gap-2 bg-white pb-4 hover:bg-gray-50"
          >
            <div>
              <p className="text-xs w-20 relative ">
                <strong className="block font-medium text-wrap">
                  {user ? user.userType : "user not found"}
                </strong>
                <span className="block text-wrap w-20 ml-4 h-full">
                  {user ? user.name : ""}
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <main className="mt-16 flex-grow home">
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
