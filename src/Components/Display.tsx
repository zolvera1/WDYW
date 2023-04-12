import React from 'react'
import Map from './Map'
type Props = {
name: string;
price: string;
image_url: string;
latitude: number;
longitude: number;
}

export default function Display({name, price, image_url, latitude, longitude}:Props) {

  return (
 <>
       
          <h2>Submitted Data:</h2>

    
          <h1> Congrats you're going to {name}</h1>
        
          <h2>{price} </h2>
          <img src={image_url}/>
          <Map longitude={longitude} latitude={latitude} zoom={15} ></Map>
</>
  )
}