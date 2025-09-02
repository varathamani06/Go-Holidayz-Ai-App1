
"use client";

import React, { useEffect,useRef } from 'react'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';
import { Globe2, Landmark, Plane } from 'lucide-react';

import GroupSizeUi from './GroupSizeUi';
import BudgetUi from './BudgetUi';
import HolidayDuration from './HolidayDuration';
import FinalUi from './FinalUi';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTripDetail, useUserDetails } from '@/app/provider';

import { v4 as uuidv4 } from 'uuid';
import { StaticImageData } from 'next/image';
import Iternary from './Iternary';

import { HolidayInfo } from "@/types/trip";

import { toast } from 'sonner'

export type message={
    role:string,
    content:string,
    ui?:string
}

// export type HolidayInfo={
//     budget:string;
//     destination:string;
//     duration:string;
//     origin:string;
//     group_size:string;
//     hotels:Hotel[];
//     itinerary:ItineraryDay[];
//     activities: place[]; 
// }

export type Hotel={
  hotel_name:string;
  hotel_address:string;
  price_per_night:string;
  hotel_img_url:string | StaticImageData;
  gro_cooridinates:{
    latitude:number;
    longitude:number;
  }
  rating:number;
  description:string;

}

export type place = {
  place_name: string;
  place_address: string;
  ticket_pricing: string; // ticket pricing, e.g., "$20" or "₹500"
  activity_img_url: string | StaticImageData;
  geo_coordinates: {
    lat: number;
    lng: number;
  };
  rating: number; // 0–5
  desc: string; // description of the activity
  time_to_travel: string; // e.g., "30 mins from city center"
  best_time_to_visit: string; // e.g., "October to March" or "Morning hours"
};

export type ItineraryDay = {
  places: any;
  day_number: number; // e.g., 1, 2, 3...
  hotel: Hotel; // where the user stays that day
  activities: place[]; // list of activities planned for the day
  meals?: string[]; // optional: breakfast/lunch/dinner suggestions
  notes?: string; // extra info, reminders, packing tips
  total_estimated_cost?: string; // summary of day's cost
};


const Suggestion = [
    {
        title:"Create a New trip",
        icon:<Globe2 className='text-purple-600 h-5 w-5 ' />
    },
     {
        title:"Inspire me where to go",
        icon:<Plane className='text-blue-400 h-5 w-5' />
    },
     {
        title:"Discover new places",
        icon:<Landmark className='text-green-600 h-5 w-5' />
    },
     {
        title:"Advanture Destinations",
        icon:<Globe2 className='text-yellow-600 h-5 w-5' />
    }
];

