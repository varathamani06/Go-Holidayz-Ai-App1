"use client";

import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

function GlobalMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [0, 20], // start centered
        zoom: 1.2,
        projection: "globe",
      });

      mapRef.current.on("style.load", () => {
        mapRef.current!.setFog({}); // atmosphere effect
      });

      // 🌍 Spin the globe
      const spinGlobe = () => {
        if (!mapRef.current) return;

        const center = mapRef.current.getCenter();
        // move longitude slowly (-0.2 is westward, +0.2 is eastward)
        center.lng -= 0.2;

        mapRef.current.easeTo({
          center,
          duration: 100, // speed of transition
          easing: (n) => n, // linear motion
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
