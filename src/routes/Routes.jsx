import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Page404 from "../componants/Page404";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/dashboard/instructor/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/dashboard/instructor/MyClasses";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import InstructorsPage from "../pages/InstructorsPage";
import ClassesPage from "../pages/ClassesPage";
import StudentRoute from "./StudentRoute";
import MySelectedClasses from "../pages/dashboard/student/MySelectedClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
      {
        path: "/classesPage",
        element: <ClassesPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "mySelectedClasses",
        element: (
          <StudentRoute>
            <MySelectedClasses />
          </StudentRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
