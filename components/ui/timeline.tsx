// "use client";
// import { Calendar, Users, Wallet } from "lucide-react";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// type HolidayInfo={
//     budget:String,
//     destination:String,
//     duration:String,
//     origin:String,
//     group_size:String
//     hotels:Hotel[],
//     itinerary:DayPlan[];
// }

// type Hotel={
//   hotel_name:string;
//   hotel_address:string;
//   price_per_night:string;
//   hotel_img_url:string;
//   gro_cooridinates:{
//     latitude:number;
//     longitude:number;
//   }
//   rating:number;
//   description:string;

// }

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string; // ticket pricing, e.g., "$20" or "₹500"
//   activity_img_url: string;
//   geo_coordinates: {
//     lat: number;
//     lng: number;
//   };
//   rating: number; // 0–5
//   desc: string; // description of the activity
//   time_to_travel: string; // e.g., "30 mins from city center"
//   best_time_to_visit: string; // e.g., "October to March" or "Morning hours"
// };

// type DayPlan = {
//   day_number: number; // e.g., 1, 2, 3...
//   hotel: Hotel; // where the user stays that day
//   activities: Activity[]; // list of activities planned for the day
//   meals?: string[]; // optional: breakfast/lunch/dinner suggestions
//   notes?: string; // extra info, reminders, packing tips
//   total_estimated_cost?: string; // summary of day's cost
// };

// export const Timeline = ({ data,tripData }: { data: TimelineEntry[],tripData:HolidayInfo}) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-2 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
//           your Holiday trip from <strong className="text-primary">{tripData.origin }</strong>  
//           to <strong className="text-primary">{tripData.destination}</strong>  is Ready
//         </h2>
//         {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
//           I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
//           a timeline of my journey.
//         </p> */}
//         <div className="flex gap-5 items-center">
//           <div className="flex gap-2 items-center">
//             <Calendar />
//             <h2>{tripData.duration}</h2>
//           </div>

//            <div className="flex gap-2 items-center">
//             <Wallet />
//             <h2>{tripData.budget}</h2>
//           </div>

//            <div className="flex gap-2 items-center">
//             <Users />
//             <h2>{tripData.group_size}</h2>
//           </div>
//         </div>
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-10 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[50%]">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 ">
//                 {item.title}
//               </h3>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.content}{" "}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };





// "use client";

// import { Calendar, Users, Wallet, Hotel as HotelIcon, MapPin } from "lucide-react";
// import {
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";

// import React, { useEffect, useRef, useState } from "react";

// import HotelImage1 from "../../public/HotelImage1.jpg";
// import Image, { StaticImageData } from "next/image";
// import { data } from "motion/react-client";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// type HolidayInfo = {
//   budget: string;
//   destination: string;
//   duration: string;
//   origin: string;
//   group_size: string;
//   hotels: Hotel[];
//   itinerary: DayPlan[];
// };

// type Hotel = {
//  hotel_name: string;
//   hotel_address: string;
//   price_per_night: string;
//   hotel_img_url: string | StaticImageData; // ✅ correct
//   gro_cooridinates: {
//     latitude: number;
//     longitude: number;
//   };
//   rating: number;
//   description: string;
// };

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string;
//   activity_img_url: string;
//   geo_coordinates: {
//     lat: number;
//     lng: number;
//   };
//   rating: number;
//   desc: string;
//   time_to_travel: string;
//   best_time_to_visit: string;
// };

// type DayPlan = {
//   day_number: number;
//   hotel: Hotel;
//   activities: Activity[];
//   meals?: string[];
//   notes?: string;
//   total_estimated_cost?: string;
// };

// export const Timeline = ({
//   data,
//   tripData,
// }:{
//   data:TimelineEntry[],
//   tripData: HolidayInfo;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   // Prepare timeline data from itinerary
//   const itineraryData: TimelineEntry[] = tripData.itinerary.map((day) => ({
//     title: `Day ${day.day_number}`,
//     content: (
//       <div className="space-y-6">
//         {/* Hotel Info */}
//         <div className="border rounded-xl p-4 bg-gray-50 dark:bg-neutral-900 shadow-sm">
//           <div className="flex items-center gap-2 mb-2">
//             <HotelIcon className="w-5 h-5 text-purple-500" />
//             <h4 className="font-semibold text-lg">{day.hotel.hotel_name}</h4>
//           </div>
//           <p className="text-sm text-gray-600 dark:text-gray-400">{day.hotel.hotel_address} </p>
          
