import React from 'react';
import useMap from '../hooks/useMap';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map = ({ latitude, longitude, zoom }: MapProps) => {
  const { mapContainerRef } = useMap(latitude, longitude, zoom);

  return (
    <div>
      <div className="sidebar">
        Longitude: {longitude} | Latitude: {latitude} | Zoom: {zoom}
      </div>
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default Map;
