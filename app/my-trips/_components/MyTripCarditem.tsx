import Image from 'next/image'
import React from 'react'
import { Trip } from '../page'
import { ArrowBigRightIcon } from 'lucide-react'

import Hotel2 from "../../../public/Hotel2.jpg"
import Hotel3 from "../../../public/Hotel3.jpg"
import Hotel4 from "../../../public/Hotel4.jpg"
import Hotel5 from "../../../public/Hotel5.jpg"
import Hotel6 from "../../../public/Hotel6.jpg"
import Link from 'next/link'

const HotelIMages = [Hotel2, Hotel3, Hotel4, Hotel5, Hotel6];

type Props = {
  trip: Trip
}

function MyTripCarditem({ trip }: Props) {
  const randomImages = HotelIMages[Math.floor(Math.random() * HotelIMages.length)];

  return (
    <Link href={'/view-trips/' + trip?.tripId} className="p-4 rounded-2xl shadow block">
      {/* Image */}
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px]">
        <Image
          src={randomImages}
          alt={trip.tripId}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-3">
        <h2 className="flex flex-wrap items-center gap-2 font-semibold text-lg md:text-xl">
          {trip?.tripDetail?.destination}
          <ArrowBigRightIcon className="shrink-0" />
          {trip?.tripDetail?.origin}
        </h2>

        <h2 className="mt-1 text-gray-500 text-sm md:text-base">
          {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget
        </h2>
      </div>
    </Link>
  );
}

export default MyTripCarditem
