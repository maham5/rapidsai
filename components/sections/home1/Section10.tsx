"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("leaflet-map");
    if (!mapDiv) return;

    // Create map and set initial view
    const map = L.map("leaflet-map");

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom icons for markers
    const sinesIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      iconSize: [35, 35],
      iconAnchor: [17, 35],
      popupAnchor: [0, -30],
    });

    const stPeteIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
      iconSize: [35, 35],
      iconAnchor: [17, 35],
      popupAnchor: [0, -30],
    });

    // Two locations
    const locations: { lat: number; lng: number; name: string; icon: L.Icon }[] = [
      { lat: 33.647279, lng: 72.99987, name: "📍 SINES NUST (Islamabad)", icon: sinesIcon },
      { lat: 27.844646, lng: -82.640694, name: "📍 St. Petersburg Office", icon: stPeteIcon },
    ];

    const bounds: [number, number][] = [];

    // Add markers, bind popups, and open them automatically
    locations.forEach(({ lat, lng, name, icon }) => {
      const marker = L.marker([lat, lng], { icon }).addTo(map);
      marker.bindPopup(`<b>${name}</b>`).openPopup(); // ✅ auto-open popup
      bounds.push([lat, lng]);
    });

    // Fit to both markers and zoom in a bit more
    map.fitBounds(bounds, { padding: [80, 80] });
    map.once("zoomend", () => {
      map.setZoom(map.getZoom() - 1); // ✅ Slightly closer zoom for better view
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="leaflet-map" className="leaflet-container" />;
};

export default Map;
