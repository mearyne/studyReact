import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    count: 0,
    happy: 100
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increase: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrease: (state, action) => {
            state.count = state.count - action.payload;
        },
        init: (state, action) => {
            state.count = 0;
        },
    },
})

export default counterSlice
export const {increase, decrease, init} = counterSlice.actions