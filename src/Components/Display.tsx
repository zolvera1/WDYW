import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

import Map from './Map';

type Props = {
  name: string;
  price: string;
  image_url: string;
  latitude: number;
  longitude: number;
  
};

export default function Display({ name, price, image_url, latitude, longitude }: Props) {
  return (
    <Paper elevation={4} variant="outlined" style={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="h4">Submitted Data:</Typography>
      <Typography variant="h6">Congrats you're going to:</Typography>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">{price}</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <div className="photo-container">
            <img src={image_url} alt="Venue" className="photo" />
            </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>

            <Map longitude={longitude} latitude={latitude} zoom={15} />
            </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

