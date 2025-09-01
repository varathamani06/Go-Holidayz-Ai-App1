import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import React from 'react'

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
        <Button className='mt-2 w-full' disabled={disable} onClick={viewHoliday}>View your Holiday plan</Button>

      </div>
        <h2 className='text-2xl font-bold mb-4'>And , thank you for choosing us ☺️🤗</h2>
    </div>
  )
}

export default FinalUi