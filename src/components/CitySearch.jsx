import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    if (city) {
      const result = await onSearch(city);
      if (!result) {
        setErrorMessage('City not found. Please enter a valid city name.');
        setOpen(true);
      }
      setCity('');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const borderColor = "#1976d2"; 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <TextField
        variant="outlined"
        label="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        InputProps={{
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor,
            },
            '& .MuiInputBase-input': {
              color: borderColor, 
            },
            '& .MuiInputBase-input::placeholder': {
              color: borderColor, 
              opacity: 1, 
            },
          },
        }}
        InputLabelProps={{
            sx: {
              color: borderColor, 
              '&.Mui-focused': {
                color: borderColor,
              },
            },
          }}
        placeholder="Search city..." 
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CitySearch;
    