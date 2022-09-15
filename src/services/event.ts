import axios from "axios";
import { TRaceEvent } from "src/types/event";

interface RaceEvent {
  code: number;
  data: Data;
}

interface Data {
  featured: Featured[];
  startingSoon: StartingSoon[];
  popular: Popular[];
  newRelease: Popular[];
  bestDeals: BestDeal[];
  free: Free[];
  past: Past[];
  _id: string;
  updatedAt: string;
  offline: Offline[];
}

interface Offline {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  filterTypes: string[];
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  racePeriod: string;
  racePrice?: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
}

interface Past {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  filterTypes: string[];
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  racePeriod: string;
  racePrice: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
}

interface Free {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  medal_engraving_end_date?: any;
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  isFreeEngraving: boolean;
  racePeriod: string;
  racePrice: string;
  eventType: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  brandRaceSlug: string;
  is_brand_race: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
}

interface BestDeal {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  filterTypes: string[];
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  racePeriod: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
  racePrice?: string;
}

interface Popular {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType?: string;
  filterTypes: string[];
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  racePeriod: string;
  racePrice?: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
}

interface StartingSoon {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  medal_engraving_end_date?: string;
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  isFreeEngraving: boolean;
  racePeriod: string;
  eventType: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  brandRaceSlug: string;
  is_brand_race: boolean;
  joined: boolean;
  bestDeals: string;
  participants: string;
}

interface Featured {
  _id: string;
  raceIDs: string[];
  slug: string;
  race_name: string;
  race_name_lang: string;
  start_date: string;
  end_date: string;
  race_type: string;
  sportType: string;
  filterTypes: string[];
  raceRunners: number;
  launch_date: string;
  is_new: boolean;
  racePeriod: string;
  banner_card: string;
  medalViewImage: string;
  isBundle: boolean;
  joined: boolean;
  bestDeals: number;
  participants: number;
}

export const eventServices = {
  fetch: async (): Promise<TRaceEvent> => {
    try {
      const { data } = await axios.get(
        "https://api-v2-sg-staging.42race.com/api/v1/race-events"
      );

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
};
