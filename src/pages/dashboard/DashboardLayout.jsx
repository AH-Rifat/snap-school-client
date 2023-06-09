import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../../shared/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
