import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Slider() {
  const { singleProduct } = useContext(DataContext);

  return (
    <div id="app" className="h-full w-[600px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-full"
      >
        {singleProduct &&
          singleProduct.images?.map((image, index) => (
            <SwiperSlide
              key={`${index}`}
              className="flex items-center justify-center text-lg bg-white"
            >
              <img
                src={`http://${image || "default-image.jpg"}`}
                alt={`${index}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
