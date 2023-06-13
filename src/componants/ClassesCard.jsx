import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import axios from "axios";

const ClassesCard = (info) => {
  const { _id, classImage, className, instructorName, availableSeats, price } =
    info.info;
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    if (
      isAdmin?.admin == true ||
      isInstructor?.instructor == true ||
      availableSeats == 0
    ) {
      setBtnDisable(true);
    }
  }, [isAdmin?.admin, isInstructor?.instructor, availableSeats]);

  const handleSelectedClass = () => {
    if (!user) {
      return toast.error("Please login as a Student");
    }
    const allData = {
      classId: _id,
      className,
      instructorName,
      price,
      studentName: user?.displayName,
      studentEmail: user?.email,
    };
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/myClasses`, allData)
      .then(() => {
        toast.success("Selected Your Class");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={classImage}
          alt="Class Image"
        />
        <CardContent sx={{ display: "grid", gap: ".5rem" }}>
          <Typography gutterBottom variant="h5" component="div">
            {className}
          </Typography>
          <Typography variant="p" component="div">
            Instractor Name: {instructorName}
          </Typography>
          <Typography variant="p" component="div">
            Available Seats: {availableSeats}
          </Typography>
          <Typography variant="p" component="div">
            Price: {price}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem" }}
            color="primary"
            onClick={handleSelectedClass}
            disabled={btnDisable}
          >
            Select
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ClassesCard;
