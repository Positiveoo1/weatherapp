import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import CurrentWeather from './components/CurrentWeather';
import CitySearch from './components/CitySearch';
import './App.css'; 

function App() {
  const [city, setCity] = useState('Warsaw'); 
  const [theme, setTheme] = useState('light'); 
  const [error, setError] = useState(false); // State to track if city is found

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (newCity) => {
    setCity(newCity);
    setError(false); 
  };

  return (
    <Container className={theme}>
      <Typography variant="h2" align="center" sx={{ margin: '20px 0', color: theme === 'light' ? '#1976d2' : '#fff' }}>
         Weather App
      </Typography>

      <Button onClick={toggleTheme} variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>

      <CitySearch onSearch={handleSearch} />

      <Typography variant="h4" align="center" sx={{ margin: '20px 0', color: theme === 'light' ? '#000' : '#fff' }}>
        {error ? 'City not found.' : `Current Weather in ${city}`}
      </Typography>

      <CurrentWeather city={city} setError={setError} />

    </Container>
  );
}

export default App;
