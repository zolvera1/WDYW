import { FormEvent, useState } from 'react'
import './App.css'
import Form from './Components/Form';
import Map from './Components/Map';
import {IFormData,IYelpBusiness} from './utils/utils'


function App() {

  const [yelpData, setyelpData] = useState<IYelpBusiness| null>(null);

  const handleFormSubmit = (data: IYelpBusiness) => {
    setyelpData(data)
  };

  return (
    <div className="App">
              
      <Form onFormSubmit={handleFormSubmit} />
      {yelpData && (
        <div>
          <h2>Submitted Data:</h2>

          <pre>{JSON.stringify(yelpData, null, 2)}</pre>
          <h1> Congrats you're going to {yelpData.name}</h1>
          <Map longitude={yelpData.coordinates.longitude} latitude={yelpData.coordinates.latitude} zoom={15}></Map>
        </div>
      )}
    </div>
  );
}

export default App
