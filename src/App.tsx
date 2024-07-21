import { createBrowserRouter, RouterProvider } from "react-router-dom"; //

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8 text-red-700">
      {/* SideBar */}
      {/* Navbar */}
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
