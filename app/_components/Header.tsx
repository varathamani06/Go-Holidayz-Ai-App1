// import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// const menuOptions=[
//     {
//         name:'Home',
//         path:'/'
//     },
//     {
//         name:'Pricing',
//         path:'/pricing'
//     },
//     {
//         name:'Contact us',
//         path:'/contact-us'
//     }
// ]
// function Header() {
//   return (
//     <div className='flex justify-between items-center p-4 bg-white shadow-md'>
        
//         <div className='flex gap-2 items-center'>
//             <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
//             <h2 className='font-bold text'>Ai Trip Planner</h2>
//         </div>

//         <div className='flex gap-8 items-center'>
//             {
//                 menuOptions.map((option, index) => (
//                     <Link href={option.path} key={index}>
//                     <h2 className='text-lg font-semibold text-gray-800 hover:text-primary scale-105 transcition-all   duration-200'>
//                         {option.name}
//                     </h2> 
//                     </Link>
//                     ))
//             }
//         </div>

//         <div>
//             <Button>Get Started</Button>
//         </div>
//     </div>
//   )
// }

// export default Header



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { SignInButton } from "@clerk/nextjs";

// const menuOptions = [
//   { name: "Home", path: "/" },
//   { name: "Pricing", path: "/pricing" },
//   { name: "Contact us", path: "/contact-us" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex gap-2 items-center">
//           <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
//           <h2 className="font-bold text-xl sm:text-2xl">Ai Trip Planner</h2>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-8 items-center">
//           {menuOptions.map((option, index) => (
//             <Link
//               key={index}
//               href={option.path}
//               className="text-lg font-semibold text-gray-800 hover:text-primary transition-all duration-200"
//             >
//               {option.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Get Started Button - Desktop */}
//         <div className="hidden md:block">
//         <SignInButton mode="modal">
//           <Button className="cursor-pointer" onClick={()=>console.log("im cliked")
//           }>Get Started</Button>
//         </SignInButton>
        
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md border-t">
//           <nav className="flex flex-col gap-4 p-4">
//             {menuOptions.map((option, index) => (
//               <Link
//                 key={index}
//                 href={option.path}
//                 className="text-lg font-semibold text-gray-800 hover:text-primary"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {option.name}
//               </Link>
//             ))}
//             <Button className="mt-2">Get Started</Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { useUser,UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import path from "path";



const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/Pricing" },
  { name: "Contact us", path: "/contact-us" },
  {name:"", path:"/my-trips"}
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user}=useUser();
  const path=usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
          <h2 className="font-bold text-xl sm:text-2xl">GO HoliydayZ AI</h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuOptions.map((option, index) => (
            <Link
              key={index}
              href={option.path}
              className="text-lg font-semibold text-gray-800 hover:text-primary transition-all duration-200"
            >
              {option.name}
            </Link>
          ))}
        </nav>

        {/* Get Started Button - Desktop */}
        <div className="hidden md:block">
            {
                user?
                <div className="flex items-center gap-5">
                   {
                    path=="/Create-new-trip"?<div>
                        <Link href="/my-trips" className="mx-3">
                   <Button>My Trip</Button>
                   </Link>
                    </div>:
                    <div>
                    <Link href="/Create-new-trip" className="mx-3">
                   <Button>Create New trip</Button>
                   </Link>
             
                    </div>
                   }   
                   
                    <UserButton/>
                   
                </div>:
                <div>
                      <SignInButton mode="modal">
            <Button
              className="cursor-pointer"
              onClick={() => console.log("Get Started clicked")}
            >
              Get Started
            </Button>
          </SignInButton>
                </div>
            

            }
        
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col gap-4 p-4">
            {menuOptions.map((option, index) => (
              <Link
                key={index}
                href={option.path}
                className="text-lg font-semibold text-gray-800 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {option.name}
              </Link>
            ))}

            {/* Mobile Get Started Button */}
            {/* <SignInButton mode="modal">
              <Button
                className="mt-2 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Button>
            </SignInButton> */}
              {
                user?
                <div>
                  {path=="/Create-new-trip"? <div>
                     <Link href="/my-trips" className="mx-3">
                   <Button>My Trip</Button>
                   </Link>
                  </div>:
                  <div>
                  <Link href="/Create-new-trip" className="mx-3">
                   <Button>Create New trip</Button>
                   </Link>
                    </div>}
                   {/* <Link href="/Create-new-trip" className="mx-3">
                   <Button>Create New trip</Button>
                   </Link> */}

                   < div className="mt-2">
                    <UserButton />
                   </div>
                </div>:
                <div>
                      <SignInButton mode="modal">
            <Button
              className="cursor-pointer"
              onClick={() => console.log("Get Started clicked")}
            >
              Get Started
            </Button>
          </SignInButton>
                </div>
            

            }
          </nav>
        </div>
      )}
    </header>
  );
}



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// // Menu Links
// const menuOptions = [
//   { name: "Home", path: "/" },
//   { name: "Pricing", path: "/pricing" },
//   { name: "Contact us", path: "/contact-us" },
// ];

// // ✅ Safe wrapper for Next/Image that avoids passing invalid props to DOM
// function SafeImage({ blurDataURL, placeholder, ...rest }) {
//   return (
//     <Image
//       {...rest}
//       placeholder={placeholder}
//       blurDataURL={placeholder === "blur" ? blurDataURL : undefined}
//     />
//   );
// }

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        
//         {/* ✅ Logo - no blur needed */}
//         <div className="flex gap-2 items-center">
//           <SafeImage
//             src="/logo.svg"
//             alt="logo"
//             width={40}
//             height={40}
//             priority
//           />
//           <h2 className="font-bold text-xl sm:text-2xl">Ai Trip Planner</h2>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-8 items-center">
//           {menuOptions.map((option) => (
//             <Link
//               key={option.path}
//               href={option.path}
//               className="text-lg font-semibold text-gray-800 hover:text-primary transition-all duration-200"
//             >
//               {option.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Get Started Btn - Desktop */}
//         <div className="hidden md:block">
//           <Button>Get Started</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md border-t">
//           <nav className="flex flex-col gap-4 p-4">
//             {menuOptions.map((option) => (
//               <Link
//                 key={option.path}
//                 href={option.path}
//                 className="text-lg font-semibold text-gray-800 hover:text-primary"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {option.name}
//               </Link>
//             ))}
//             <Button className="mt-2">Get Started</Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

