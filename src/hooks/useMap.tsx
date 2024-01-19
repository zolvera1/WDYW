import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
require('dotenv')

type MapHookReturn = {
  mapContainerRef: React.RefObject<HTMLDivElement>;
  map: mapboxgl.Map | null;
};

const useMap = (latitude: number, longitude: number, zoom: number): MapHookReturn => {
  const mapContainerRef = useRef<HTMLDivElement|null>(null);
  const [map, setMap] = useState<mapboxgl.Map|null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker|null>(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      
      accessToken: process.env.VITE_MAPBOX_TOKEN,
      container: mapContainerRef.current as HTMLDivElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom,
      
    });
    const newMarker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(newMap);
    setMap(newMap);
    setMarker(newMarker);
  
    return () => {
      if (map) {
        map.remove();
      }
      
    };
  }, [latitude, longitude, zoom]);

  return { mapContainerRef, map };
};

export default useMap;
