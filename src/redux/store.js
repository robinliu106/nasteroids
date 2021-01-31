import { configureStore } from "@reduxjs/toolkit";
import asteroidReducer from "./asteroidSlice";

export default configureStore({
    reducer: {
        asteroid: asteroidReducer,
    },
});
