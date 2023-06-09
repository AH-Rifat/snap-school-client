/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <h1>Loading....</h1>;
  }

  if (user && isAdmin?.admin == true) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default AdminRoute;
