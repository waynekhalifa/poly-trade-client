import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";

import "swiper/css";
import SliderItem from "./slider-item";

interface Props {
  data: any;
}

const Slider: React.FC<Props> = ({ data }) => {
  const {
    slidesPerView,
    direction,
    navigation,
    mousewheel,
    pagination,
    autoplay,
    loop,
    type,
    imageHeight,
    borderColor,
    padding,
    prevPosition,
    nextPosition,
    slidesPerGroup,
    spaceBetween,
    files,
  } = data;

  return (
    <Box
      position="relative"
      mt={data.margin ? data.margin.top : 0}
      mb={data.margin ? data.margin.bottom : 0}
      ml={data.margin ? data.margin.left : 0}
      mr={data.margin ? data.margin.right : 0}
      sx={{
        // overflow: "hidden",
        "& .swiper-button-prev,& .swiper-button-next": {
          bgcolor: "secondary.main",
          opacity: "0.6",
          cursor: "pointer",
          height: 32,
          width: 32,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          transition: "opacity .3s ease-out-int",
          "&:hover": {
            opacity: 1,
          },
        },
        "& .swiper-button-prev": {
          left: prevPosition,
          clipPath:
            "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
        },
        "& .swiper-button-next": {
          right: nextPosition,
          clipPath:
            "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
        },
        "& .swiper-pagination": {
          position: "absolute",
          left: "0",
          bottom: "0",
          zIndex: "1",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "12px",
          paddingBottom: "12px",
          columnGap: "6px",
        },
        "& .swiper-pagination-bullet": {
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          border: "1px solid",
          borderColor: "secondary.main",
          cursor: "pointer",
        },
        "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
          bgcolor: "secondary.main",
        },
      }}
    >
      <Swiper
        slidesPerView={slidesPerView}
        direction={direction}
        navigation={navigation}
        mousewheel={mousewheel}
        pagination={pagination ? { clickable: pagination } : false}
        autoplay={autoplay}
        loop={loop}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        modules={[Navigation, Pagination, Mousewheel]}
      >
        {files.data.map((item: any) => (
          <SwiperSlide key={item.id}>
            <SliderItem
              data={item.attributes}
              type={type}
              imageHeight={imageHeight}
              borderColor={borderColor}
              padding={padding}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
