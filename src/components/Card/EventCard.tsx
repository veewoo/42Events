import { Heading, Image, Stack, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Event } from "src/types/event";
import { EventTagList } from "../TagList/EventTagList";

type Props = {
  isVertical?: boolean;
  width?: string;
} & Event;

export function EventCard({
  isVertical,
  _id,
  banner_card,
  race_name,
  racePeriod,
  width,
  ...eventProps
}: Props) {
  const link = `/events/${_id}`;
  return (
    <Stack direction={isVertical ? "column" : "row"} width={width}>
      <Link to={link}>
        <Image
          w={isVertical ? "full" : "80"}
          h="48"
          objectFit="cover"
          src={banner_card}
        />
      </Link>
      <VStack alignItems="flex-start">
        <Heading as="h4" fontSize="md">
          {race_name}
        </Heading>
        <Text fontSize="small">{racePeriod}</Text>
        <EventTagList
          race_type={eventProps.race_type}
          sportType={eventProps.sportType}
          racePrice={eventProps.racePrice}
          raceRunners={eventProps.raceRunners}
        />
      </VStack>
    </Stack>
  );
}
