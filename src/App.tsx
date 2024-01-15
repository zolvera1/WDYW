import { FormEvent, useState } from 'react'
import './App.css'
import Display from './Components/Display';
import Form from './Components/Form';
import Header from './Components/Header'
import { Alert, AlertTitle } from '@mui/material';

import { IYelpBusiness } from './utils/global'


function App() {

  const [yelpData, setYelpData] = useState<IYelpBusiness | null>(null);
  const [error, setError] = useState<string>('')
  const [shouldDisplay, setShouldDisplay] = useState<Boolean>(true)


  const handleFormSubmit = (data: IYelpBusiness | null, e?: any) => {
    if (e) {
      setError('SOL Finding a resturaunt! Try again soon');
      setShouldDisplay(false)
    } else {
      setYelpData(data);
      setError('');
      setShouldDisplay(true)
    }
  };



  return (
    <div className="App">

      <section className="logo">
        <h1> WDYW? </h1>
      </section>
      <Header />
      <Form onFormSubmit={handleFormSubmit} />
      {shouldDisplay && yelpData ?
        <Display
          name={yelpData.name}
          price={yelpData.price}
          image_url={yelpData.image_url}
          latitude={yelpData.coordinates.latitude}
          longitude={yelpData.coordinates.longitude} />
        : null}

      {error &&
        (<Alert severity="warning">
          <AlertTitle> Warning</AlertTitle>
          {error}
        </Alert>)
      }
    </div>
  );
}

export default App
