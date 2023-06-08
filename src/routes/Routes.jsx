import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Page404 from "../componants/Page404";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

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
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
