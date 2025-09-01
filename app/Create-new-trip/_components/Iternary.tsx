// "use client";

// import React from "react";
// import Image from "next/image";
// import { MapPin, Star, Wallet } from "lucide-react";

// // ----------------- Types -----------------
// type Hotel = {
//   hotel_name: string;
//   hotel_address: string;
//   price_per_night: string;
//   hotel_img_url: any;
//   gro_cooridinates: { latitude: number; longitude: number };
//   rating: number;
//   description: string;
// };

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string;
//   activity_img_url: any;
//   geo_coordinates: { lat: number; lng: number };
//   rating: number;
//   desc: string;
//   time_to_travel: string;
//   best_time_to_visit: string;
// };

// type ItineraryDay = {
//   day_number: number;
//   hotel: Hotel;
//   activities: Activity[];
//   meals: string[];
//   notes: string;
//   total_estimated_cost: string;
// };

// type HolidayInfo = {
//   destination: string;
//   duration: string;
//   origin: string;
//   budget: string;
//   group_size: string;
//   hotels: Hotel[];
//   itinerary: ItineraryDay[];
// };

// type TimelineEntry = {
//   title: string;
//   content: React.ReactNode;
// };

// // ----------------- Sample Data -----------------
// import HotelImage1 from "../../../public/HotelImage1.jpg";

// const Holiday_data: HolidayInfo = {
//   destination: "Paris",
//   duration: "5 days",
//   origin: "New York",
//   budget: "$2000",
//   group_size: "4",
//   hotels: [
//     {
//       hotel_name: "Eiffel View Hotel",
//       hotel_address: "123 Paris Street, Paris, France",
//       price_per_night: "$150",
//       hotel_img_url: HotelImage1,
//       gro_cooridinates: { latitude: 48.8566, longitude: 2.3522 },
//       rating: 4.5,
//       description: "A beautiful hotel with a view of the Eiffel Tower.",
//     },
//   ],
//   itinerary: [
//     {
//       day_number: 1,
//       hotel: {
//         hotel_name: "Eiffel View Hotel",
//         hotel_address: "123 Paris Street, Paris, France",
//         price_per_night: "$150",
//         hotel_img_url: HotelImage1,
//         gro_cooridinates: { latitude: 48.8566, longitude: 2.3522 },
//         rating: 4.5,
//         description: "Stay at Eiffel View Hotel on Day 1.",
//       },
//       activities: [
//         {
//           activity_name: "Eiffel Tower Visit",
//           activity_address: "Champ de Mars, Paris",
//           price: "$30",
//           activity_img_url: HotelImage1,
//           geo_coordinates: { lat: 48.8584, lng: 2.2945 },
//           rating: 5,
//           desc: "Climb up to the top of the Eiffel Tower.",
//           time_to_travel: "15 mins from hotel",
//           best_time_to_visit: "Evening for sunset view",
//         },
//       ],
//       meals: ["Breakfast", "Lunch", "Dinner cruise"],
//       notes: "Wear comfortable shoes.",
//       total_estimated_cost: "$250",
//     },
//   ],
// };

// // ----------------- Timeline Component -----------------
// export const Timeline = ({
//   data,
//   tripData,
// }: {
//   data: TimelineEntry[];
//   tripData: HolidayInfo;
// }) => {
//   // Auto-generate itinerary timeline
//   const itineraryData: TimelineEntry[] = tripData.itinerary.map((day) => ({
//     title: `Day ${day.day_number}`,
//     content: (
//       <div className="border p-4 rounded-md my-2 bg-white dark:bg-neutral-800 shadow">
//     {/* Hotel Info */}
//     <h3 className="font-bold text-lg mb-3">{day.hotel.hotel_name}</h3>

//     {/* Activities List */}
//     <div className="space-y-4">
//       {day.activities.map((activity, i) => (
//         <div
//           key={i}
//           className="border rounded-lg p-3 bg-gray-50 dark:bg-neutral-900 shadow-sm"
//         >
//           <div className="flex items-center gap-2 mb-2">
//            <MapPin  className="w-5 h-5 text-blue-500" />
//             <h4 className="font-semibold">{activity.activity_name}</h4>
//           </div>

