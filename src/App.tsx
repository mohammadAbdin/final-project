import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeacherSchedule from "./Pages/Teacher/TeacherSchedule/TeacherSchedule";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import StudentSchedule from "./Pages/Student/StudentSchedule/StudentSchedule";

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8 text-red-700">
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
      // {
      //   index: true,
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/TeacherSchedule",
        element: <TeacherSchedule />,
      },
      // {
      //   path: "/Add-Project",
      //   element: <AddProject />,
      // },
      {
        path: "/StudentSchedule",
        element: <StudentSchedule />,
      },
      {
        path: "/TeacherSchedule",
        element: <TeacherSchedule />,
      },
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
