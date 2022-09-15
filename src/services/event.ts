import axios from "axios";
import { TRaceEvent, Event } from "src/types/event";

const BASE_URL = "https://api-v2-sg-staging.42race.com";

export const eventServices = {
  fetch: async (): Promise<TRaceEvent> => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/race-events`);

      console.log(data);

      return {
        featured: data.data.featured,
        popular: data.data.popular,
        newRelease: data.data.newRelease,
        free: data.data.free,
        past: data.data.past,
        startingSoon: data.data.startingSoon,
      };
    } catch (error) {
      throw error;
    }
  },
  fetchByType: async (
    skipCount: number,
    spotType: string
  ): Promise<{ events: Event[]; total: number }> => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/race-filters?skipCount=${skipCount}&limit=10${
          spotType ? `&spotType=${spotType}` : ""
        }`
      );

      return {
        events: data.data,
        total: data.totalData,
      };
    } catch (error) {
      throw error;
    }
  },
  fetchById: async (id: string): Promise<Event | null> => {
    try {
      const { data } = await axios.get(
        "https://api-v2-sg-staging.42race.com/api/v1/race-filters"
      );

      if (!Array.isArray(data.data)) {
        throw new Error("Data is empty");
      }

      return data.data.find((item: any) => item._id === id);
    } catch (error) {
      throw error;
    }
  },
};
