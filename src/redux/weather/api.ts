import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchWeekWeather = createAsyncThunk
  ('weather/weekWeather',
    async (trip, { rejectWithValue }) => {
      try {
        const { city, startDate, endDate } = trip;
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${import.meta.env.VITE_API_KEY}&contentType=json`);
        return data.days;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    })


export const fetchDayWeather = createAsyncThunk(
  'weather/dayWeather',
  async (trip, { rejectWithValue }) => {
    try {
      const { city, startDate } = trip;
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/${city}/today?unitGroup=metric&include=days&key=${import.meta.env.VITE_API_KEY}&contentType=json`);
      return {...data, startDate};
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)
