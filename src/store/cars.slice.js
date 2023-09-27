import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [
        { id: 1, model: "HONDA", year: 1987, color: "GREEN" },
        { id: 2, model: "NISSAN", year: 1993, color: "RED" }
    ]
}

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        addToCars(state, action) {
            state.cars.push(action.payload)
        },
        removeFromCars(state, action) {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
})

console.log("carsSlice", carsSlice)