import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";

const MySelectedClasses = () => {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: "instructor",
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/myClasses/${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <Box sx={{ margin: "2rem 0" }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={8} md={4}>
            {
              data?.length == 0 ? <h1 style={{color:'red'}}>No Selected Data</h1> : (
                data?.map(({ _id, className, instructorName, price }) => {
                  return (
                    <Card key={_id} sx={{ maxWidth: 345 }}>
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
                        <Button size="small" variant="contained" color="error">
                          Delete
                        </Button>
                        <Button size="small" variant="contained" color="primary">
                          Pay
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })
              )
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MySelectedClasses;
