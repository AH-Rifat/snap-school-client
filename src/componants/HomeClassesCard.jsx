import ClassesCard from "./ClassesCard";
import { Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

const HomeClassesCard = () => {
  const { data } = useQuery({
    queryKey: ["homeClasses"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/allClasses`
      );
      return res.data;
    },
  });

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "auto -1rem" }}>
        {data?.slice(0,6).map((data) => {
          return (
            <Grid key={data._id} item xs={12} md={4}>
              <ClassesCard info={data} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomeClassesCard;
