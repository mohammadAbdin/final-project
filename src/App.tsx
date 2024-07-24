import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import TeacherSchedule from "./Pages/Teacher/TeacherSchedule/TeacherSchedule";
import StudentSchedule from "./Pages/Student/StudentSchedule/StudentSchedule";
import AddUser from "./Pages/Manager/AddUser/AddUser";

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8">
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
      {
        path: "/StudentSchedule",
        element: <StudentSchedule />,
      },
      {
        path: "/Add-members",
        element: <AddUser />,
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
