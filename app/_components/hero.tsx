"use client"

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'

import React,{ useState, useEffect } from 'react'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useUser } from '@clerk/nextjs';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroImage from "../../public/HeroImage.jpeg";
import ImageItem1 from "../../public/ImageItem1.jpeg";
import ImageItem2 from "../../public/ImageItem2.jpeg";
import ImageItem3 from "../../public/ImageItem3.jpeg";
import Hotel2 from "../../public/Hotel2.jpg";

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






function hero() {

    const {user}=useUser();
    const router=useRouter();
    const onSend=()=>{
        if(!user){
            router.push("/sign-in");
            return;
        }
        router.push("/Create-new-trip");
    }

    const [currentIndex, setCurrentIndex] = useState(0);

     // ⏳ Auto change background every 5s


  return (

    <div className='mt-24 md:mt-24 sm:px-6 w-full flex justify-center '>

       



        <div className='max-w-3xl w-full text-center space-y-6'>
             
             {/* Framo motion */}
          

            
           <h1 className='text-xl md:text-5xl font-bold text-gray-800 mt-3'>
            hey, i'm your personal <span className='text-primary'>Holiday Buddy😎🙌</span>
           </h1>
           <p className='text-lg'>Tell me what you need ✈️🏨 Trips? Hotels? 🗺️ Just say the word — I’ll handle it 🤖✨</p>
           <div>
            <div className='border rounded-2xl p-4 relative  bg-white shadow-sm'>
                <Textarea placeholder='Create a trip for Parise from New york' className='w-full h-28 sm:h-28  bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'/>
                <Link href={'/Create-new-trip'}>
                <Button size={'icon'} className='absolute right-6 bottom-6' onClick={()=>onSend()}>
                    <Send className='h-4 w-4'/>
                </Button>
                </Link>
            </div>
           </div>

           <div className='flex gap-5'>
            {Suggestion.map((item, index) => (
                <div key={index} className='text-center flex gap-2 border rounded-full p-2 cursor-pointer  transition-all hover:bg-primary hover:text-white'>
                    {item.icon}
                    <h2 className='text-sm'>{item.title}</h2>
                </div>
            ))}
           </div>

           <div className='flex items-center justify-center flex-col'>
              <h2 className='my-7 mt-14 flex gap-2 text-center'>
                Feeling lost? 🗺️ Need a starting point? 🚀 Let’s guide you <strong>See how its works 🔽</strong><ArrowDown/>
             </h2>
            <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.example.com/dummy-video/"
        thumbnailSrc="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg"
        thumbnailAlt="Dummy Video Thumbnail"
      />
           </div>

           {/* <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam mollitia qui impedit perspiciatis vel, architecto obcaecati neque quod ex eum quas necessitatibus consequuntur, beatae nihil, voluptas suscipit fugit quis consectetur.
           </div> */}
        
        </div>

        
    </div>
  )
}

export default hero





// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Facebook, Instagram, Twitter, Github, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import HeroImage from "../../public/HeroImage.jpeg";
// import ImageItem1 from "../../public/ImageItem1.jpeg";
// import ImageItem2 from "../../public/ImageItem2.jpeg";
// import ImageItem3 from "../../public/ImageItem3.jpeg";

// function Hero() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-8 py-4 absolute top-0 left-0 w-full z-20">
//         <h1 className="text-lg font-bold">LOGOTYPE</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-gray-700 font-medium">
//           <Link href="#">Home</Link>
//           <Link href="#">Explore</Link>
//           <Link href="#">Special Plans</Link>
//           <Link href="#">About Us</Link>
//         </div>

//         {/* Social Icons (Desktop) */}
//         <div className="hidden md:flex gap-4">
//           <Link href="#"><Facebook size={18} className="text-gray-600 hover:text-primary" /></Link>
//           <Link href="#"><Instagram size={18} className="text-gray-600 hover:text-primary" /></Link>
//           <Link href="#"><Twitter size={18} className="text-gray-600 hover:text-primary" /></Link>
//           <Link href="#"><Github size={18} className="text-gray-600 hover:text-primary" /></Link>
//         </div>

//         {/* Hamburger (Mobile) */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 z-20 md:hidden">
//           <Link href="#" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)}>Explore</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)}>Special Plans</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)}>About Us</Link>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <Link href="#"><Facebook size={20} className="text-gray-600 hover:text-primary" /></Link>
//             <Link href="#"><Instagram size={20} className="text-gray-600 hover:text-primary" /></Link>
//             <Link href="#"><Twitter size={20} className="text-gray-600 hover:text-primary" /></Link>
//             <Link href="#"><Github size={20} className="text-gray-600 hover:text-primary" /></Link>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="relative h-[80vh] flex flex-col justify-center items-center text-center">
//         <Image
//           src={HeroImage}
//           alt="travel hero"
//           fill
//           className="object-cover -z-10"
//         />
//         <h1 className="text-6xl md:text-7xl font-bold text-white tracking-widest">
//           TRAVEL
//         </h1>
//         <p className="max-w-lg text-gray-200 mt-4">
//           Vivamus consequat interdum elit porttitor. Integer mattis elementum
//           enim, eu molestie magna tincidunt ut.
//         </p>
//       </div>

//       {/* Blog Section */}
//       <section className="py-12 px-8 bg-white text-center">
//         <h2 className="text-lg font-semibold tracking-wider text-gray-600">
//           THIS WEEK IN OUR BLOG
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6 mt-8">
//           {[
//             { id: "01", img: ImageItem1 },
//             { id: "02", img: ImageItem2 },
//             { id: "03", img: ImageItem3 },
//           ].map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-sm rounded-lg overflow-hidden"
//             >
//               <Image
//                 src={item.img}
//                 alt="blog"
//                 width={400}
//                 height={200}
//                 className="object-cover w-full h-40"
//               />
//               <div className="p-4 text-left">
//                 <h3 className="font-bold text-primary">{item.id}</h3>
//                 <p className="text-sm text-gray-600 mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
//                   tempus tincidunt velit, nec mollis sapien commodo.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero;