//           <p className="text-sm">💰 {day.hotel.price_per_night} / night</p>
//           <p className="text-sm">⭐ {day.hotel.rating}/5</p>
          
//           {
//             day.hotel.hotel_img_url==="string"?(<>
//             <img src={day.hotel.hotel_img_url}
//             alt={day.hotel.hotel_name}
//             className="w-full h-40 object-cover rounded-lg mt-2" />
//             </>):(<>
//             <Image  src={day.hotel.hotel_img_url as StaticImageData}
//     alt={day.hotel.hotel_name}
//     width={400}
//     height={200}
//     className="w-full h-40 object-cover rounded-lg mt-2" />
//             </>)
//           }
         
//          </div>

//         {/* Activities */}
//         <div className="space-y-4">
//           {day.activities.map((activity, idx) => (
//   <div
//     key={idx}
//     className="border rounded-xl p-4 bg-white dark:bg-neutral-800 shadow"
//   >
//     <div className="flex items-center gap-2 mb-2">
//       <MapPin className="w-5 h-5 text-blue-500" />
//       <h5 className="font-semibold text-md">{activity.activity_name}</h5>
//     </div>

//     <p className="text-sm text-gray-600 dark:text-gray-400">
//       {activity.activity_address}
//     </p>
//     <p className="text-sm">🎟 {activity.price}</p>
//     <p className="text-sm">⏱ {activity.time_to_travel}</p>
//     <p className="text-sm">🌤 Best time: {activity.best_time_to_visit}</p>
//     <p className="text-sm">⭐ {activity.rating}/5</p>
//     <p className="text-sm mt-1">{activity.desc}</p>

//     {/* Use next/image for better optimization */}
//     <Image
//       src={activity.activity_img_url}
//       alt={activity.activity_name}
//       width={400}
//       height={200}
//       className="w-full h-40 object-cover rounded-lg mt-2"
//     />
//   </div>
// ))}

//           </div>

//         {/* Extra Info */}
//         {day.meals && (
//           <p className="text-sm">🍽 Meals: {day.meals.join(", ")}</p>
//         )}
        
//         {day.notes && <p className="text-sm italic">📝 {day.notes}</p>}
//         {day.total_estimated_cost && (
//           <p className="font-semibold">💵 Total cost: {day.total_estimated_cost}</p>
//         )}
//       </div>
//     ),
//   }));

//   return (
//     <div
//       className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
//           Your Holiday trip from{tripData.origin} helo
//           <strong className="text-primary">{tripData.origin}</strong> to{" "}
//           <strong className="text-primary">{tripData.destination}</strong> is Ready 🎉
//         </h2>

//         <div className="flex gap-5 items-center text-gray-700 dark:text-gray-300">
//           <div className="flex gap-2 items-center">
//             <Calendar /> <h2>{tripData.duration}</h2>
//           </div>
//           <div className="flex gap-2 items-center">
//             <Wallet /> <h2>{tripData.budget}</h2> pkay
//           </div>
//           <div className="flex gap-2 items-center">
//             <Users /> <h2>{tripData.group_size}</h2>
//           </div>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-10 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[30%]">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-400 ">
//                 {item.title}   
//               </h3>
//               <p>hey </p>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-400">
//                 {item.title}
//               </h3>
//               {item.content}
//             </div>
//           </div>
//         ))}

//         {/* Scroll line */}
//         <div
//           style={{ height: height + "px" }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
//           from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//         >
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
//           />
//         </div>
//       </div>
//     </div>
    
//   );
// };


// "use client";
// import { Calendar, Users, Wallet } from "lucide-react";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// type HolidayInfo={
//     budget:String,
//     destination:String,
//     duration:String,
//     origin:String,
//     group_size:String
//     hotels:Hotel[],
//     itinerary:DayPlan[];
// }

