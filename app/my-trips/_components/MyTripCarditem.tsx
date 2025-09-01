import Image from 'next/image'
import React from 'react'
import { Trip } from '../page'
import Hotelimage1 from "../../../public/HotelImage1.jpg"
import { ArrowBigRightIcon } from 'lucide-react'

import Hotel2 from "../../../public/Hotel2.jpg"
import Hotel3 from "../../../public/Hotel3.jpg"
import Hotel4 from "../../../public/Hotel4.jpg"
import Hotel5 from "../../../public/Hotel5.jpg"
import Hotel6 from "../../../public/Hotel6.jpg"
import Link from 'next/link'

const HotelIMages=[Hotel2,Hotel3,Hotel4,Hotel5,Hotel6];



type Props={
    trip: Trip
}
function MyTripCarditem({trip}:Props) {
    const randomImages=HotelIMages[Math.floor(Math.random()*HotelIMages.length)]
  return (
    <Link href={'/view-trips/'+trip?.tripId} className='p-4 rounded-2xl shadow'>
      <div className='relative w-full h-[50px] sm:h-[150px] md:h-[130px] lg:h-[250px]'>
           <Image src={randomImages} alt={trip.tripId} width={400} height={400} className="rounded-2xl object-cover "/>
      </div>
                       
                        <h2 className="flex gap-2 font-semibold text-xl">{trip?.tripDetail?.destination} <ArrowBigRightIcon/> {trip?.tripDetail?.origin}</h2>
                        <h2 className='mt-2 text-gray-500'>{trip?.tripDetail?.duration} 
                            Trip with 
                            {trip?.tripDetail?.budget} 
                             Budget
                        </h2>
     </Link>
  )
}

export default MyTripCarditem