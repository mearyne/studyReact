import {createSlice} from "@reduxjs/toolkit";

const testCountSlice = createSlice({
    name: 'testCountSlice',
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state, action) => {
            state.value -= action.payload;
        },
        init: (state, action) => {
            state.value = 0;
        }
    },
})

export default testCountSlice;
export const {increase, decrease, init} = testCountSlice.actions;