function ChatBox() {


    const [messages,setMessages] =useState<message[]>([]); 
    const [userInput,setUserInput]=useState<string>('');
    const [isFinal,setFinal]=useState(false);
    const [loading,setLoading]=useState(false);
    const [holidayDetail,setHolidayDetail]=useState<HolidayInfo>();
    const [resultAi,setresultAi]=useState<any>(null);
    // const {setTripDetailInfo}=useTripDetail();
    const  {setTripDetailInfo } = useTripDetail();
    // const [saveTripDetail,setSaveTripDetail]=useMutation(api.holidayDetails.CreateHolidayDtetails); 
   
   const saveTripDetail = useMutation(api.holidayDetails.createHolidayDetails);

    const { userDetail } = useUserDetails(); 

    
    const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatRef.current?.scrollIntoView({
     
      behavior: "smooth",
      block: 'end'
    });
  }, [messages]);

    const onSelectOptopn=(title:string)=>{
        console.log("Selected Option:", title);
        setUserInput(title);
        // setMessages((prev:message[])=>[...prev,{title, role:'user', content:title}]);
    }

    const onSend= async()=>{
         if(!userInput.trim()) return;
        
       
        const newMessage:message={
            role:'user',
            content:userInput
        }

        // setMessages((prev:message[])=>[...prev,newMessage]);

        setUserInput('');
        
         // Add a temporary loading message
         setMessages((prev) => [
             ...prev,
             newMessage,
             { role: 'assistant', content: '⏳ Holiday Buddy is typing... ' }
         ]);

         try{
            const result = await axios.post('api/openAi', {
        messages: [...messages, newMessage],
        isFinal:isFinal
      });

      // Replace the last (loading) message with AI's actual reply
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: result?.data?.resp || ' No response received.',
          ui: result?.data?.ui || ''
        };
        
         if (updated[updated.length - 1].content === "⚠️ No response received.") {
    toast.error("⚠️ No response received. Please try again.");
  }
        setresultAi(result);
        return updated;
      });

      console.log('Response from AI:', result.data);
         }
         catch(error){
           setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: '⚠️ Oops! Something went wrong.',
            ui: ''
        };
        
        return updated;
      });
       toast.error("⚠️ Oops! Something went wrong. Please try again. Refresh the page", {
    position: "top-left",
    
  });
         }

    //    const result=await axios.post('api/openAi',{
    //     messages:[...messages,newMessage]
    //    });

    //    setMessages((prev:message[])=>[...prev,{
    //     role:'assistant',
    //     content:result?.data?.resp
    //    }]);

    //    console.log("Response from AI:", result.data);
       
    }

    const RenderGenerateUi=(ui:string)=>{
        switch(ui){
            case 'budget':
                return <BudgetUi onSelectOptopn={(value:string)=>{
                    setUserInput(value);
                    onSend();
                }}/>;
            case 'groupSize':
                return <GroupSizeUi  onSelectOptopn={(value:string)=>{
                    setUserInput(value); 
                    onSend();
                }}/>;
            case 'tripDuration':
                return <HolidayDuration  onSelectionOption={(value:string)=>{setUserInput(value);onSend();}}/>;   
            case 'final':
                return <FinalUi  viewHoliday={()=>{
                    disable:!holidayDetail
                }}/>;
        }
        return null;
    }

    useEffect(()=>{
        const lastMsg=messages[messages.length-1];
        if(lastMsg?.ui=="final"){
         setFinal(true);

         setUserInput('thank you and Please Go check Ur MyTrip Button');  
         toast.success("🎉 Your holiday plan is ready!, please check out Your Mytrip ",{
          position:"top-left"
         })
        //  onSend();
        }
    },[messages]);

    useEffect(()=>{
      if(isFinal&&userInput){
        onSend();
      }
    },[isFinal])

     useEffect(() => {
    const saveDetails = async () => {
      if (isFinal && resultAi) {
        setHolidayDetail(resultAi?.data?.Holiday_plan);
        setTripDetailInfo(resultAi?.data?.Holiday_plan);


        const MyHolidayData=resultAi?.data?.Holiday_plan;
        console.log("My Holiday-data",MyHolidayData);
        if(MyHolidayData){
          console.log("i am in if contion !!");
          
        <Iternary />
        }




        console.log("resultAi?.data?.Holiday_plan : ",resultAi?.data?.Holiday_plan);
        
        
        const tripId=uuidv4();
         await saveTripDetail({
          tripId:tripId,
          holidayDetails:resultAi?.data?.Holiday_plan,
          uid: userDetail?._id || ""
        });
      }
    };
    saveDetails();
  }, [isFinal, resultAi,setTripDetailInfo]);

    // if(isFinal){
    //   const result=resultAi
    //   setHolidayDetail(result?.data?.Holiday_plan)
    // }
    

  return (
    <div className='h-[85vh] flex flex-col '>
        
    <section className='flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-md '>
        
         <div className="flex flex-col items-center mb-4 text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
           💬 Chat with our
            <span className="text-2xl sm:text-3xl text-blue-900 font-bold">
            Holiday Buddy AI 🏖️✈️
            </span>
            </h2>

            <p className="mt-2 text-gray-600 max-w-md">
            Your personal travel companion 🌍✨ — helping you plan unforgettable trips,  
            from dreamy beach escapes 🏖️ to thrilling mountain adventures 🏔️.  
            Let’s start crafting your perfect journey!
            </p>

            
           <div className="mt-4 w-full rounded-lg p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {Suggestion.map((item, index) => (

                <div key={index} 
                 onClick={() => onSelectOptopn(Suggestion[index].title)}
                className="flex items-center gap-2 border border-blue-900 rounded-full p-2 cursor-pointer transition-all hover:bg-primary hover:text-white"
                >
                {item.icon}
                <h2 className="text-sm font-medium">{item.title}</h2>
               </div>

              
              ))}
             </div>
</div>
  
            
    </div>
            {messages.map((message:message, index) => (
              message.role === 'user' ? 
              <div className='flex justify-end mt-2' key={index}>
                <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg shadow-md'>
                     {message.content}
                </div>
            </div>
:            
                <div className='flex justify-start mt-2' key={index}>
                <div className={`max-w-lg px-4 py-2 rounded-lg shadow-md text-white ${
                  message.content.includes('typing')
                    ? 'bg-gray-500 italic'
                    : 'bg-gray-700'
                }`}>
                     {message.content}
                     {message.ui && RenderGenerateUi(message.ui)}
                </div>
            </div>
            ))}
            
            
        </section>

        <section>
  <div className="border rounded-2xl p-3 bg-white shadow-sm flex items-end gap-2">
    <Textarea
      placeholder="Create a trip for Paris from New York"
      value={userInput}
      onChange={(event) => {
        setUserInput(event.target.value);

        // Auto-resize logic
        const target = event.target as HTMLTextAreaElement;
        target.style.height = "auto";
        target.style.height = `${target.scrollHeight}px`;
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onSend();
        }
      }}
      className="w-full min-h-[3rem] max-h-40 bg-transparent border-none
                 focus-visible:ring-0 shadow-none resize-none overflow-y-auto"
    />

    <Button
      size="icon"
      className="shrink-0 rounded-full bg-blue-600 text-white hover:bg-blue-700"
      onClick={onSend}
    >
      <Send className="h-4 w-4" />
    </Button>
  </div>
</section>

    </div>
  )
}

export default ChatBox