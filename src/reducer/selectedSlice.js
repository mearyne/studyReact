import {createSlice} from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: 'selectedSlice',
    initialState: {
        value: [{
            id: -1,
            email: "",
            first_name: "",
            last_name: "",
            avatar: ""
        }]
    },
    reducers: {
        changeSelected: (state, action) => {
            state.value = action.payload;
        }
    }
});

export default selectedSlice;
export const {changeSelected} = selectedSlice.actions;
