import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/event";
import { EventDetail } from "./pages/eventDetail";
import { Header } from "./components/Header/Header";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Box as="main" position="relative" zIndex={0} pt={16}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
);
