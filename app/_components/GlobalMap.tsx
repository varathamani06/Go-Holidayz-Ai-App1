"use client";

import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

function GlobalMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

    // 📱 detect if mobile screen
    const isMobile = window.innerWidth < 768;
    const initialZoom = isMobile ? 0.8 : 1.2; // smaller zoom for mobile

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [0, 20],
        zoom: initialZoom,
        projection: "globe",
      });

      mapRef.current.on("style.load", () => {
        mapRef.current!.setFog({});
      });

      // 🌍 Spin the globe
      const spinGlobe = () => {
        if (!mapRef.current) return;

        const center = mapRef.current.getCenter();
        center.lng -= 1; // spin speed

        mapRef.current.easeTo({
          center,
          duration: 100,
          easing: (n) => n,
        });

        requestAnimationFrame(spinGlobe);
      };

      spinGlobe();
    }

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "70vh",
        borderRadius: "20px",
      }}
    />
  );
}

export default GlobalMap;
