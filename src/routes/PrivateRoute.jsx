/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <HashLoader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        color="#36d7b7"
      />
    );
  }

  if (user) {
    return children;
  } else {
    return (
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    );
  }
};

export default PrivateRoute;
