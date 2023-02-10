/* eslint-disable max-len */
import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

type ChangeViewProps = {
  coords: {
    lat: number;
    lng: number;
  };
};
export function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView(coords, 24);
  return null;
}

export default function DynamicMap() {
  const [geoData, setGeoData] = useState({ lat: 41.02297178004265, lng: 40.51530843372785 });
  const [opacity, setOpacity] = useState(1);
  const center = { lat: geoData.lat, lng: geoData.lng };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(op => {
        if (op > 0.1) return op - 0.1;
        return 0;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={center} zoom={29} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        opacity={0.5}
        url="https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&apistyle=s.e%3Al.i%7Cp.v%3Aoff%2Cs.t%3A3%7Cs.e%3Ag%7C"
      />
      {/* {geoData.lat && geoData.lng && <Marker position={[geoData.lat, geoData.lng]} />} */}
      {/* <ChangeView coords={center} /> */}
    </MapContainer>
  );
}
