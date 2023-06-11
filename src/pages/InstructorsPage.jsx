// import firebase from "firebase/app";
import { Box, Container } from "@mui/material";
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
    <Box sx={{ margin: "2rem 0" }}>
      <Container>
        {data?.map((allData) => {
          return <InstructorsCard key={allData._id} info={allData} />;
        })}
      </Container>
    </Box>
  );
};

export default InstructorsPage;