// type Hotel={
//   hotel_name:string;
//   hotel_address:string;
//   price_per_night:string;
//   hotel_img_url:string;
//   gro_cooridinates:{
//     latitude:number;
//     longitude:number;
//   }
//   rating:number;
//   description:string;

// }

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string; // ticket pricing, e.g., "$20" or "₹500"
//   activity_img_url: string;
//   geo_coordinates: {
//     lat: number;
//     lng: number;
//   };
//   rating: number; // 0–5
//   desc: string; // description of the activity
//   time_to_travel: string; // e.g., "30 mins from city center"
//   best_time_to_visit: string; // e.g., "October to March" or "Morning hours"
// };

// type DayPlan = {
//   day_number: number; // e.g., 1, 2, 3...
//   hotel: Hotel; // where the user stays that day
//   activities: Activity[]; // list of activities planned for the day
//   meals?: string[]; // optional: breakfast/lunch/dinner suggestions
//   notes?: string; // extra info, reminders, packing tips
//   total_estimated_cost?: string; // summary of day's cost
// };

// export const Timeline = ({ data,tripData }: { data: TimelineEntry[],tripData:HolidayInfo}) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-2 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
//           your Holiday trip from <strong className="text-primary">{tripData.origin }</strong>  
//           to <strong className="text-primary">{tripData.destination}</strong>  is Ready
//         </h2>
//         {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
//           I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
//           a timeline of my journey.
//         </p> */}
//         <div className="flex gap-5 items-center">
//           <div className="flex gap-2 items-center">
//             <Calendar />
//             <h2>{tripData.duration}</h2>
//           </div>

//            <div className="flex gap-2 items-center">
//             <Wallet />
//             <h2>{tripData.budget}</h2>
//           </div>

//            <div className="flex gap-2 items-center">
//             <Users />
//             <h2>{tripData.group_size}</h2>
//           </div>
//         </div>
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-10 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[50%]">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 ">
//                 {item.title}
//               </h3>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.content}{" "}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };





// "use client";

// import { Calendar, Users, Wallet, Hotel as HotelIcon, MapPin } from "lucide-react";
// import {
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";

// import React, { useEffect, useRef, useState } from "react";

// import HotelImage1 from "../../public/HotelImage1.jpg";
// import Image, { StaticImageData } from "next/image";
// import axios from "axios";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// type HolidayInfo = {
//   budget: string;
//   destination: string;
//   duration: string;
//   origin: string;
//   group_size: string;
//   hotels: Hotel[];
//   itinerary: DayPlan[];
// };

// type Hotel = {
//  hotel_name: string;
//   hotel_address: string;
//   price_per_night: string;
//   hotel_img_url: string | StaticImageData; // ✅ correct
//   gro_cooridinates: {
//     latitude: number;
//     longitude: number;
//   };
//   rating: number;
//   description: string;
// };

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string;
//   activity_img_url: string;
//   geo_coordinates: {
//     lat: number;
//     lng: number;
//   };
//   rating: number;
//   desc: string;
//   time_to_travel: string;
//   best_time_to_visit: string;
// };

// type DayPlan = {
//   day_number: number;
//   hotel: Hotel;
//   activities: Activity[];
//   meals?: string[];
//   notes?: string;
//   total_estimated_cost?: string;
// };

// export const Timeline = ({
//   data, 
//   tripData,
// }:{
//   data:TimelineEntry[],
//   tripData: HolidayInfo;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   // Prepare timeline data from itinerary
//   // const data2: TimelineEntry[] = tripData.itinerary.map((day) => (
//   //   {
//   //   title: `Day ${day.day_number}`,
//   //   content: (
//   //   //   <div className="space-y-6">
//   //   //     {/* Hotel Info */}
//   //   //     <div className="border rounded-xl p-4 bg-gray-50 dark:bg-neutral-900 shadow-sm">
//   //   //       <div className="flex items-center gap-2 mb-2">
//   //   //         <HotelIcon className="w-5 h-5 text-purple-500" />
//   //   //         <h4 className="font-semibold text-lg">{day.hotel.hotel_name}</h4>
//   //   //       </div>
//   //   //       <p className="text-sm text-gray-600 dark:text-gray-400">{day.hotel.hotel_address}</p>
//   //   //       <p className="text-sm">💰 {day.hotel.price_per_night} / night</p>
//   //   //       <p className="text-sm">⭐ {day.hotel.rating}/5</p>
          
