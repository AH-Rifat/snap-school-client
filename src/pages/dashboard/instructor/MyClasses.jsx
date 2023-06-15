import { Box, Button, Card, CardContent, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth()
  const [allData, setAllData] = useState([]);

  const columns = [
    { field: "className", headerName: "Class Name", width: 140 },
    { field: "availableSeats", headerName: "Available Seats", width: 115 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "totalEnrolled", headerName: "Total Enrolled Students", width: 160 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "feedback", headerName: "Feedback", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      renderCell: (params) => (
        <div style={{display:'flex', gap:'1rem'}}>
          <Button variant="contained" size="small" color="success" onClick={() => handleEdit(params.row.id)}>Edit</Button>
          <Button variant="contained" size="small" color="error" onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const { refetch } = useQuery("myClasses", async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/showClasses/${user?.email}`);
    const rowsWithId = response.data.map((row, index) => ({
      ...row,
      id: index + 1,
    }));
    setAllData(rowsWithId);
    return [rowsWithId, refetch];
  });

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log("Edit row with ID:", id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log("Delete row with ID:", id);
  };

  console.log(allData);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem auto" }}>
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

export default MyClasses;
