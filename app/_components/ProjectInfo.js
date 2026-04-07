"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import react-leaflet map so it never runs on server
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export function ProjectInfo({
  client,
  location,
  businessSegment,
  industry,
  coordinates,
}) {
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    // Leaflet icons must be set in the browser
    import("leaflet").then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });
      setLeafletLoaded(true);
    });
  }, []);

  return (
    <div className="flex flex-wrap items-start gap-8 p-8 bg-primary-200">
      {/* LEFT INFO */}
      <div className="flex-1 text-primary-100 text-base space-y-2">
        <p>
          <strong className="text-primary-900"> Client:</strong> {client}
        </p>
        <p>
          <strong className="text-primary-900">Location:</strong> {location}
        </p>
        <hr className="border-t border-accent-500 my-4" />
        <p>
          <strong className="text-primary-900">Business Segment:</strong>{" "}
          <span className="text-primary-100 cursor-pointer hover:underline">
            {businessSegment}
          </span>
        </p>
        <p>
          <strong className="text-primary-900">Industry:</strong>{" "}
          <span className="text-primary-100 cursor-pointer hover:underline">
            {industry}
          </span>
        </p>
      </div>

      {/* RIGHT MAP */}
      <div className="flex-1 flex items-center justify-center bg-primary-200 h-[220px] md:h-[300px] overflow-hidden">
        {leafletLoaded && (
          <MapContainer
            center={coordinates}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates}>
              <Popup>{location}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}