//   //   //       {
//   //   //         day.hotel.hotel_img_url==="string"?(<>
//   //   //         <img src={day.hotel.hotel_img_url}
//   //   //         alt={day.hotel.hotel_name}
//   //   //         className="w-full h-40 object-cover rounded-lg mt-2" />
//   //   //         </>):(<>
//   //   //         <Image  src={day.hotel.hotel_img_url as StaticImageData}
//   //   // alt={day.hotel.hotel_name}
//   //   // width={400}
//   //   // height={200}
//   //   // className="w-full h-40 object-cover rounded-lg mt-2" />
//   //   //         </>)
//   //   //       }
         
//   //   //      </div>

//   //   //     {/* Activities */}
//   //   //     <div className="space-y-4">
//   //   //       {day.activities.map((activity, idx) => (
//   //   //         <div
//   //   //           key={idx}
//   //   //           className="border rounded-xl p-4 bg-white dark:bg-neutral-800 shadow"
//   //   //         >
//   //   //           <div className="flex items-center gap-2 mb-2">
//   //   //             <MapPin className="w-5 h-5 text-blue-500" />
//   //   //             <h5 className="font-semibold text-md">{activity.activity_name}</h5>
//   //   //           </div>
//   //   //           <p className="text-sm text-gray-600 dark:text-gray-400">{activity.activity_address}</p>
//   //   //           <p className="text-sm">🎟 {activity.price}</p>
//   //   //           <p className="text-sm">⏱ {activity.time_to_travel}</p>
//   //   //           <p className="text-sm">🌤 Best time: {activity.best_time_to_visit}</p>
//   //   //           <p className="text-sm">⭐ {activity.rating}/5</p>
//   //   //           <p className="text-sm mt-1">{activity.desc}</p>
//   //   //            <img
//   //   //             src={activity.activity_img_url}
//   //   //             alt={activity.activity_name}
//   //   //             className="w-full h-40 object-cover rounded-lg mt-2"
//   //   //           />
//   //   //         </div>
//   //   //        ))}  
//   //   //     </div>

//   //   //     {/* Extra Info */}
//   //   //     {day.meals && (
//   //   //       <p className="text-sm">🍽 Meals: {day.meals.join(", ")}</p>
//   //   //     )}
        
//   //   //     {day.notes && <p className="text-sm italic">📝 {day.notes}</p>}
//   //   //     {day.total_estimated_cost && (
//   //   //       <p className="font-semibold">💵 Total cost: {day.total_estimated_cost}</p>
//   //   //     )}
//   //   //   </div>
//   //   <></>
//   //   )  }  
   
     
     
  
//   // ));



//   return (
//     <div
//       className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
//           Your Holiday trip from{" "}
//           <strong className="text-primary">{tripData.origin}</strong> to{" "}
//           <strong className="text-primary">{tripData.destination}</strong> is Ready 🎉
//         </h2>

//         <div className="flex gap-5 items-center text-gray-700 dark:text-gray-300">
//           <div className="flex gap-2 items-center">
//             <Calendar /> <h2>{tripData.duration}</h2>
//           </div>
//           <div className="flex gap-2 items-center">
//             <Wallet /> <h2>{tripData.budget}</h2>
//           </div>
//           <div className="flex gap-2 items-center">
//             <Users /> <h2>{tripData.group_size}</h2>
//           </div>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-10 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[30%]">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-400 ">
//                 {item.title}  
//               </h3>
              
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-400">
//                 {item.title}
                
//               </h3>
//               {item.content} 
//             </div>
//           </div>
//         ))}

//         {/* Scroll line */}
//         <div
//           style={{ height: height + "px" }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
//           from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//         >
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };




// ---------------------------------------------------------------------





// "use client";

// import React from "react";
// import { Calendar, Users, Wallet } from "lucide-react";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";
// import Image, { StaticImageData } from 'next/image'
// import HotelWaitingImage from "../../public/WaitingHotel.jpg"
// import { Loader2 } from "lucide-react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }


