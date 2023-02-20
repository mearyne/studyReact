import {createSlice} from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: 'selectedSlice',
    initialState: {
        value: []
    },
    reducers: {
        changeSelected: (state, action) => {
            console.log(action.payload);
            console.log(state.value);
            state.value = action.payload;
        }
    }
});

export default selectedSlice;
export const {changeSelected} = selectedSlice.actions;
