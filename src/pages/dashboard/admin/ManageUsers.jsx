import {
  Badge,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure()

  useEffect(() => {
    axiosSecure
      .get(`/allUsers`)
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleMakeAdmin = (email) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/setUserRole/${email}`, {
        role: "admin",
      })
      .catch((error) => console.log(error));
  };
  const handleMakeInstructor = (email) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/setUserRole/${email}`, {
        role: "instructor",
      })
      .catch((error) => console.log(error));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <Badge color="secondary" badgeContent={row.role}></Badge>
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5rem",
                  }}
                >
                  {row.role == "admin" ? (
                    <Button variant="outlined" color="primary" disabled>
                      Admin
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleMakeAdmin(row.email)}
                    >
                      Admin
                    </Button>
                  )}

                  {row.role == "instructor" ? (
                    <Button variant="outlined" color="primary" disabled>
                      Instructor
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleMakeInstructor(row.email)}
                    >
                      Instructor
                    </Button>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageUsers;