// type Hotel = {
//   hotel_name: string;
//   hotel_address: string;
//   price_per_night: string;
//   hotel_img_url: string |StaticImageData;
//   rating: number;
//   description: string;
// };

// type Place = {
//   activity_name: string;
//   activity_address: string;
//   price: string;
//   activity_img_url: string | StaticImageData;
//   rating: number;
//   desc: string;
//   time_to_travel: string;
//   best_time_to_visit: string;
// };

// type DayPlan = {
//   day_number: number;
//   hotel: Hotel;
//   activities: Place[];
//   meals?: string[];
//   notes?: string;
//   total_estimated_cost?: string;
// };

// export type HolidayInfo = {
//   budget: string;
//   destination: string;
//   duration: string;
//   origin: string;
//   group_size: string;
//   hotels: any[];
//   itinerary: DayPlan[];
//   // itinerary: { day: string; activities: string[] }[];
// };

// type TimelineProps = {
//   data: TimelineEntry[];
//   tripData: HolidayInfo; //  optional if you want
// };

// export const Timeline = ({
//   data,
//   tripData,
// }:TimelineProps) => {
//   const ref = React.useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 10%", "start 90%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
//   console.log("tripdata",tripData);
  

//   return (
//     <div
//       className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
//       ref={ref}
//     >
//       <div className="max-w-7xl mx-auto w-full relative pb-20">
//         <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
//           Your Holiday Summary
//         </h2>
//         <div className="flex justify-center  mb-3">
//           <Calendar className="h-10 w-10 text-primary mb-2 mx-4" />
//           <Users className="h-10 w-10 text-primary mb-2 mx-4" />
//            <Wallet className="h-10 w-10 text-primary mb-2 mx-4" />
//         </div>

//         {/* ✅ Prevent crash if tripData is null */}
//         {tripData ? (
//           <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl  text-left lg:text-center lg:mx-auto block lg:my-4">
//             Your Holiday trip from{" "}
//             <strong className="text-primary">{tripData.origin}</strong> to{" "}
//             <strong className="text-primary">{tripData.destination}</strong> is
//             Ready 🎉
//           </h2>
//         ) : (
//          <div className="flex flex-col items-center justify-center min-h-[300px]">
//            <p className="text-gray-800 font-bold text-center md:text-lg bg-gray-100 rounded-xl p-3 shadow-sm">
//             Hey 👋 Chat with our <span className="text-blue-600">Holidayz Buddy AI😎</span> — it will show your holiday trip plan here!
//           </p>

//   {/* Text + Spinner on one line */}
//   <div className="flex items-center gap-3 my-4">
    
//     <h2 className="text-lg md:text-4xl text-gray-500 text-center">
//       Loading trip details
//     </h2>
  
//     <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
//   </div>

//   {/* Static waiting image */}
//   <Image
//     src={HotelWaitingImage}
//     alt="Waiting for trip details"
//     width={400}
//     height={250}
//     className="rounded-lg shadow-md mt-4"
//   />
// </div>

         
//         )}

//         {/* Trip Info Summary */}
//         {tripData && (
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center">
//             <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
//               <Calendar className="h-10 w-10 text-primary mb-2" />
//               <p className="text-lg font-semibold text-black dark:text-white">
//                 {tripData.duration}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Duration
//               </p>
//             </div>

//             <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
//               <Users className="h-10 w-10 text-primary mb-2" />
//               <p className="text-lg font-semibold text-black dark:text-white">
//                 {tripData.group_size} People
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Group</p>
//             </div>

//             <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
//               <Wallet className="h-10 w-10 text-primary mb-2" />
//               <p className="text-lg font-semibold text-black dark:text-white">
//                 {tripData.budget}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
//             </div>
//           </div>
//         )}

//         {/* Timeline */}
//         <div className="relative w-full">
//           <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200 dark:bg-neutral-800" />
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-px bg-gradient-to-t from-transparent via-primary to-transparent"
//           />

