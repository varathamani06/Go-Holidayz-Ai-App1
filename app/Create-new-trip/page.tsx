"use client";

import React, { useState } from 'react'
import ChatBox from './_components/ChatBox'
import Iternary from './_components/Iternary'
import GlobalMap from './_components/GlobalMap'
import { Button } from '@/components/ui/button';
import { Globe2, Plane } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function CreateNewTrip() {
  const [activeIndex,setActiveIndex]=useState(1)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <div>
           <ChatBox/>
        </div>

        <div className='col-span-2 relative'>
          {
            activeIndex===0?<>
            <Iternary />
            </>:
            <><GlobalMap/>

            </>
          }

          <Tooltip>
  <TooltipTrigger className='absolute bottom-10 left-[50%] rounded-2xl'>
    <Button className='bg-black  hover:bg-gray-700'
   onClick={()=>{
          setActiveIndex(activeIndex==0?1:0)
        }}
        size={'lg'}  >Click it{activeIndex==0?<Plane/>:<Globe2/>} </Button></TooltipTrigger>
  <TooltipContent>
          Switch Between Map and Trip
  </TooltipContent>
</Tooltip>
            
        
        </div>

    </div>
  )
}

export default CreateNewTrip