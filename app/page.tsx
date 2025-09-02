import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_components/hero";
import { PopularCtiyList } from "./_components/PopularCtiyList";
import  GlobalMap  from "./_components/GlobalMap";
import HeroSlideshow from "./_components/FrameMotion";
export default function Home() {
  return (
   
    <main className="flex flex-col items-center">
      <HeroSlideshow/>
      <Hero />
      <PopularCtiyList />

      <section className="mt-16 w-full max-w-7xl px-4 mb-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          🌍 Explore the World
        </h2>
        <GlobalMap />
      </section>

      {/* <GlobalMap/> */}
    </main>
  );
}
