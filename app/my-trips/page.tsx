// "use client";

// import { Button } from '@/components/ui/button';
// import { api } from '@/convex/_generated/api';
// import { useConvex } from 'convex/react';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { useUserDetails } from '../provider';
// import { useQuery } from "convex/react";

// function Mytrips() {
//     const [myTrips,setMyTrips]=useState([]);
//     const {userDetails}= useUserDetails();
//     const convex=useConvex();
    
//     // useEffect(()=>{
//     //     setUserDetail && GetUserTrips();
        
//     // },[setUserDetail])

//     // const GetUserTrips=async()=>{
//     //       const result=await convex.query(api.holidayDetails.GetUserTrip,{
//     //         uid: setUserDetail?._id
//     //       });
          
//     //       console.log(result);
          
//     //       console.log("hey..");
          
          
//     // }
//     // console.log(GetUserTrips.length);

//     const trips = useQuery(api.holidayDetails.GetUserTrip, 
//     userDetails?._id ? { uid: userDetails._id } : "skip"
//   );

//   console.log("Trips from convex:", trips);


//   return (
//     <div className='px-10 p-10 md:px-24 lg:pax-48'>
//           <h2 className='font-bold text-3xl'>My Trips</h2>
//           {myTrips?.length==0&&
//           <div className='p-7 border rounded-2xl my-5 flex flex-col items-center justify-center'>
//             <h2>You dont have any trip plan Created</h2>
//             <Link href={'/Create-new-trip'}>
//             <Button className='mt-2'> Create New Holiday Trip</Button>
//             </Link>

//           </div>}
//     </div>
//   )
// }

// export default Mytrips









"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUserDetails } from '../provider';
import { ArrowBigLeftIcon, ArrowBigRightIcon, Link, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { HolidayInfo } from "../Create-new-trip/_components/ChatBox";
import { HolidayInfo } from "@/types/trip";
import Image from "next/image";
import Hotelimagei from "../../public/HotelImage1.jpg"
import MyTripCarditem from "./_components/MyTripCarditem";

export type Trip={
    tripId:any,
    tripDetail:HolidayInfo,
    _id:string
}

export default function Mytrips() {
  const { userDetail } = useUserDetails();

  const [myTrips, setMyTrips] = useState<
   Trip[]
  >([]);

  const trips = useQuery(
    api.holidayDetails.GetUserTrip,
    userDetail ? { uid: userDetail._id } : "skip"
  );

  useEffect(() => {
    if (trips) {
      setMyTrips(
        trips.map((trip: any) => ({
          tripId: trip.tripId,
          tripDetail: trip.holidayDetails,
          _id: trip._id
        }))
      );
       console.log(myTrips, "oioi");
    }
   
    
    console.log("Trips from convex:", trips);
  }, [trips]);

  if (trips === undefined) {
   return (
         <div className="flex items-center justify-center h-64">
      <div className="flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-xl shadow-md">
        <Loader2 className="w-6 h-6 text-primary animate-spin" />
        <span className="text-lg font-semibold text-gray-600">
          Loading trips…
        </span>
      </div>
    </div>
    ) 
  }

  if (trips.length === 0) {
    return (
         <div className="flex items-center justify-center h-64">
      <div className="flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-xl shadow-md">
        <Loader2 className="w-6 h-6 text-primary animate-spin" />
        <span className="text-lg font-semibold text-gray-600">
          Loading trips…
        </span>
      </div>
    </div>
    ) 
  }

  return (
   <div className='px-10 p-10 md:px-24 lg:pax-48'>
             
       <h2 className='font-bold text-3xl'>My Trips</h2>
          {myTrips?.length==0&&
          <div className='p-7 border rounded-2xl my-5 flex flex-col items-center justify-center'>
             <h2>You dont have any trip plan Created</h2>
         <Link href={'/Create-new-trip'}>
           <Button className='mt-2'> Create New Holiday Trip</Button>
          </Link>
         </div>
         
          }
     
      
      <div  className="px-10 p-10 md:px-24 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {
            myTrips.map((trip,index)=>{
                return (
                    <div key={index}>
                        <MyTripCarditem trip={trip}/>
                    </div>
                );
            })
        }
      </div>
    </div>
    
  );
}
