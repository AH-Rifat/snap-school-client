/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <HashLoader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        color="#007aff"
      />
    );
  }

  if (user && isAdmin?.admin == true) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default AdminRoute;
