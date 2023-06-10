import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageClasses = () => {
  const [allData, setAllData] = useState([]);

  const columns = [
    {
      field: "classImage",
      headerName: "Class Image",
      width: 140,
      renderCell: (params) => {
        return <Avatar alt="classImage" src={params.value} />;
      },
    },
    { field: "className", headerName: "Class Name", width: 140 },
    { field: "availableSeats", headerName: "Available Seats", width: 115 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "instructorName",
      headerName: "Instructor Name",
      width: 160,
    },
    {
      field: "instructorEmail",
      headerName: "Instructor Email",
      width: 160,
    },
    { field: "status", headerName: "Status", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      width: 275,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => handleSetApprove(params.row._id)}
            disabled={params.row.status == "approve" ? true : false}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => handleSetDeny(params.row._id)}
            disabled={params.row.status == "deny" ? true : false}
          >
            Deny
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/allClasses`
        );
        const rowsWithId = response.data.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setAllData(rowsWithId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [allData]);

  const handleSetApprove = (id) => {
    const res = axios.patch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/classesStatus/${id}?status=${"approve"}`
    );
    return res.data;
  };

  const handleSetDeny = (id) => {
    const res = axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/classesStatus/${id}?status=${"deny"}`
    );
    return res.data;
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "1rem auto" }}
      >
        <Card>
          <CardContent>
            <DataGrid
              rows={allData}
              columns={columns}
              getRowId={(row) => row.id}
              pageSize={5}
              // checkboxSelection
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ManageClasses;
