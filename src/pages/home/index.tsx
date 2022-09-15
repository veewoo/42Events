import { Container, Divider, Skeleton } from "@chakra-ui/react";
import { RaceEventProvider, useEvent } from "src/contexts/RaceEventContext";
import { EventList } from "./components/CardList/EventList";
import { EventTypeList } from "./components/CardList/EventTypeList";
import Carousel from "./components/Carousel";

export function Home() {
  const { isLoading } = useEvent();

  return (
    <RaceEventProvider>
      <Container maxWidth="container.md">
        {isLoading ? <Skeleton height="400px" /> : <Carousel />}
        <EventTypeList my={8} />
        <EventList />
      </Container>
    </RaceEventProvider>
  );
}
