import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; //
import Grades from "./Pages/Teacher/Grades";
import ClassesList from "./Pages/Teacher/ClassesList";
import ClassPage from "./Pages/Teacher/ClassPage";

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8 text-red-700">
      {/* <Grades /> */}
      {/* SideBar */}
      {/* Navbar */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/class",
        element: <ClassesList />,
      },
      {
        path: "class/:id",
        element: <ClassPage />,
      },
      // {
      //   index: true,
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/CompletedProjects",
      //   element: <CompletedProjects />,
      // },
      // {
      //   path: "/Add-Project",
      //   element: <AddProject />,
      // },
      // {
      //   path: "/My-Projects",
      //   element: <MyProjects />,
      // },
      // {
      //   path: "/Projects/:tag",
      //   element: <ProjectsByTag />,
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
