import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { db } from "../../db/db";
import type { IListSlice, IDB, ILIstItem } from "../../types/List.types";

const initialState: IListSlice = {
  trips: [
    {
      id: nanoid(),
      city: 'Kyiv',
      url: 'https://kyiv24.news/wp-content/uploads/2023/01/kyyiv-vidkryti-dzherela-03-01-2023-2-1024x683.jpg',
      startDate: '2023-07-12',
      endDate: '2023-07-15'
    },
    {
      id: nanoid(),
      city: 'London',
      url: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/London-1.jpg',
      startDate: '2023-08-12',
      endDate: '2023-08-15'
    },
    {
      id: nanoid(),
      city: 'Zhytomir',
      url: 'https://www.dilovamova.com/images/wpi.images/h_ua_den_jitomira.jpg',
      startDate: '2024-02-12',
      endDate: '2024-02-15'
    },
  ],
  sortBy: ''
}

export const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip: (state, { payload }: PayloadAction<{ city: string; startDate: string; endDate: string }>) => {
      let { city, startDate, endDate } = payload
      const foundCity = db.find((el: IDB) => payload.city === el.city)
      const newTrip: ILIstItem = { id: nanoid(), city, startDate, endDate, url: foundCity ? foundCity.url : '' }
      state.trips.push(newTrip)
    },
    changeSort: (state, { payload }: PayloadAction<string>) => {
      state.sortBy = payload
    }
  },
  selectors: {
    getTrips: state => state.trips,
    getSort: state => state.sortBy
  }
})

export const { addTrip, changeSort } = tripSlice.actions;
export const { getTrips, getSort } = tripSlice.selectors;
export default tripSlice.reducer;