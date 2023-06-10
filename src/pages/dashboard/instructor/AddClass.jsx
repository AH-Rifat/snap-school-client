import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.classImage[0]);

    fetch(
      `https://api.imgbb.com/1/upload?key=bd119b632506cdb6a21773084edbe9d6`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const imgUrl = res.data.display_url;
        const {
          instructorName,
          instructorEmail,
          status,
          className,
          availableSeats,
          price,
        } = data;
        const classInfo = {
          instructorName,
          instructorEmail,
          status,
          className,
          availableSeats,
          price,
          classImage: imgUrl,
          totalEnrolled:0,
          feedback: ''
        };
        reset();
        axios
          .post(`${import.meta.env.VITE_SERVER_URL}/addClass`, classInfo)
          .then(() => {
            toast.success("Class Created Successfuly");
          })
          .catch((error) => toast.error(error));
      });
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "6rem auto" }}
      >
        <Card>
          <CardContent sx={{ width: 400 }}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                {...register("instructorName", { required: true })}
                defaultValue={user?.displayName}
              />
              <input
                type="hidden"
                {...register("instructorEmail", { required: true })}
                defaultValue={user?.email}
              />
              <input
                type="hidden"
                {...register("status", { required: true })}
                defaultValue={"pending"}
              />
              <TextField
                margin="normal"
                size="small"
                fullWidth
                type="text"
                label="Class Name"
                autoComplete="className"
                autoFocus
                {...register("className", { required: true })}
              />
              {errors.className && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <TextField
                margin="normal"
                size="small"
                fullWidth
                type="file"
                label="Class Image Upload"
                autoComplete="imgaeUpload"
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("classImage", { required: true })}
              />
              {errors.className && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <TextField
                margin="normal"
                size="small"
                fullWidth
                type="number"
                label="Available Seats"
                autoComplete="AvailableSeats"
                autoFocus
                {...register("availableSeats", { required: true })}
              />
              {errors.className && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <TextField
                margin="normal"
                size="small"
                fullWidth
                type="number"
                label="Price"
                autoComplete="price"
                autoFocus
                {...register("price", { required: true })}
              />
              {errors.className && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%", mt: "1rem" }}
              >
                Add Class
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AddClass;
