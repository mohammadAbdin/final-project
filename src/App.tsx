import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import StudentSchedule from "./Pages/Student/StudentSchedule/StudentSchedule";
import StudentList from "./Components/StudentDetail/StudentList";
import TeacherSchedule from "./Pages/Teacher/TeacherSchedule/TeacherSchedule";

import ParentPage from "./Pages/ParentPage/ParentPage";
import SubjectsPage from "./Pages/ParentProfilePage/ParentPage/SubjectsPage";
import EventCalendar from "./Components/Calendar/EventCalendar";

import LogIn from "./Pages/LogIn/LogIn";
import useGetTokens from "./Hooks/UseGetTokens";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext";
import ParentCard from "./Components/ParentCard/ParentCard";
import StudentProfile from "./Pages/Student/StudentProfile/StudentProfile";

import ClassesList from "./Pages/Teacher/ClassesList.js";
import ClassPage from "./Pages/Teacher/ClassPage.js";
import StudentResourcesPage from "./Pages/StudentResourcesPage/StudentResourcesPage.js";
import FeedbackDrop from "./Components/Feedback/FeedbackDrop.js";

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

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="flex flex-col">
      <Navbar />
      <SideBar />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "classes",
        element: <ClassesList />,
      },
      {
        path: "class/:classNumber",
        element: <ClassPage />,
      },

      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "TeacherSchedule",
        element: <TeacherSchedule />,
      },
      {
        path: "ParentPage",
        element: <ParentPage />,
      },
      {
        path: "SubjectsPage/:student_id",
        element: <SubjectsPage />,
      },
      {
        path: "StudentResourcesPage/:student_id",
        element: <StudentResourcesPage />,
      },
      {
        path: "StudentSchedule",
        element: <StudentSchedule />,
      },
      {
        path: "EventCalendar",
        element: <EventCalendar />,
      },

      {
        path: "parent-card",
        element: <ParentCard />,
      },

      {
        path: "student-list/:classNumber",
        element: <StudentList />,
      },
      {
        path: "student-profile",
        element: <StudentProfile />,
      },

      {
        path: "FeedbackDrop/:student_id",
        element: <FeedbackDrop />,
      },
    ],
  },
  {
    path: "/Login",
    element: <LogIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
