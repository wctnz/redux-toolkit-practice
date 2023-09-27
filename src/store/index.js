import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars.slice";

export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer
    }
})