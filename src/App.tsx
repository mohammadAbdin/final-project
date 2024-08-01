import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import StudentSchedule from "./Pages/Student/StudentSchedule/StudentSchedule";
import StudentList from "./Components/StudentDetail/StudentList";
import TeacherSchedule from "./Pages/Teacher/TeacherSchedule/TeacherSchedule";
// import ParentProfilePage from "./Pages/ParentProfilePage/ParentProfilePage";

import AddUser from "./Pages/Manager/AddUser/AddUser";
import ParentPage from "./Pages/ParentPage/ParentPage";
import SubjectsPage from "./Pages/ParentProfilePage/ParentPage/SubjectsPage";
import EventClanedar from "./Components/Calendar/EventCalendar";
import StudentDetails from "./Pages/Student/StudentDetails/StudentDetails";
import TeacherAbsentCalendar from "./Pages/Teacher/TeacherAbsentCalendar/TeacherAbsentCalendar";
import LogIn from "./Pages/LogIn/LogIn";
import useGetTokens from "./Hooks/UseGetTokens";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";

import ParentCard from "./Components/ParentCard/ParentCard";

// import studentData from "./demoData/studentData";

import StudentProfile from "./Pages/Student/StudentProfile/StudentProfile";
import TeacherReportsComponent from "./Pages/Teacher/TeacherReportsComponent/TeacherReportsComponent";
import teacherExamsData from "./demoData/teacherExamsData.js";
import SubjectsPageReut from "./Pages/ParentPage/SubjectsPage.js";
import ClassesList from "./Pages/Teacher/ClassesList.js";
import ClassPage from "./Pages/Teacher/ClassPage.js";
import StudentResourcesPage from "./Pages/StudentResourcesPage/StudentResourcesPage.js";
import StudentInfo from "./Components/StudentInfo/StudentInfo.js";
import FeedbackDrop from "./Components/Feedback/FeedbackDrop.js";
// import TeacherAttendance from './Pages/Teacher/TeacherAttendance/TeacherAttendance'

const AppLayout = () => {
  const { user, setIsLogedIn, setUser } = useContext(UserContext);
  const { isLoading } = useGetTokens(setIsLogedIn, setUser);
  useEffect(() => {
    if (!isLoading) {
      console.log("User after fetch:", user);
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <></>;
  }
  return (
    <div className="flex flex-col">
      <Navbar />
      <SideBar />
    </div>
  );
};
//

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/classes",
        element: <ClassesList />,
      },
      {
        path: "/class/:classNumber",
        element: <ClassPage />,
      },

      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/TeacherSchedule",
        element: <TeacherSchedule />,
      },
      {
        path: "/ParentPage",
        element: <ParentPage />,
      },
      {
        path: "/SubjectsPage/:student_id",
        element: <SubjectsPage />,
      },
      {
        path: "/StudentResourcesPage/:student_id",
        element: <StudentResourcesPage />,
      },
      {
        path: "/StudentSchedule",
        element: <StudentSchedule />,
      },
      {
        path: "/EventCalendar",
        element: <EventClanedar />,
      },
      // {
      //   path: "/TeacherAbsentCalendar",
      //   element: <TeacherAbsentCalendar />,
      // },
      {
        path: "/AbsentCalendar",
        element: <StudentDetails />,
      },
      // {
      // path: '/EventCalendar',
      // element: <Calendar />,
      // },
      {
        path: "/parent-card",
        element: <ParentCard />,
      },
      {
        path: "/Add-members",
        element: <AddUser />,
      },

      {
        path: "/student-list/:classNumber",
        element: <StudentList />,
      },

      {
        path: "/student-profile",
        element: <StudentProfile />,
      },

      // {
      //   path: "/StudentInfo",
      //   element: <StudentInfo />,
      // },

      {
        path: "/FeedbackDrop/:student_id",
        element: <FeedbackDrop />,
      },
      // path: "/teacher-exam-reports",
      // element: (
      //   <TeacherReportsComponent
      //     examsData={teacherExamsData}
      //     isTeacher={true}
      //   />
      // ),

      // {
      //   path: '/teacher-attendance',
      //   element: <TeacherAttendance />,
      // },

      // {
      //   path: "/Projects-to-do",
      //   element: (
      //     <ProtectedRoute adminOnly>
      //       <ProjectsToDo />
      //     </ProtectedRoute>
      //   ),
      // },
      // {
      //   path: "/Projects",
      //   element: (
      //     <ProtectedRoute adminOnly>
      //       <AllProjects />
      //     </ProtectedRoute>
      //   ),
      // },
      // {
      //   path: "/Projects-to-do/ReviewProject/:projectId",
      //   element: <ReviewProject />,
      // },
      // {
      //   path: "/Projects-to-do/ReviewProject/internal/:randomNum",
      //   element: <ReviewProjectInternalFolders />,
      // },
      // {
      //   path: "/file/content/:encodedUrl",
      //   element: <DisplayFile />,
      // },
      // {
      //   path: "/LogIn",
      //   element: <LogIn />,
      // },
      // {
      //   path: "/Register",
      //   element: <Register />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
