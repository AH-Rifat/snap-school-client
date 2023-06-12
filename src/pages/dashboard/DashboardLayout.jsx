import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../../shared/Sidebar";
import { Outlet } from "react-router-dom";
import useStudent from "../../hooks/useStudent";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div style={{width:'100%', textAlign:'center'}}>
          {isStudent?.student == true ? (
            <h1
              key={1}
              style={{ marginLeft: "4rem", textDecorationLine: "underline" }}
            >
              Student Dashboard
            </h1>
          ) : (
            [
              isAdmin?.admin == true ? (
                <h1
                  key={2}
                  style={{
                    marginLeft: "4rem",
                    textDecorationLine: "underline",
                  }}
                >
                  Admin Dashboard
                </h1>
              ) : (
                <h1
                  key={3}
                  style={{
                    marginLeft: "4rem",
                    textDecorationLine: "underline",
                  }}
                >
                  Instructor Dashboard
                </h1>
              ),
            ]
          )}

          <Outlet />
        </div>
      </Box>
    </>
  );
};

export default DashboardLayout;
