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
import { Event } from "src/types/event";
import { BiCycling, BiRun, BiWalk } from "react-icons/bi";
import { SPOT_TYPE } from "src/utils/constants";
import { IconType } from "react-icons";

type Props = Pick<
  Event,
  "sportType" | "raceRunners" | "racePrice" | "race_type"
>;

export function EventTagList({
  sportType,
  raceRunners,
  racePrice,
  race_type,
}: Props) {
  const tags: { icon?: IconType; title: string }[] = [
    {
      icon: SpotTypeIcon(sportType),
      title: sportType ?? "",
    },
    {
      title: raceRunners ? raceRunners + " runners" : "",
    },
    {
      title: racePrice ? "$ " + racePrice : "",
    },
    {
      title: race_type,
    },
  ];

  return (
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
