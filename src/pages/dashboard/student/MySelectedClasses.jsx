import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MySelectedClasses = () => {
  const { user } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: "instructor",
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/myClasses/${user?.email}`
      );
      return res.data;
    },
  });

  const handleDelete = (id)=>{
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/myClasses/${id}`)
    .then(()=>{
      refetch()
      toast.success('Deleted Successful')
    })
  }

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "auto -1rem" }}>
        {
          data?.length == 0 ? <h1 style={{ color: 'red' }}>No Selected Data</h1> : (
            data?.map(({ _id, className, classId, instructorName, price }) => {
              return (
                <Grid key={_id} item xs={12} md={4}>

                  <Card sx={{ maxWidth: 345, borderRadius: '.5rem' }}>
                    <CardContent>
                      <Typography
                        style={{ fontWeight: "600" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {className}
                      </Typography>
                      <Typography
                        sx={{ textAlign: "start" }}
                        variant="p"
                        component="div"
                      >
                        Instructor Name: {instructorName}
                      </Typography>
                      <Typography
                        sx={{ textAlign: "start" }}
                        variant="p"
                        component="div"
                      >
                        Price: {price}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ justifyContent: "space-between", marginX: "1rem" }}
                    >
                      <Button onClick={()=> handleDelete(_id)} size="small" variant="contained" color="error">
                        Delete
                      </Button>
                      <Link to={`/dashboard/paymentPage/${price}/${classId}`}>
                        <Button size="small" variant="contained" color="primary">
                          Pay
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          )
        }
      </Grid>
    </Container>
  );
};

export default MySelectedClasses;
