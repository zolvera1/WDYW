import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

type MapHookReturn = {
  mapContainerRef: React.RefObject<HTMLDivElement>;
  map: mapboxgl.Map | null;
};

const useMap = (latitude: number, longitude: number, zoom: number): MapHookReturn => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!map) {
      setMap(
        new mapboxgl.Map({
          accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
          container: mapContainerRef.current as HTMLDivElement,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [longitude, latitude],
          zoom,
        }),
      );
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [latitude, longitude, zoom]);

  return { mapContainerRef, map };
};

export default useMap;