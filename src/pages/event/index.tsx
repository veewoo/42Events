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

const ITEM_PER_PAGE = 10;

export function Event() {
  const [param] = useSearchParams();
  const isVertical = useBreakpointValue({
    base: true,
    md: false,
  });

  const [pageIndex, setPageIndex] = useState(0);

  const { data, isLoading } = useQuery(["fetchEventsByType", pageIndex], () =>
    eventServices.fetchByType(pageIndex * 10, param.get("spotType") ?? "")
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
            limit={ITEM_PER_PAGE}
            currentIndex={pageIndex}
            onPageChange={(nextIndex) => {
              setPageIndex(nextIndex);
            }}
          />
        </VStack>
      )}
    </Container>
  );
}
