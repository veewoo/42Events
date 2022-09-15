import { ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import { EventDetail } from "./pages/eventDetail";
import { RaceEventProvider } from "./contexts/RaceEventContext";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RaceEventProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </RaceEventProvider>
    </QueryClientProvider>
  </ChakraProvider>
);
