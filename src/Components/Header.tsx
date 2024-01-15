import React from 'react';
import { styled, useTheme} from '@mui/system';
import { Typography,Container } from '@mui/material';
import DiningIcon from '@mui/icons-material/Dining';

interface HeroBannerStyles {
  background: string;
  color: string;
  padding: string | ((theme: any) => any);
  textAlign?: React.CSSProperties['textAlign'];
}

const heroBannerStyles: HeroBannerStyles = {
  background: '#F1FAEE',
  color: '#1e81b0',
  padding: (theme: any) => theme.spacing(6), // or '16px' or any other valid CSS padding value
  textAlign: 'center',
};



const HeroBanner = () => (
 <div style={heroBannerStyles as React.CSSProperties}>
    <Container maxWidth="md">
      <Typography variant="h2" component="div" gutterBottom sx={{ fontSize: '2.5rem' }}>
    
        WDYW
        <span> <DiningIcon fontSize="large"/></span>
      </Typography>

      <Typography variant="h5" component="div" sx={{ fontSize: '1.25rem', marginTop: '1rem' }}>
        Don't know what you want?<br />
        Come figure it out!
      </Typography>
    </Container>
    </div>
);

export default HeroBanner;