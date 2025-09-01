"use client";

import { Button } from '@/components/ui/button'
import { Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Hotel } from './ChatBox'
import axios from 'axios'
import  HotelImage  from "../../../public/HotelImage1.jpg";
type Props={
    hotel:Hotel
}
function HotelCarditem({hotel}:Props) {

//     useEffect(()=>{
//     hotel&&getGooglePlaceData();
//   },[hotel])

//       const getGooglePlaceData=async()=>{
//   const result=await axios.post('/api/google-place-detail',{
//     placeName:hotel.hotel_name
// //    Heritage Madurai
//   });

//   console.log(result?.data);
    
// }

  return (
    <div>

        <div  className="flex flex-col gap-1 border rounded-lg shadow p-3">
                    <Image                      src={HotelImage}
                      width={400}
                      height={300}
                      alt="hotel-image"
                      className="rounded-lg  object-cover mb-2"
                    />
                    <h2 className="font-semibold text-lg">{hotel?.hotel_name}</h2>
                    <h3 className="text-gray-500">{hotel.hotel_address}</h3>
                    <p className="flex items-center gap-2 text-green-500">
                      <Wallet size={16} />
                      {hotel.price_per_night}
                    </p>
                    <p className="text-yellow-500 flex items-center gap-2">
                      <Star size={16} />
                      {hotel.rating}
                    </p>
                    <Link href={"https://www.google.com/maps/search/?api=1&query="+hotel.hotel_address} target='_blank'>
                    <Button variant={'outline'} className='mt-2 w-full'>view</Button>
                    </Link>
                  </div>
    </div>
  )
}

export default HotelCarditem