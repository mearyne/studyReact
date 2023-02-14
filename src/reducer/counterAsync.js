import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {logger} from "redux-logger/src";

export const asyncUpFetch = createAsyncThunk(
    'counterSlice/asyncUpFetch',
    async () => {
        const response = await axios.get('https://reqres.in/api/users');
        return await response.data.data;
    }
);

// 비동기 작업을 추가한 counter
const counterAsync = createSlice({
    name: 'counterAsync',
    initialState: {
        value: [],
        state: 'Welcome'
    },
    extraReducers: (builder) => {
        builder.addCase(asyncUpFetch.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
            state.status = 'complete';
            state.value = action.payload;

        });
        builder.addCase(asyncUpFetch.rejected, (state, action) => {
            state.status = 'fail';
        });
    },
});

export default counterAsync