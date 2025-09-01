


"use client";

import React, { createContext, useContext, Dispatch, SetStateAction } from "react";
import type { HolidayInfo } from "@/app/Create-new-trip/_components/ChatBox";

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
