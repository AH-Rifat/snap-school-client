/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";
import { HashLoader } from "react-spinners";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (loading || isStudentLoading) {
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

  if (user || isStudent?.student == true) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default StudentRoute;
