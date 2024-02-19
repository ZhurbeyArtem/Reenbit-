import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchDayWeather, fetchWeekWeather } from "./api";
import type { WeatherState } from "../../types/Weather.types";

let initialState: WeatherState = {
  weekWeather: [],
  todayWeather: {},
  isLoading: false,
  error: null
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    const setLoading = (state: WeatherState) => {
      state.isLoading = true;
      state.error = null
    }

    const setLoaded = (state: WeatherState) => {
      state.isLoading = false;
    }

    const setError = (state: WeatherState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.weekWeather = [];
      state.todayWeather = {};
    }

    builder
      .addCase(fetchWeekWeather.fulfilled, (state, { payload }) => {
        setLoaded(state)
        state.weekWeather = payload
      })

      .addCase(fetchDayWeather.fulfilled, (state, { payload }) => {
        state.todayWeather = payload
      })
      .addMatcher(
        isAnyOf(
          fetchWeekWeather.pending,
          fetchDayWeather.pending,
        ),
        setLoading
      )
      .addMatcher(
        isAnyOf(
          fetchWeekWeather.rejected,
          fetchDayWeather.rejected,
        ),
        setError
      )
  },
  selectors: {
    getWeekWeather: (state) => state.weekWeather,
    getDayWeather: (state) => state.todayWeather
  }
})

export const { getWeekWeather, getDayWeather } = weatherSlice.selectors
export default weatherSlice.reducer