//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             📍 {activity.activity_address}
//           </p>
//           <p className="text-sm">🎟 {activity.price}</p>
//           <p className="text-sm">⏱ {activity.time_to_travel}</p>
//           <p className="text-sm">🌤 Best time: {activity.best_time_to_visit}</p>
//           <p className="text-sm">⭐ {activity.rating}/5</p>
//           <p className="text-sm mt-1">{activity.desc}</p>

//           {/* Image */}
//           <Image
//             src={activity.activity_img_url}
//             alt={activity.activity_name}
//             width={800}   // bigger base width
//   height={400}  // bigger base height
//   className="w-full h-40 object-cover rounded-lg mt-2"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
//     ),
//   }));

//   const mergedData = [...data, ...itineraryData];

//   return (
//     <div>
//       {mergedData.map((entry, idx) => (
//         <div key={idx} className="mb-6">
//           <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
//           {entry.content}
//         </div>
//       ))}
//     </div>
//   );
// };

// // ----------------- Page Component -----------------
// function Iternary() {
//   const data: TimelineEntry[] = [
//     {
//       title: "Recommended Hotels",
//       content: (
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {Holiday_data.hotels.map((hotel, index) => (
//             <div key={index} >
//               <Image
//                 src={hotel.hotel_img_url}
//                 width={400}
//                 height={400}
//                 alt="place-image"
//                 className="rounded-xl shadow object-cover mb-2"
      
//               />
//               <h2 className="font-semibold text-lg">{hotel.hotel_name}</h2>
//               <h2 className="text-gray-500">{hotel.hotel_address}</h2>
//               <p className="flex gap-2 text-green-500">
//                 <Wallet />
//                 {hotel.price_per_night}
//               </p>
//               <p className="text-yellow-500 flex gap-2">
//                 <Star />
//                 {hotel.rating}
//               </p>
//               <p className="line-clamp-2 text-gray-500">{hotel?.description}</p>
//             </div>
//           ))}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="relative p-4 rounded-lg shadow-lg overflow-auto h-[83vh] bg-white">
//       <Timeline data={data} tripData={Holiday_data} />
//     </div>
//   );
// }

// export default Iternary;

 "use client"
import React, { useState } from 'react'
import { Timeline } from "@/components/ui/timeline";

import Image from 'next/image';
import HotelImage1 from '../../../public/HotelImage1.jpg'
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { small } from 'motion/react-client';
import Link from 'next/link';
import axios from 'axios';
import HotelCarditem from './HotelCarditem';
import PlaceCarditem from './PlaceCarditem';
import { useTripDetail } from '@/app/provider';
import { HolidayInfo, place } from './ChatBox';

// const Holiday_data = {
//   destination: "Paris",
//   duration: "5 days",
//   origin: "New York",
//   budget: "$2000",
//   group_size: "4",
//   hotels: [
//     {
//       hotel_name: "Eiffel View Hotel",
//       hotel_address: "123 Paris Street, Paris, France",
//       price_per_night: "$150",
//       // /images/hotel1.jpg 
//       hotel_img_url: HotelImage1,
//       gro_cooridinates: {
//         latitude: 48.8566,
//         longitude: 2.3522,
//       },
//       rating: 4.5,
//       description: "A beautiful hotel with a view of the Eiffel Tower.",
//     },
//       {
//       hotel_name: "Eiffel View Hotel",
//       hotel_address: "123 Paris Street, Paris, France",
//       price_per_night: "$150",
//       // /images/hotel1.jpg 
//       hotel_img_url: HotelImage1,
//       gro_cooridinates: {
//         latitude: 48.8566,
//         longitude: 2.3522,
//       },
//       rating: 4.5,
//       description: "A beautiful hotel with a view of the Eiffel Tower.",
//     },
//   ],
//   itinerary: [
//     {
//       day_number: 1,
//       hotel: {
//         hotel_name: "Eiffel Hotel",
//         hotel_address: "123 Paris Street, Paris, France",
//         price_per_night: "$150",
//         // /images/hotel1.jpg
//         hotel_img_url:HotelImage1,

//         gro_cooridinates: {
//           latitude: 48.8566,
//           longitude: 2.3522,
//         },
//         rating: 4.5,
//         description: "Stay at Eiffel View Hotel on Day 1.",
//       },
//       activities: [
//         {
//           activity_name: "Eiffel Tower Visit",
//           activity_address: "Champ de Mars, 5 Avenue Anatole, Paris",
//           price: "$30",
//           ///images/eiffel.jpg
//           activity_img_url:HotelImage1,
//           geo_coordinates: {
//             lat: 48.8584,
//             lng: 2.2945,
//           },
//           rating: 5,
//           desc: "Climb up to the top of the Eiffel Tower and enjoy the Paris skyline.",
//           time_to_travel: "15 mins from hotel",
//           best_time_to_visit: "Evening for sunset view",
//         },
//         {
//           activity_name: "Seine River Cruise",
//           activity_address: "Port de la Bourdonnais, Paris",
//           price: "$25",
//           ///images/seine.jpg
//           activity_img_url: HotelImage1,
//           geo_coordinates: {
//             lat: 48.862725,
//             lng: 2.287592,
//           },
//           rating: 4.7,
//           desc: "Enjoy a romantic evening cruise along the Seine River.",
//           time_to_travel: "10 mins from Eiffel Tower",
//           best_time_to_visit: "Night with lights",
//         },
//       ],
//       meals: ["Breakfast at hotel", "Lunch at local café", "Dinner cruise"],
//       notes: "Wear comfortable shoes for walking.",
//       total_estimated_cost: "$250",
//     },
//     {
//       day_number: 2,
//       hotel: {
//         hotel_name: "Eiffel Hotel",
//         hotel_address: "123 Paris Street, Paris, France",
//         price_per_night: "$150",
//         // /images/hotel1.jpg
//         hotel_img_url:HotelImage1,

//         gro_cooridinates: {
//           latitude: 48.8566,
//           longitude: 2.3522,
//         },
//         rating: 4.5,
//         description: "Stay at Eiffel View Hotel on Day 1.",
//       },
//       activities: [
//         {
//           activity_name: "Eiffel Tower Visit",
//           activity_address: "Champ de Mars, 5 Avenue Anatole, Paris",
//           price: "$30",
//           ///images/eiffel.jpg
//           activity_img_url:HotelImage1,
//           geo_coordinates: {
//             lat: 48.8584,
//             lng: 2.2945,
//           },
//           rating: 5,
//           desc: "Climb up to the top of the Eiffel Tower and enjoy the Paris skyline.",
//           time_to_travel: "15 mins from hotel",
//           best_time_to_visit: "Evening for sunset view",
//         },
//         {
//           activity_name: "Seine River Cruise",
//           activity_address: "Port de la Bourdonnais, Paris",
//           price: "$25",
//           ///images/seine.jpg
//           activity_img_url: HotelImage1,
//           geo_coordinates: {
//             lat: 48.862725,
//             lng: 2.287592,
//           },
//           rating: 4.7,
//           desc: "Enjoy a romantic evening cruise along the Seine River.",
//           time_to_travel: "10 mins from Eiffel Tower",
//           best_time_to_visit: "Night with lights",
//         },
//       ],
//       meals: ["Breakfast at hotel", "Lunch at local café", "Dinner cruise"],
//       notes: "Wear comfortable shoes for walking.",
//       total_estimated_cost: "$250",
//     },
//   ],
// };

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

function Iternary() {
     
//   const data = [ 

//     {
//       title: "Recommended Hotels",
//       content: (
//        <div>
       
//            {Holiday_data?.hotels.map((hotel,index)=>(
//               <div key={index}>
//                 <Image src={HotelImage1} width={400} height={400} alt='place-image'/>
//                 <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
//                 <h2 className='text-gray-500'>{hotel.hotel_address}</h2>
//                 <p className='flex gap-2 text-green-500'>  <Wallet/>
//                     {hotel.price_per_night}</p>
//                 <p className='text-yellow-500 flex gap-2'>
//                     <Star/>
//                     {hotel.rating}</p>    
//                </div> 
//            ))}
//        </div>
//       ),
//     },
   
   
//   ];
  
//     const data = [
//   {
//     title: "Recommended Hotels",
//     content: (
//       <div>
//         {Holiday_data?.hotels.map((hotel, index) => (
//           <div key={index}>
//             <Image src="/HotelImage1.jpg" width={400} height={400} alt="place-image" />
//             {/* <h2 className="font-semibold text-lg">{hotel?.hotel_name}</h2> */}
//             <h2 className="text-gray-500">{hotel.hotel_address}</h2>
//             <p className="flex gap-2 text-green-500">
//               <Wallet />
//               {hotel.price_per_night}
//             </p>
//             <p className="text-yellow-500 flex gap-2">
//               <Star />
//               {hotel.rating}
//             </p>
//           </div>
//         ))}
//       </div>
     
//     ),
//   },
//   {
//     title: "Itinerary",
//     content: (
//       <div>
//         {Holiday_data?.itinerary.map((day, idx) => (
//           <div key={idx} className="border p-2 rounded-md my-2">
//             <h3 className="font-bold">Day {day.day_number}</h3>
//             <h4 className="text-blue-600">{day.hotel.hotel_name}</h4>
//             <ul className="list-disc pl-5">
//               {day.activities.map((activity, i) => (
//                 <li key={i}>
//                   <p className="font-semibold">{activity.activity_name}</p>
//                   <p className="text-sm text-gray-500">{activity.desc} </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     ),
//   },
// ];

//   const getGooglePlaceData=async()=>{
//   const result=await axios.post('/api/google-place-detail',{
//     placeName:Holiday_data.hotels?.hotel_name,

//   })
// }


//@ts-ignore

const {TripDetailInfo}=useTripDetail();
// const [tripdata,setTripdata]= useState<HolidayInfo | null>(null)
// console.log(tripdata,"hey i from iternary");
console.log("hey i am from iternary😎:" );
console.log("hey i am from TripDetailInfo....!!!!:::",TripDetailInfo);



const data = TripDetailInfo?[
  {
    title: "Recommended Hotels",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TripDetailInfo?.hotels.map((hotel, index) => (
          // <div key={index} className="flex flex-col gap-1 border rounded-lg shadow p-3">
          //   <Image
          //     src={hotel.hotel_img_url}
          //     width={400}
          //     height={300}
          //     alt="hotel-image"
          //     className="rounded-lg  object-cover mb-2"
          //   />
          //   <h2 className="font-semibold text-lg">{hotel?.hotel_name}</h2>
          //   <h3 className="text-gray-500">{hotel.hotel_address}</h3>
          //   <p className="flex items-center gap-2 text-green-500">
          //     <Wallet size={16} />
          //     {hotel.price_per_night}
          //   </p>
          //   <p className="text-yellow-500 flex items-center gap-2">
          //     <Star size={16} />
          //     {hotel.rating}
          //   </p>
          //   <Link href={"https://www.google.com/maps/search/?api=1&query="+hotel.hotel_address} target='_blank'>
          //   <Button variant={'outline'} className='mt-2 w-full'>view</Button>
          //   </Link>
          // </div>
           <div key={index}>
               <HotelCarditem hotel={hotel} />
           </div>
          
         
          
        ))}
      </div>
    ),
  },
  ...TripDetailInfo?.itinerary.map((day, index) => ({
    title: `Day ${index + 1}`,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {day.places.map((place: place, i: React.Key | null | undefined) => (
          <div key={i} className="border rounded-lg p-4 shadow-sm">
           
            {/* <Image
              src={activity.activity_img_url}
              width={400}
              height={300}
              alt="activity-image"
              className="rounded-lg"
            />
            <h2 className="font-semibold text-lg">{activity.activity_name}</h2>
            <p className="text-gray-500">{activity.activity_address}</p>
            <h2 className='flex gap-2 text-blue-600'><Ticket/> {activity.price}</h2>
            <p className='flex text-orange-400 gap-2'><Clock/>{activity.time_to_travel}</p>
             <p className=' text-gray-700 font-bold py-2'>  Best Time to visit : <span className='text-primary'>{activity.best_time_to_visit}</span></p>
             <Link href={"https://www.google.com/maps/search/?api=1&query="+activity.activity_address} target='_blank'>
             <Button className='w-full mt-2' variant={'outline'} size={'sm'}> View <ExternalLink/> </Button>
             </Link> */}

             <PlaceCarditem activity={place}/>
          </div>
        ))}
      </div>
    ),
  })),
]:[];




  return (
    <div className='relative p-4 rounded-lg shadow-lg overflow-auto h-[83vh] bg-white'> 
    
        <Timeline data={data}  tripData={TripDetailInfo} />
    </div>
  )
}

export default Iternary   