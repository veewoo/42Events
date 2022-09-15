import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEvent } from "src/contexts/RaceEventContext";
import { Link } from "react-router-dom";
import NavigationButton from "./NavigationButton";

import "swiper/css";
import "swiper/css/navigation";

const id = "home-hero";

export function Carousel() {
  const { data, isLoading } = useEvent();

  if (isLoading) return null;

  if (!data) return null;

  return (
    <Box position="relative">
      <Swiper
        navigation={{
          prevEl: `#btn-prev-${id}`,
          nextEl: `#btn-next-${id}`,
        }}
        autoHeight={true}
        modules={[Navigation]}
      >
        {data.featured.map((item, index) => (
          <SwiperSlide key={"swiper-slide-" + index}>
            <Link to={`events/${item._id}`}>
              <Image src={item.banner_card} alt="home banner" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton id={`btn-prev-${id}`} direction="left" />
      <NavigationButton id={`btn-next-${id}`} direction="right" />
    </Box>
  );
}
