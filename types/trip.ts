// types/trip.ts

import { StaticImageData } from "next/image";

export type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_img_url: string | StaticImageData;
  gro_cooridinates: {
    latitude:number;
    longitude:number;
  };
  rating: number;
  description: string;
};

export type Place = {
    
  place_name: string;
  place_address: string;
  ticket_pricing: string; // ticket pricing, e.g., "$20" or "₹500"

    activity_name: string;
  activity_address: string;
  price: string;

  activity_img_url: string | StaticImageData;
  geo_coordinates: {
   latitude:number;
    longitude:number;
  };
  rating: number; // 0–5
  desc: string; // description of the activity
  time_to_travel: string; // e.g., "30 mins from city center"
  best_time_to_visit: string; // e.g., "October to March" or "Morning hours"
};

export type ItineraryDay = {
  places?: any;
  day_number: number; // e.g., 1, 2, 3...
  hotel: Hotel; // where the user stays that day
  activities: Place[]; // list of activities planned for the day
  meals?: string[]; // optional: breakfast/lunch/dinner suggestions
  notes?: string; // extra info, reminders, packing tips
  total_estimated_cost?: string; // summary of day's cost
};

export type HolidayInfo = {
  budget: string;
  destination: string;
  duration: string;
  origin: string;
  group_size: string;
  hotels: Hotel[];
  itinerary: ItineraryDay[];
  activities: Place[]; 
};
