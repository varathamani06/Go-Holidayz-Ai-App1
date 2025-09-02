"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroImage from "../../public/HeroImage.jpeg";
import ImageItem1 from "../../public/ImageItem1.jpeg";
import ImageItem2 from "../../public/ImageItem2.jpeg";
import ImageItem3 from "../../public/ImageItem3.jpeg";
import Hotel2 from "../../public/Hotel3.jpg";

type Slide = {
  img: StaticImageData | string |null; //  supports both local imports & external URLs
  title: string;
  description: string;
};

const slides = [

 
  {
    img: HeroImage,
    title: "TRAVEL ",
    description:
      "Explore breathtaking destinations around the world with unforgettable experiences.",
  },
  {
    img: Hotel2,
    title: "LUXURY STAYS 🏡",
    description:
      "Find the best hotels and resorts tailored for your dream holidays.",
  },
  {
    img: ImageItem1,
    title: "DISCOVER 🌏",
    description:
      "Travel off the beaten path and discover hidden gems globally.",
  },
  {
    img: ImageItem2,
    title: "ADVENTURE ✈️",
    description:
      "Discover new places, cultures, and adventures with ease and excitement.",
  },
  {
    img: ImageItem3,
    title: "HOLIDAY BUDDY 😎",
    description:
      "Plan your dream holidays with AI — trips, hotels, and experiences all in one.",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[80vh] flex justify-center items-center text-center overflow-hidden w-full rounded-2xl">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].img}
              alt="hero background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="flex flex-col items-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentIndex].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-widest drop-shadow-lg"
          >
            {slides[currentIndex].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentIndex].description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-xl text-gray-200 mt-4 drop-shadow-md"
          >
            {slides[currentIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
