import { Box, Container, Heading, Image, VStack } from "@chakra-ui/react";
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
        <Box>
          <Image src={data.banner_card} />
          <Heading as="h2" mt={4}>
            {data.race_name}
          </Heading>
          <Heading as="h4" fontSize="small" mt={1}>
            {data.racePeriod}
          </Heading>
          <EventTagList
            mt={4}
            race_type={data.race_type}
            sportType={data.sportType}
            racePrice={data.racePrice}
            raceRunners={data.raceRunners}
          />
          <Heading as="h3" fontSize="md" mt={4}>
            Medal
          </Heading>
          <Image src={data.medalViewImage} mt={2} />
        </Box>
      )}
    </Container>
  );
}
