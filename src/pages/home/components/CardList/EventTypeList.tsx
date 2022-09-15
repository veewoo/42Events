import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { useEvent } from "src/contexts/RaceEventContext";
import { EventTypeCard } from "../Card/EventTypeCard";

const EVENT_TYPE = {
  RUNNING: "running",
  CYCLING: "cycling",
  WALKING: "walking",
};

const eventTypes = [
  {
    imageSource: "/images/running.png",
    title: "Running",
    type: EVENT_TYPE.RUNNING,
  },
  {
    imageSource: "/images/cyclist.png",
    title: "Cycling",
    type: EVENT_TYPE.CYCLING,
  },
  {
    imageSource: "/images/walking.png",
    title: "Walking",
    type: EVENT_TYPE.WALKING,
  },
];

export function EventTypeList(props: SimpleGridProps) {
  return (
    <SimpleGrid
      {...props}
      columns={{
        base: 1,
        md: 3,
      }}
      spacing={16}
    >
      {eventTypes.map(({ type, ...eventTypeProp }, index) => (
        <EventTypeCard
          {...eventTypeProp}
          redirectUrl={`/events?spotType=${type}`}
        />
      ))}
    </SimpleGrid>
  );
}
