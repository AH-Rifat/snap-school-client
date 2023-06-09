import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../../shared/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <>
      <CssBaseline />
      {user && isAdmin?.admin == true ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Outlet />
        </Box>
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </>
  );
};

export default DashboardLayout;
