'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in leaflet
// @ts-expect-error - Deleting internal Leaflet property for icon configuration
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface TeamMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  role: string;
  avatar?: string;
}

interface TeamMapProps {
  members: TeamMember[];
}

export default function TeamMap({ members }: TeamMapProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate center based on all members' coordinates
  const center = React.useMemo(() => {
    if (members.length === 0) {
      return { lat: 51.505, lng: -0.09 }; // Default to London
    }
    
    const avgLat = members.reduce((sum, member) => sum + member.coordinates.lat, 0) / members.length;
    const avgLng = members.reduce((sum, member) => sum + member.coordinates.lng, 0) / members.length;
    
    return { lat: avgLat, lng: avgLng };
  }, [members]);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {members.map((member) => (
          <Marker
            key={member.id}
            position={[member.coordinates.lat, member.coordinates.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-gray-600">{member.role}</p>
                <p className="text-xs text-gray-500 mt-1">{member.location}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

