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
const userDataAsync = createSlice({
    name: 'userDataAsync',
    initialState: {
        value: [],
        state: 'Welcome'
    },
    reducers: {
        init: (state) => {
            state.value = [];
        },
        add: (state, action) => {
            const user = {
                id: action.payload.id.value,
                email: action.payload.email.value,
                first_name: action.payload.first_name.value,
                last_name: action.payload.last_name.value,
                avatar: action.payload.avatar.value,
            }
            state.value.push(user);
        },
        remove: (state, action) => {
            state.value = [];

        },
        update: (state, action) => {
            state.value = [];

        }
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

export default userDataAsync;
export const {init, add, update, remove} = userDataAsync.actions
