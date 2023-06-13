// import firebase from "firebase/app";
import { Container, Grid } from "@mui/material";
import InstructorsCard from "../componants/InstructorsCard";
import axios from "axios";
import { useQuery } from "react-query";

const InstructorsPage = () => {
  const { data } = useQuery({
    queryKey: "instructor",
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/allInstructors`
      );
      return res.data;
    },
  });

  return (
    <Container>
      <Grid container spacing={4} style={{ margin: "auto -1rem" }}>
        {data?.slice(0, 6).map((allData) => {
          return (
            <Grid key={allData._id} item xs={12} md={4}>
              <InstructorsCard info={allData} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default InstructorsPage;
