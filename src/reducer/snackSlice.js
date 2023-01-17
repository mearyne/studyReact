import {createSlice} from "@reduxjs/toolkit";

const snackSlice = createSlice({
    name: 'snackSlice',
    initialState: {number: 0},
    reducers: {
        increase: state => {
            state.number += 1;
        },
        decrease: state => {
            state.number -= 1;
        },
        init: state => {
            state.number = 0
        },
    },
});

export const {increase, decrease, init} = snackSlice.actions;
export default snackSlice