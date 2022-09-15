import {
  Container,
  Divider,
  Heading,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCard } from "src/components/Card/EventCard";
import LoadingModal from "src/components/LoadingModal";
import { eventServices } from "src/services/event";
import Pagination from "./components/Pagination";

export function Event() {
  const [param] = useSearchParams();
  const isVertical = useBreakpointValue({
    base: true,
    md: false,
  });

  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    const _skipCount = param.get("skipCount");
    setSkipCount(_skipCount ? Number(_skipCount) : 0);
  }, [param]);

  const { data, isLoading } = useQuery(["fetchEventsByType", skipCount], () =>
    eventServices.fetchByType(skipCount, param.get("spotType") ?? "")
  );

  return (
    <Container maxWidth={"container.md"}>
      <Heading my={4}>Events</Heading>
      <Divider />
      {isLoading && <LoadingModal />}
      {!isLoading && !data && <Heading>Data not found!</Heading>}
      {data && (
        <VStack spacing={4} py={6}>
          {data.events.map((item, index) => (
            <EventCard
              key={"event-" + index}
              {...item}
              isVertical={isVertical}
              width="full"
            />
          ))}
          <Pagination
            total={data.total}
            currentIndex={skipCount}
            onPageChange={(nextIndex) => {
              setSkipCount(nextIndex);
            }}
          />
        </VStack>
      )}
    </Container>
  );
}