//           {data.map((item, index) => (
//             // <div
//             //   key={index}
//             //   className="flex justify-start md:justify-between items-center w-full mb-12"
//             // >
//             //   {/* Left side */}
//             //   <div className="hidden md:flex w-5/12 justify-end pr-8">
//             //     {index % 2 === 0 && (
//             //       <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md">
//             //         <h3 className="text-lg font-bold text-black dark:text-white">
//             //           {item.title}
//             //         </h3>
//             //         <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
//             //           {item.content}
//             //         </div>
//             //       </div>
//             //     )}
//             //   </div>

//             //   {/* Center Dot */}
//             //   <div className="z-20 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-md">
//             //     {index + 1}
//             //   </div>

//             //   {/* Right side */}
//             //   <div className="w-10/12 md:w-5/12 pl-8 md:pl-8">
//             //     {index % 2 !== 0 && (
//             //       <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md">
//             //         <h3 className="text-lg font-bold text-black dark:text-white">
//             //           {item.title}
//             //         </h3>
//             //         <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
//             //           {item.content}
//             //         </div>
//             //       </div>
//             //     )}
//             //   </div>
//             // </div>


//              <div
//     key={index}
//     className="flex flex-col md:flex-row justify-start md:justify-between items-center w-full mb-12"
//   >
//     {/* Mobile + Desktop Left side */}
//     <div className="w-full md:w-5/12 md:justify-end md:pr-8">
//       {index % 2 === 0 ? (
//         <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md">
//           <h3 className="text-lg font-bold text-black dark:text-white">
//             {item.title}
//           </h3>
//           <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
//             {item.content}
//           </div>
//         </div>
//       ) : null}
//     </div>

//   {/* Mobile Dot (above card) */}
// {/* <div className="flex md:hidden items-center mb-2">
//   <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shadow-md">
//     {index + 1}
//   </div>
// </div> */}

// {/* Desktop Dot (center timeline) */}
// <div className="hidden md:flex z-20 items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-md my-0">
//   {index + 1}
// </div>

//     {/* Desktop Right side */}
//     <div className="w-full md:w-5/12 md:pl-8">
//       {index % 2 !== 0 ? (
//         <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md">
//           <h3 className="text-lg font-bold text-black dark:text-white">
//             {item.title}
//           </h3>
//           <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
//             {item.content}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   </div>
//           ))}
//         </div>
//       </div>
//     </div>



//   );
// };


"use client";

import React from "react";
import { Calendar, Users, Wallet } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import Image, { StaticImageData } from "next/image";
import HotelWaitingImage from "../../public/WaitingHotel.jpg";
import { Loader2 } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_img_url: string | StaticImageData;
  rating: number;
  description: string;
};

type Place = {
  activity_name: string;
  activity_address: string;
  price: string;
  activity_img_url: string | StaticImageData;
  rating: number;
  desc: string;
  time_to_travel: string;
  best_time_to_visit: string;
};

type ItineraryDay = {
  day_number: number;
  hotel: Hotel;
  activities: Place[];
  meals?: string[];
  notes?: string;
  total_estimated_cost?: string;
};

export type HolidayInfo = {
  budget: string;
  destination: string;
  duration: string;
  origin: string;
  group_size: string;
  hotels: any[];
  itinerary: ItineraryDay[];
};

type TimelineProps = {
  data: TimelineEntry[];
  tripData?: HolidayInfo |null ;
};

