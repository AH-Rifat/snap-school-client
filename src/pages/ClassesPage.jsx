import { Container, Grid } from "@mui/material";
import ClassesCard from "../componants/ClassesCard";
import { useQuery } from "react-query";
import axios from "axios";

const ClassesPage = () => {
  const { data } = useQuery({
    queryKey: "instructor",
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/approveClasses`
      );
      return res.data;
    },
  });

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "auto 0rem" }}>
        {data?.map((allData) => {
          return (
            <Grid key={allData._id} item xs={12} md={4}>
              <ClassesCard info={allData} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};

export default ClassesPage;
