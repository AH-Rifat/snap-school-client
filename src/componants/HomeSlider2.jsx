import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import InstructorsCard from "./InstructorsCard";
import { Container } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

const HomeSlider2 = () => {
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
    <Container sx={{ display: { md: "flex" }, justifyContent: "center" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((allData) => {
          return (
            <SwiperSlide key={allData._id}>
              <InstructorsCard info={allData} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default HomeSlider2;
