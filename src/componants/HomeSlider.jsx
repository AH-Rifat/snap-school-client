import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Stack, Typography } from "@mui/material";

const imageStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "80vh",
  filter: "brightness(40%)",
};

const HomeSlider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            justifyContent="space-around"
            useFlexGap
          >
            <div
              style={{
                position: "absolute",
                width: "70%",
                margin: "10rem",
                zIndex: 10,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h2"
                style={{ color: "white", marginBottom: "4rem" }}
              >
                Discover the Art of Photography
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                Join our photography learning school and embark on a journey to
                unleash your creative potential. Learn from industry
                professionals and experienced photographers who are passionate
                about sharing their knowledge. Develop essential skills, master
                the art of composition, and capture breathtaking moments with
                your camera. Whether you are a beginner or an enthusiast, we
                have the right courses to nurture your talent and elevate your
                photography to new heights.
              </Typography>
            </div>
            <img
              src={
                "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={imageStyle}
            />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            justifyContent="space-around"
            useFlexGap
          >
            <div
              style={{
                position: "absolute",
                width: "70%",
                margin: "10rem",
                zIndex: 10,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h2"
                style={{ color: "white", marginBottom: "4rem" }}
              >
                Capture the Essence of Life
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                Learn the art of street photography and document authentic
                stories through powerful images. Explore the streets, connect
                with diverse communities, and capture candid moments that
                reflect the beauty of everyday life. Our experienced instructors
                will guide you in mastering the technical aspects, composition
                techniques, and effective storytelling in street photography.
                Unleash your creativity and develop a unique photographic style
                that showcases your perspective of the world.
              </Typography>
            </div>
            <img
              src={
                "https://images.pexels.com/photos/241555/pexels-photo-241555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={imageStyle}
            />
          </Stack>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default HomeSlider;
