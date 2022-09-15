import { Container, Heading, Image, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingModal from "src/components/LoadingModal";
import { EventTagList } from "src/components/TagList/EventTagList";
import { eventServices } from "src/services/event";

export function EventDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["fetchEventsById", id], () =>
    eventServices.fetchById(id ?? "")
  );

  return (
    <Container maxWidth={"container.md"}>
      {isLoading && <LoadingModal />}
      {!isLoading && !data && <Heading>Data not found!</Heading>}
      {data && (
        <VStack spacing={4} alignItems="flex-start">
          <Image src={data.banner_card} />
          <Heading as="h2">{data.race_name}</Heading>
          <Heading as="h4" fontSize="small">
            {data.racePeriod}
          </Heading>
          <EventTagList {...data} />
        </VStack>
      )}
    </Container>
  );
}
