
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; 

const WeatherCard = ({ day, temperature, weatherText, theme }) => {
  const textColor = '#1976d2'; 
  const yellow = '#FFFF00';

  const getIcon = (weather) => {
    if (weather.toLowerCase().includes('rain')) {
      return <WiRain size={48} style={{ color: yellow }} />;
    } else if (weather.toLowerCase().includes('snow')) {
      return <WiSnow size={48} style={{ color: yellow }} />;
    } else {
      return <WiDaySunny size={48} style={{ color: yellow }} />;
    }
  };

  const roundedTemperature = Math.round(temperature);
  return (
    <Card sx={{ minWidth: 200, minHeight: '100', margin: '10px', backgroundColor: theme === 'light' ? '#f0f4ff' : '#424242', height: '100%' }}>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          {getIcon(weatherText)} 
          <Typography variant="h5" sx={{ color: textColor }}>
            {day}
          </Typography>
          <Typography variant="h6" sx={{ color: textColor }}>
          {roundedTemperature}°C 
          </Typography>
          <Typography sx={{ color: textColor }}>
            {weatherText}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
