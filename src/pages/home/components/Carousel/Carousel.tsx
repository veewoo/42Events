import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEvent } from "src/contexts/RaceEventContext";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper-custom.css";

export function Carousel() {
  const { data } = useEvent();

  if (!data) return null;

  return (
    <Swiper navigation={true} autoHeight={true} modules={[Navigation]}>
      {data.featured.map((item, index) => (
        <SwiperSlide key={"swiper-slide-" + index}>
          <Link to={`events/${item._id}`}>
            <Image src={item.banner_card} alt="home banner" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
