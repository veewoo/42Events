import {
  Box,
  Divider,
  Heading,
  Image,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEvent } from "src/contexts/RaceEventContext";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { TRaceEvent } from "src/types/event";
import { EventCard } from "src/components/Card/EventCard";

const events: {
  title: string;
  key: keyof TRaceEvent;
}[] = [
  { title: "Most Popular 🔥", key: "popular" },
  { title: "featured", key: "featured" },
  { title: "New Release 🎉", key: "newRelease" },
  { title: "free", key: "free" },
  { title: "Past Events ⛳️", key: "past" },
  { title: "startingSoon", key: "startingSoon" },
];

export function EventList() {
  const { data } = useEvent();
  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
  });

  if (!data) return null;

  return (
    <>
      {events.map(({ key, title }) => (
        <Box key={key}>
          <VStack mb={8}>
            <Heading as="h2" textAlign="center" mb={2}>
              {title}
            </Heading>
            <Divider w={"25%"} borderWidth={2} />
          </VStack>
          <Swiper
            navigation={true}
            slidesPerView={slidesPerView}
            spaceBetween={24}
            modules={[Navigation]}
          >
            {data[key].map((item, index) => (
              <SwiperSlide key={"event-" + index}>
                <EventCard {...item} isVertical />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ))}
    </>
  );
}
