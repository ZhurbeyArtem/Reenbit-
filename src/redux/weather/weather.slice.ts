import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchDayWeather, fetchWeekWeather } from "./api";

let initialState = {
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
    const setLoading = (state) => {
      state.isLoading = true;
      state.error = null
    }

    const setLoaded = (state) => {
      state.isLoading = false;
    }

    const setError = (state, action) => {
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