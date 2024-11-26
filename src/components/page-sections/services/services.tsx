"use client";

import { Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ServiceItem from "./service-item";
import { Box } from "@mui/material";

interface Props {
  listing: any;
}

const Services: React.FC<Props> = ({ listing }) => {
  return (
    <Box
      sx={{
        "& .swiper-pagination": {
          position: "absolute",
          width: { xs: "100%", md: "fit-content" },
          bottom: { xs: "0" },
          top: { md: "0" },
          left: { xs: "0", md: "auto" },
          right: { md: "0" },
          zIndex: "1",
          height: { md: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "column" },
          paddingRight: { md: 4 },
          paddingBottom: { xs: 4, md: 0 },
          gap: "8px",
        },
        "& .swiper-pagination-bullet": {
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          bgcolor: "primary.main",
          cursor: "pointer",
          transition: "all .3s ease-in",
        },
        "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
          width: "16px",
          height: "16px",
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        direction="vertical"
        mousewheel
        pagination={{ clickable: true }}
        autoplay
        loop
        modules={[Pagination, Mousewheel]}
      >
        {listing.map((item: any) => (
          <SwiperSlide key={item.id}>
            <ServiceItem item={item.attributes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Services;
