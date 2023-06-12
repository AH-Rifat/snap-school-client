import { Box, Container } from "@mui/material";
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
    <Box sx={{ margin: "2rem 0" }}>
      <Container>
        {data?.map((allData) => {
          return <ClassesCard key={allData._id} info={allData} />;
        })}
      </Container>
    </Box>
  );
};

export default ClassesPage;
