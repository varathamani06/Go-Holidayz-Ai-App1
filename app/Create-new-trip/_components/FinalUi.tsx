import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { toast } from "sonner";

function FinalUi({viewHoliday,disable}:any) {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-6 p-6 bg-white rounded'>
        <Globe2 className='text-primary text-4xl animate-bounce'/>
        <h2 className='mt-3 text-lg font-semibold text-primary'>
          planning your Dream Holiday.... 
        </h2>
        <p className='text-gray-500 text-sm text-center mt-1'>
          Gathering best ......
        </p>
        <Link href={"/my-trips"}>
        <Button className='mt-2 w-full' disabled={disable} onClick={viewHoliday}>View your Holiday plan</Button>
        </Link>
      </div>
        <h2 className='text-2xl font-bold mb-4'>And , thank you for choosing us ☺️🤗 and please Click Mytrip Button it shows your trip </h2>
        
    </div>
  )
}

export default FinalUi