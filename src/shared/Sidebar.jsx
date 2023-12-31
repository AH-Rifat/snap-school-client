import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
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
            src={user?.photoURL}
            sx={{ width: 80, height: 80 }}
          />
          <Typography sx={{ color: "white" }}>{user?.displayName}</Typography>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={handleLogout}
          >
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
                to={"myclasses"}
                style={{ textDecoration: "none", color: "white" }}
              >
                My Classes
              </Link>
            </Button>
          </Box>
        )}

        {/* for Student */}
        {isStudent?.student == true && (
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
                to={"mySelectedClasses"}
                style={{ textDecoration: "none", color: "white" }}
              >
                My Selected Classes
              </Link>
            </Button>
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"enrollClasses"}
                style={{ textDecoration: "none", color: "white" }}
              >
                My Enrolled Classes
              </Link>
            </Button>
            <Button variant="contained" sx={{ width: "100%" }} color="primary">
              <Link
                to={"paymentHistory"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Payment History
              </Link>
            </Button>
          </Box>
        )}
        <Link to={"/"}>
          <Button variant="outlined" color="warning" sx={{ mt: "1rem" }}>
            Go To Website
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Sidebar;
