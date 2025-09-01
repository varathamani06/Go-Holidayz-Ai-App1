"use client";

import { Button } from '@/components/ui/button'
import { Clock, ExternalLink, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { place } from './ChatBox'
import Hotel2 from "../../../public/Hotel2.jpg"
import Hotel3 from "../../../public/Hotel3.jpg"
import Hotel4 from "../../../public/Hotel4.jpg"
import Hotel5 from "../../../public/Hotel5.jpg"
import Hotel6 from "../../../public/Hotel6.jpg"


type Props={
    activity:place
}

const HotelIMages=[Hotel2,Hotel3,Hotel4,Hotel5,Hotel6];


function PlaceCarditem({activity}:Props) {
  const randomImages=HotelIMages[Math.floor(Math.random()*HotelIMages.length)]
  return (
    <div>
        <Image
              src={randomImages}
              width={400}
              height={300}
              alt="activity-image"
              className="rounded-lg"
            />
            <h2 className="font-semibold text-lg">{activity.place_name}</h2>
            <p className="text-gray-500">{activity.place_address}</p>
            <h2 className='flex gap-2 text-blue-600'><Ticket/> {activity.ticket_pricing}</h2>
            <p className='flex text-orange-400 gap-2'><Clock/>{activity.time_to_travel}</p>
             <p className=' text-gray-700 font-bold py-2'>  Best Time to visit : <span className='text-primary'>{activity.best_time_to_visit}</span></p>
             <Link href={"https://www.google.com/maps/search/?api=1&query="+activity.place_address} target='_blank'>
             <Button className='w-full mt-2' variant={'outline'} size={'sm'}> View <ExternalLink/> </Button>
             </Link>
    </div>
  )
}

export default PlaceCarditem