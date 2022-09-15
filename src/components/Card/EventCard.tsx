import {
  Box,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Stack,
  VStack,
  Text,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Event } from "src/types/event";
import { BiCycling, BiRun, BiWalk } from "react-icons/bi";
import { SPOT_TYPE } from "src/utils/constants";
import { IconType } from "react-icons";

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
  sportType,
  raceRunners,
  racePrice,
  race_type,
  width,
}: Props) {
  const link = `/events/${_id}`;
  const tags: { icon?: IconType; title: string }[] = [
    {
      icon: SpotTypeIcon(sportType),
      title: sportType ?? "",
    },
    {
      title: raceRunners + " joined",
    },
    {
      title: racePrice ? "$ " + racePrice : "",
    },
    {
      title: race_type,
    },
  ];

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
        <HStack spacing={4}>
          {tags
            .filter((item) => item.title)
            .map(({ title, icon }, index) => (
              <Tag
                key={"tag-" + index}
                size={"md"}
                variant="subtle"
                colorScheme="cyan"
              >
                {icon && <TagLeftIcon boxSize="12px" as={icon} />}
                <TagLabel>{title}</TagLabel>
              </Tag>
            ))}
        </HStack>
      </VStack>
    </Stack>
  );
}

function SpotTypeIcon(type?: string) {
  switch (type) {
    case SPOT_TYPE.RUNNING:
      return BiRun;
    case SPOT_TYPE.CYCLING:
      return BiCycling;
    case SPOT_TYPE.WALKING:
      return BiWalk;
    default:
      return undefined;
  }
}
