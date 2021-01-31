import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const asteroidSlice = createSlice({
    name: "asteroid",
    initialState: {
        selectedDate: moment(new Date()).format("YYYY-MM-DD"),
        asteroidList: [],
    },
    reducers: {
        setDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        setAsteroids: (state, action) => {
            state.asteroidList = action.payload;
        },
    },
});

export const { setDate, setAsteroids } = asteroidSlice.actions;

export const selectDate = (state) => state.asteroid.selectedDate;
export const selectAsteroids = (state) => state.asteroid.asteroidList;

export default asteroidSlice.reducer;
