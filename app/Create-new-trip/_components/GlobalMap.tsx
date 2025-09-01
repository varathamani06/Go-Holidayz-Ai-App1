"use client";

import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useTripDetail } from "@/context/TripDetailContext";

function GlobalMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const { TripDetailInfo } = useTripDetail();
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

    // initialize map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.5, 40], // default
      zoom: 1.7,
      projection: "globe",
    });

    const map = mapRef.current; // easier alias
    const markers: mapboxgl.Marker[] = [];

      map.on("style.load", () => {
      map.setFog({}); // atmosphere 🌫️
    });

    map.on("load", () => {
      TripDetailInfo?.itinerary.forEach((day) => {
        // hotel marker
        // console.log("i am hotel",day);
        
       if (day?.hotel?.gro_cooridinates) {
        
      const hotelMarker = new mapboxgl.Marker({ color: "red" })
        .setLngLat([
          day.hotel.gro_cooridinates.longitude,
          day.hotel.gro_cooridinates.latitude,
        ])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setText(day.hotel.hotel_name ?? "Hotel")
        )
        .addTo(map);

      markers.push(hotelMarker);
    }

        // activities markers
        
       
    day.places.map((act:any,index:number)=>{
        // console.log("my name is ",act);
        
        if(act.geo_coordinates){
           
           const placeMarker = new mapboxgl.Marker({ color: "red" }).setLngLat([act.geo_coordinates.longitude, act.geo_coordinates.latitude]).setPopup(
        new mapboxgl.Popup({ offset: 25 }).setText(act.place_address ?? "Place")
      ) .addTo(mapRef.current!);

    markers.push(placeMarker);

    const coordinates: [number, number] = [
      act.geo_coordinates.longitude,
      act.geo_coordinates.latitude
    ];

    // ✅ Fly to only the first place
    if (index === 0) {
      mapRef.current!.flyTo({
        center: coordinates,
        zoom: 7,
         bearing: 90,   // Rotate east
  pitch: 45,     // Tilt the camera
  speed: 0.8,    // Slower, cinematic
  curve: 1.8,easing: (t) => 1 - Math.pow(1 - t, 5) ,
        essential: true
      });
    }

    console.log("Coordinates:", coordinates);



        }
        
        
    })
// console.log("Day object:", day.places[0].geo_coordinates.latitude);
        
      });
          
});
   

    

    return () => {
      map.remove();
    };
  }, [TripDetailInfo]);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{
          width: "95%",
          height: "85vh",
          borderRadius: 20,
        }}
      />
    </div>
  );
}

export default GlobalMap;
