"use client";

import React ,{useEffect, useState,useContext} from 'react'
import Headers from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailsContext } from '@/context/UserDetailsContext';
import { type TripContextType, TripDetailContext } from '@/context/TripDetailContext';
import { HolidayInfo } from './Create-new-trip/_components/ChatBox';
import Footer from './_components/Footer';


function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CreateUser=useMutation(api.user.CreaeNewUser);

  const [userDetail,setuserDetail]=useState<any>();

  const [TripDetailInfo,setTripDetailInfo]=useState<HolidayInfo | null>(null)

  const {user}=useUser();

  useEffect(()=>{
    user && CreateNewUser();
  },[user])

  const CreateNewUser=async()=>{
    if(user){
      const result=await CreateUser({
      
      
      email:user?.primaryEmailAddress?.emailAddress??'',
      imageUrl:user?.imageUrl,
      name:user?.fullName ??''
    
    });
    setuserDetail(result);
    }
    console.log("Create New User");
    
  }
  return (
    <UserDetailsContext.Provider value={{userDetail,setuserDetail}}>
        <TripDetailContext.Provider value={{TripDetailInfo,setTripDetailInfo}}>
        <div>
         <Headers/>
        {children}
        <Footer/>
    </div>
    </TripDetailContext.Provider>
    </UserDetailsContext.Provider>
    
  )
}

export default Provider

export const useUserDetails = () => {


  
  return useContext(UserDetailsContext);
}

export const useTripDetail = (): TripContextType => useContext(TripDetailContext)!;

// export const useTripDetail=():TripContextType | undefined=> {
//   const context = useContext(TripDetailContext);
//   if (!context) {
//     throw new Error("useTripDetail must be used within a TripDetailContext.Provider");
//   }
//   return context;
// }