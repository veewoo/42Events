import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";
import { eventServices } from "src/services/event";
import { TRaceEvent } from "src/types/event";

type ContextProps = {
  data?: TRaceEvent;
  isLoading?: boolean;
};

const defaultState = {
  featured: [],
  popular: [],
  newRelease: [],
  free: [],
  past: [],
  startingSoon: [],
};

const RaceEventContext = createContext<ContextProps>({
  data: defaultState,
});

type ProviderProps = {
  children: ReactNode;
};

export function RaceEventProvider({ children }: ProviderProps) {
  const { data, isLoading } = useQuery(["fetchEvents"], eventServices.fetch);

  return (
    <RaceEventContext.Provider value={{ data: data, isLoading }}>
      {children}
    </RaceEventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(RaceEventContext);

  return context;
}
