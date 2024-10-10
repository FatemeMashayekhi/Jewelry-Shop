import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <div id="app" className="h-full w-[500px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">
          <img src="./src/assets/images/loginpic.jpg" alt="11" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">
          <img src="./src/assets/images/loginpic.jpg" alt="11" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-lg bg-white">
          <img src="./src/assets/images/loginpic.jpg" alt="11" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
