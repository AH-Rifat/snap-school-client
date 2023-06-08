import { Avatar, Box, Button, Divider } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <Button variant="contained" sx={{ width: "100%" }} color="primary">
            Manage Classes
          </Button>
          <Button variant="contained" sx={{ width: "100%" }} color="primary">
            Manage Users
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Sidebar;
