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

const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
