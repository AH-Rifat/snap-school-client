import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import FeedbackModal from "../../../componants/FeedbackModal";
// feedback modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid grey",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

const ManageClasses = () => {
  const [allData, setAllData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setSelectedId(id);
  };
  const handleClose = () => setOpen(false);
  const [selectedId, setSelectedId] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    handleClose();
    console.log(data);
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/admin/feedback`, data)
      .then(() => {
        toast.success("Feedback Sent Successfuly");
      })
      .catch((error) => toast.error(error.message));
  };

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
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={() => handleOpen(params.row._id)}
          >
            Feedback
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            color={"gray"}
            variant="h6"
            component="h2"
            sx={{ marginBottom: "1.5rem", fontWeight: 700 }}
          >
            Send Feedback
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("feedback")}
              fullWidth
              label="Type Here"
              rows={4}
              multiline
            />
            <input
              type="hidden"
              {...register("classId")}
              defaultValue={selectedId}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <Button variant="outlined" color="success" type="submit">
                Send
              </Button>
              <Button variant="outlined" color="error" onClick={handleClose}>
                close
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
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
