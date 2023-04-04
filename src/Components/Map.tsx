import React, {useRef, useState, useEffect} from 'react'
import useMap from '../hooks/useMap';
import * as mapboxgl from 'mapbox-gl'

type MapProps= {
    latitude: number;
    longitude: number;
    zoom: number;
  }

export default function Map({latitude,longitude, zoom}: MapProps) {

   const { mapContainerRef, map } = useMap(latitude, longitude, zoom);

  return (
      <div>
          <div className="sidebar">
Longitude: {longitude} | Latitude: {latitude} | Zoom: {zoom}
</div>
    <div ref={mapContainerRef} className="map-container" >
   
    </div>
   
    </div>
  )
}