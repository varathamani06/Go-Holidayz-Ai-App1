


"use client";

import React, { createContext, useContext, Dispatch, SetStateAction,ReactNode,useState } from "react";
// import type { HolidayInfo } from "@/app/Create-new-trip/_components/ChatBox";
import { HolidayInfo } from "@/types/trip";

export type TripContextType = {
  TripDetailInfo: HolidayInfo | null;
  setTripDetailInfo: Dispatch<SetStateAction<HolidayInfo | null>>;
};

export const TripDetailContext = createContext<TripContextType | undefined>(undefined);

export const useTripDetail = (): TripContextType => {
  const ctx = useContext(TripDetailContext);
  if (!ctx) throw new Error("useTripDetail must be used inside TripDetailContext.Provider");
  return ctx;
};

const TripDetailProvider = ({ children }: { children: ReactNode }) => {
  const [TripDetailInfo, setTripDetailInfo] = useState<HolidayInfo | null>(null);

  return (
    <TripDetailContext.Provider value={{ TripDetailInfo, setTripDetailInfo }}>
      {children}
    </TripDetailContext.Provider>
  );
};
export default TripDetailProvider;