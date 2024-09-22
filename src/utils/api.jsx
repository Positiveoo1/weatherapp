import axios from 'axios';

const API_KEY = 'a859d9d8db107033845f6131f6d9cccc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getCurrentWeather = async (city) => {
  try {
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error.message);
  }
};


