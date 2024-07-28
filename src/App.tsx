import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'
import Navbar from './Components/Navbar/Navbar'
import StudentSchedule from './Pages/Student/StudentSchedule/StudentSchedule'
import TeacherSchedule from './Pages/Teacher/TeacherSchedule/TeacherSchedule'
import AddUser from './Pages/Manager/AddUser/AddUser'
import Calendar from './Components/Calendar/Calendar'
import ParentCard from './Components/ParentCard/ParentCard'

import studentData from './demoData/studentData'
import ParentPage from './Pages/ParentPage/ParentPage'
import SubjectsPage from './Pages/ParentPage/SubjectsPage'
import StudentProfile from './Pages/Student/StudentProfile/StudentProfile'
import TeacherReportsComponent from './Pages/Teacher/TeacherReportsComponent/TeacherReportsComponent'
import teacherExamsData from '../src/demoData/teacherExamsData'
import TeacherAttendance from './Pages/Teacher/TeacherAttendance/TeacherAttendance'

const AppLayout = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8">
      <Navbar />
      <SideBar />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // {
      //   index: true,
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: '/TeacherSchedule',
        element: <TeacherSchedule />,
      },
      {
        path: '/ParentPage',
        element: <ParentPage />,
      },
      {
        path: '/SubjectsPage',
        element: <SubjectsPage />,
      },
      {
        path: '/StudentSchedule',
        element: <StudentSchedule />,
      },
      {
        path: '/EventCalendar',
        element: <Calendar />,
      },
      {
        path: '/parent-card',
        element: <ParentCard />,
      },
      {
        path: '/Add-members',
        element: <AddUser />,
      },

      {
        path: '/student-profile',
        element: <StudentProfile student={studentData} />,
      },

      {
        path: '/teacher-exam-reports',
        element: (
          <TeacherReportsComponent
            examsData={teacherExamsData}
            isTeacher={true}
          />
        ),
      },
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
])

function App() {
  return <RouterProvider router={router} />
}

export default App
