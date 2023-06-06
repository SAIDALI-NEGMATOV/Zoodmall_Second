import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";

export const Sviper = ({ dataAfish }) => {
  const progressCircle = useRef(null);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"ceter"}
      mt={"40px"}
    >
      <Box width={"1177px"} display={"flex"} mr={"21px"} borderRadius={'10px'} overflow={'hidden'}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {dataAfish.map((item, index) => (
            <SwiperSlide key={index}><img src={item.Img} alt="" /></SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
            </svg>
          </div>
        </Swiper>
      </Box>
    </Box>
  );
};
