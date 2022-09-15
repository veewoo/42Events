export type TRaceEvent = {
  featured: Event[];
  popular: Event[];
  newRelease: Event[];
  free: Event[];
  past: Event[];
  startingSoon: Event[];
};

export type Event = {
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
};
