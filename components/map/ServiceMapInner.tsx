"use client";

import "leaflet/dist/leaflet.css";
import { Circle, CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { serviceAreaMap } from "@/lib/site";

const NAVY = "#0b1b33";
const RED = "#e1121a";

export default function ServiceMapInner() {
  const { center, zoom, locations } = serviceAreaMap;

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {locations.map((loc) => {
        const color = loc.primary ? RED : NAVY;
        return (
          <div key={loc.name}>
            <Circle
              center={[loc.lat, loc.lng]}
              radius={loc.radius}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: 0.1,
                weight: 1.5,
              }}
            />
            <CircleMarker
              center={[loc.lat, loc.lng]}
              radius={loc.primary ? 9 : 7}
              pathOptions={{
                color: "#ffffff",
                fillColor: color,
                fillOpacity: 1,
                weight: 2.5,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <span style={{ fontWeight: 600, color: NAVY }}>{loc.name}</span>
                <br />
                <span style={{ fontSize: 11, color: "#6b7280" }}>{loc.label}</span>
              </Tooltip>
            </CircleMarker>
          </div>
        );
      })}
    </MapContainer>
  );
}
