import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Divider, Grid } from "@mui/material";

import "swiper/css";
import TestimonialItem from "./testimonial-item";
import { FormatQuote } from "@mui/icons-material";
import { Autoplay } from "swiper/modules";

interface Props {
  data: any;
}

const Testimonials: React.FC<Props> = ({ data }) => {
  const { list } = data;

  const renderSlides = (): React.ReactNode => (
    <>
      {list.map((item: any) => (
        <SwiperSlide key={item.id}>
          <TestimonialItem
            image={item.image}
            text={item.text}
            name={item.name}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </>
  );

  return (
    <>
      <Grid
        container
        columnGap={3}
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Divider sx={{ width: 120 }} />
        <FormatQuote
          fontSize="large"
          sx={{ color: "primary.main", transform: "scale(1.6)" }}
        />
        <Divider sx={{ width: 120 }} />
      </Grid>
      <Box position="relative" display={{ md: "none" }}>
        <Swiper slidesPerView={1} spaceBetween={24} autoplay loop>
          {renderSlides()}
        </Swiper>
      </Box>
      <Box position="relative" display={{ xs: "none", md: "block" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
        >
          {renderSlides()}
        </Swiper>
      </Box>
    </>
  );
};

export default Testimonials;
