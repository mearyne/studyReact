import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {logger} from "redux-logger/src";

export const asyncUser = createAsyncThunk(
    'user/table',
    async () => {
        const response = await axios.get('https://reqres.in/api/users');
        return await response.data.data;
    }
);

// 비동기 작업을 추가한 counter
const userData = createSlice({
    name: 'userDataAsync',
    initialState: {
        value: [],
        state: 'Welcome'
    },
    extraReducers: (builder) => {
        builder.addCase(asyncUser.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(asyncUser.fulfilled, (state, action) => {
            state.status = 'complete';
            state.value = action.payload;

        });
        builder.addCase(asyncUser.rejected, (state, action) => {
            state.status = 'fail';
        });
    },
});

export default userData
