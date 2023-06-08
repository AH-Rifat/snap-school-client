import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import InstructorsCard from "./InstructorsCard";
import { Container } from "@mui/material";

const HomeSlider2 = () => {
  return (
    <Container sx={{display:{md:"flex"}, justifyContent:'center'}}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
            <InstructorsCard/>
        </SwiperSlide>

        <SwiperSlide>
        <InstructorsCard/>
        </SwiperSlide>

        <SwiperSlide>
        <InstructorsCard/>
        </SwiperSlide>

        <SwiperSlide>
        <InstructorsCard/>
        </SwiperSlide>

        <SwiperSlide>
        <InstructorsCard/>
        </SwiperSlide>
        
        <SwiperSlide>
        <InstructorsCard/>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default HomeSlider2;
