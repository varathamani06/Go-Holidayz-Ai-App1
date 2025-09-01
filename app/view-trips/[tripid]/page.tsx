
"use client";

import GlobalMap from '@/app/Create-new-trip/_components/GlobalMap';
import Iternary from '@/app/Create-new-trip/_components/Iternary';
import { useUserDetails } from '@/app/provider';
import { useTripDetail } from '@/context/TripDetailContext';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ViewTrip() {
    const {tripid}=useParams();
    const{userDetail,SetUserDetail}=useUserDetails();
    const convex=useConvex();
    type TripData = {
      _id: string;
      _creationTime: number;
      holidayDetails?: any;
      tripId: string;
      uid: string;
    };
    const [tripData, setTripdata] = useState<TripData | undefined>();
    const {TripDetailInfo,setTripDetailInfo}=useTripDetail();

    useEffect(()=>{userDetail&&getTrip()},[userDetail])
    const getTrip=async()=>{
          const result=await convex.query(api.holidayDetails.GetTripById,{
            uid:userDetail._id,
            tripid:tripid+""
          });
         console.log(result);
         setTripdata(result)
         setTripDetailInfo(result.holidayDetails);
          
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
  {/* Itinerary */}
  <div className="col-span-1 md:col-span-3">
    <Iternary />
  </div>

  {/* Map */}
  <div className="col-span-1 md:col-span-2">
    <GlobalMap />
  </div>
</div>

  )
}

export default ViewTrip