export const Timeline = ({ data, tripData }: TimelineProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "start 90%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
   if (!tripData) return null;
  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full relative pb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          Your Holiday Summary
        </h2>

        {tripData ? (
          <>
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-left lg:text-center lg:mx-auto block lg:my-4">
              Your Holiday trip from
              <strong className="text-primary">{` ${tripData.origin} `}</strong>
              to
              <strong className="text-primary">{` ${tripData.destination} `}</strong>
              is Ready 🎉
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center">
              <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <p className="text-lg font-semibold text-black dark:text-white">
                  {tripData.duration}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Duration
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                <Users className="h-10 w-10 text-primary mb-2" />
                <p className="text-lg font-semibold text-black dark:text-white">
                  {tripData.group_size} People
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Group
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                <Wallet className="h-10 w-10 text-primary mb-2" />
                <p className="text-lg font-semibold text-black dark:text-white">
                  {tripData.budget}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Budget
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-gray-800 font-bold text-center md:text-lg bg-gray-100 rounded-xl p-3 shadow-sm">
              Hey 👋 Chat with our
              <span className="text-blue-600"> Holidayz Buddy AI😎 </span>— it
              will show your holiday trip plan here!
            </p>
            <div className="flex items-center gap-3 my-4">
              <h2 className="text-lg md:text-4xl text-gray-500 text-center">
                Loading trip details
              </h2>
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <Image
              src={HotelWaitingImage}
              alt="Waiting for trip details"
              width={400}
              height={250}
              className="rounded-lg shadow-md mt-4"
            />
          </div>
        )}

        <div className="relative w-full">
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200 dark:bg-neutral-800" />
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-px bg-gradient-to-t from-transparent via-primary to-transparent"
          />

          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-start md:justify-between items-center w-full mb-12">
              <div className="w-full md:w-5/12 md:justify-end md:pr-8">
                {index % 2 === 0 && (
                  <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md w-full">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
              <div className="hidden md:flex z-20 items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-md my-0">
                {index + 1}
              </div>
              <div className="w-full md:w-5/12 md:pl-8">
                {index % 2 !== 0 && (
                  <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-lg max-w-md w-full">
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// "use client";

// import React, { useRef } from "react";
// import { Calendar, Users, Wallet, Hotel as HotelIcon, MapPin, Loader2 } from "lucide-react";
// import { useScroll, useTransform, motion } from "motion/react";
// import Image, { StaticImageData } from "next/image";
// import HotelWaitingImage from "../../public/WaitingHotel.jpg";
// // import {HolidayInfo} from "@/types/trip"

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// type Hotel = {
//   hotel_name: string;
//   hotel_address: string;
//   price_per_night: string;
//   hotel_img_url: string | StaticImageData;
//   rating: number;
//   description: string;
// };

// type Activity = {
//   activity_name: string;
//   activity_address: string;
//   price: string;
//   activity_img_url: string | StaticImageData;
//   rating: number;
//   desc: string;
//   time_to_travel: string;
//   best_time_to_visit: string;
// };

// type ItineraryDay = {
//   day_number: number;
//   hotel: Hotel;
//   activities: Activity[];
//   meals?: string[];
//   notes?: string;
//   total_estimated_cost?: string;
// };

// export type HolidayInfo = {
//   destination: string;
//   duration: string;
//   origin: string;
//   budget: string;      // ✅ FIXED: use string not String
//   group_size: string;  // ✅ FIXED
//   hotels: Hotel[];
//   itinerary: ItineraryDay[];
// };



// export type place = {
//   place_name: string;
//   place_address: string;
//   ticket_pricing: string; // ticket pricing, e.g., "$20" or "₹500"
//   activity_img_url: string | StaticImageData;
//   geo_coordinates: {
//     lat: number;
//     lng: number;
//   };
//   rating: number; // 0–5
//   desc: string; // description of the activity
//   time_to_travel: string; // e.g., "30 mins from city center"
//   best_time_to_visit: string; // e.g., "October to March" or "Morning hours"
// };

// type TimelineProps = {
//   data: TimelineEntry[];
//   tripData?: HolidayInfo;
// };

// export const Timeline: React.FC<TimelineProps> = ({ data, tripData }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 10%", "start 90%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

//   return (
//     <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={ref}>
//       {/* Header */}
//       <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
//         <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white mb-6">
//           Your Holiday Trip from <span className="text-primary">{tripData?.origin}</span> to{" "}
//           <span className="text-primary">{tripData?.destination}</span> 🎉
//         </h2>

//         <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
//           <div className="flex gap-2 items-center">
//             <Calendar /> <span>{tripData?.duration}</span>
//           </div>
//           <div className="flex gap-2 items-center">
//             <Wallet /> <span>{tripData?.budget}</span>
//           </div>
//           <div className="flex gap-2 items-center">
//             <Users /> <span>{tripData?.group_size}</span>
//           </div>
//         </div>
//       </div>

//       {/* Itinerary Timeline */}
//       <div className="relative max-w-7xl mx-auto pb-20">
//         {tripData?.itinerary.map((day, index) => (
//           <div key={index} className="flex justify-start pt-10 md:gap-10">
//             {/* Timeline Label */}
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[30%]">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-600 dark:text-neutral-400">
//                 Day {day.day_number}
//               </h3>
//             </div>

//             {/* Timeline Content */}
//             <div className="relative pl-20 pr-4 md:pl-4 w-full space-y-6">
//               <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-400">
//                 Day {day.day_number}
//               </h3>

//               {/* Hotel Info */}
//               <div className="border rounded-xl p-4 bg-gray-50 dark:bg-neutral-900 shadow-sm">
//                 <div className="flex items-center gap-2 mb-2">
//                   <HotelIcon className="w-5 h-5 text-purple-500" />
//                   <h4 className="font-semibold text-lg">{day.hotel.hotel_name}</h4>
//                 </div>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{day.hotel.hotel_address}</p>
//                 <p className="text-sm">💰 {day.hotel.price_per_night} / night</p>
//                 <p className="text-sm">⭐ {day.hotel.rating}/5</p>

//                 {/* Hotel Image with fallback + loader */}
//                 <div className="relative w-full h-40 mt-2">
//                   <Image
//                     src={day.hotel.hotel_img_url || HotelWaitingImage}
//                     alt={day.hotel.hotel_name}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                   {!day.hotel.hotel_img_url && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
//                       <Loader2 className="animate-spin text-white w-6 h-6" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Activities */}
//               <div className="space-y-4">
//                 {day.activities.map((activity, idx) => (
//                   <div
//                     key={idx}
//                     className="border rounded-xl p-4 bg-white dark:bg-neutral-800 shadow"
//                   >
//                     <div className="flex items-center gap-2 mb-2">
//                       <MapPin className="w-5 h-5 text-blue-500" />
//                       <h5 className="font-semibold text-md">{activity.activity_name}</h5>
//                     </div>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {activity.activity_address}
//                     </p>
//                     <p className="text-sm">🎟 {activity.price}</p>
//                     <p className="text-sm">⏱ {activity.time_to_travel}</p>
//                     <p className="text-sm">🌤 Best time: {activity.best_time_to_visit}</p>
//                     <p className="text-sm">⭐ {activity.rating}/5</p>
//                     <p className="text-sm mt-1">{activity.desc}</p>

//                     {/* Activity Image with fallback + loader */}
//                     <div className="relative w-full h-40 mt-2">
//                       <Image
//                         src={activity.activity_img_url || HotelWaitingImage}
//                         alt={activity.activity_name}
//                         fill
//                         className="object-cover rounded-lg"
//                       />
//                       {!activity.activity_img_url && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
//                           <Loader2 className="animate-spin text-white w-6 h-6" />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Extras */}
//               {day.meals && <p className="text-sm">🍽 Meals: {day.meals.join(", ")}</p>}
//               {day.notes && <p className="text-sm italic">📝 {day.notes}</p>}
//               {day.total_estimated_cost && (
//                 <p className="font-semibold">💵 Total cost: {day.total_estimated_cost}</p>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Scroll Line */}
//         <div
//           style={{ height: "100%" }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
//           bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] 
//           via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//         >
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;









// ----------------------------------------------------

// "use client";
// import React from "react";
// // import {
// //   useScroll,
// //   useTransform,
// //   motion,
// // } from "motion/react";

// interface TimelineProps {
//   data: {
//     title: string;
//     content: React.ReactNode;
//   }[];
// }

// export function Timeline({ data }: TimelineProps) {
//   return (
//     <div className="relative border-l-2 border-gray-300 pl-6">
//       {data.map((item, index) => (
//         <div key={index} className="mb-12 relative">
//           {/* Dot on the line */}
//           <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>

//           {/* Title */}
//           <h2 className="text-xl font-semibold text-gray-800">
//             {item.title}
//           </h2>

//           {/* Content */}
//           <div className="mt-4">{item.content}</div>
//         </div>
//       ))}
//         {/* Scroll line */}
        
//     </div>
//   );
// }
