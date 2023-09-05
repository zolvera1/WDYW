import { FormEvent, useState } from 'react'
import './App.css'
import Display from './Components/Display';
import Form from './Components/Form';

import {IFormData,IYelpBusiness} from './utils/global'


function App() {

  const [yelpData, setyelpData] = useState<IYelpBusiness| null>(null);

  const handleFormSubmit = (data: IYelpBusiness) => {
    setyelpData(data)
  };

  return (
    <div className="App">
      <Form onFormSubmit={handleFormSubmit} />
      {yelpData && (
       <Display name={yelpData.name} price={yelpData.price} image_url={yelpData.image_url} latitude={yelpData.coordinates.latitude} longitude={yelpData.coordinates.longitude} ></Display>
      )}
    </div>
  );
}

export default App
