import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../utils/api';
import WeatherCard from './WeatherCard';
import { Snackbar, Alert } from '@mui/material';

const CurrentWeather = ({ city, setError }) => {
  const [weather, setWeather] = useState(null);
  const [open, setOpen] = useState(false); // Snackbar visibility state

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather(city);
        if (data.cod !== 200) {
          throw new Error('City not found');
        }
        setWeather(data);
        setError(false); // Reset error state if fetch is successful
      } catch (err) {
        setWeather(null);
        setError(true); // Set error state if fetch fails
        setOpen(true); // Show Snackbar
      }
    };

    fetchWeather();
  }, [city, setError]);

  const handleClose = () => {
    setOpen(false); // Close Snackbar
  };

  return (
    <>
      {weather ? (
        <WeatherCard
          day="Today"
          temperature={weather.main.temp}
          weatherText={weather.weather[0].description}
          icon={weather.weather[0].icon}  
        />
      ) : (
        <p>Loading...</p>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          City not found. Please enter a valid city name.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CurrentWeather;
