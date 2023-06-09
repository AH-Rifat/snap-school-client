import { Avatar, Box, Button, Divider } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#1c2536",
          height: "100vh",
          width: "15rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80 }}
          />
          <Button variant="contained" color="warning" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Divider sx={{ color: "whitesmoke", margin: "1rem 0" }}>Menu</Divider>
        {/* for Admin */}
        {isAdmin?.admin == true && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"manageClasses"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Manage Classes
              </Link>
            </Button>
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"manageUsers"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Manage Users
              </Link>
            </Button>
          </Box>
        )}

        {/* for Instructor */}
        {isInstructor?.instructor == true && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"addClass"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Class
              </Link>
            </Button>
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"manageUsers"}
                style={{ textDecoration: "none", color: "white" }}
              >
                My Classes
              </Link>
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Sidebar;
