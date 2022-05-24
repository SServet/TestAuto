import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import "./styles.css";
import { Pagination, Navigation } from "swiper";


export default function CarCarousel ({children}){
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={8}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       {children}
      </Swiper>
    );
}