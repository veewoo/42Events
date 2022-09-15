import {
  Box,
  Divider,
  Heading,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEvent } from "src/contexts/RaceEventContext";
import { TRaceEvent } from "src/types/event";
import { EventCard } from "src/components/Card/EventCard";
import NavigationButton from "../Carousel/NavigationButton";

import "swiper/css";
import "swiper/css/navigation";

const events: {
  title: string;
  key: keyof TRaceEvent;
}[] = [
  { title: "Most Popular 🔥", key: "popular" },
  { title: "Featured 🌟", key: "featured" },
  { title: "New Release 🎉", key: "newRelease" },
  { title: "Free", key: "free" },
  { title: "Past Events ⛳️", key: "past" },
  { title: "Starting Soon", key: "startingSoon" },
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
        <Box key={key} mb="24" position="relative">
          <VStack mb={8} alignItems="flex-start">
            <Heading as="h2" textAlign="center" mb={2}>
              {title}
            </Heading>
            <Divider w={"20%"} borderWidth={2} borderColor="teal" />
          </VStack>
          <Swiper
            navigation={{
              prevEl: `#btn-prev-${key}`,
              nextEl: `#btn-next-${key}`,
            }}
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
          <NavigationButton id={`btn-prev-${key}`} direction="left" />
          <NavigationButton id={`btn-next-${key}`} direction="right" />
        </Box>
      ))}
    </>
  );
}
