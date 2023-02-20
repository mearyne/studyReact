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
            // console.log(action.payload);
            // state.value = [];

            for (let i = 0; i < state.value.length; i++) {
                for (let j = 0; j < action.payload.length; j++) {
                    if (state.value[i].id === action.payload[j].id) {
                        state.value.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }


        },
        update: (state, action) => {
            const user = {
                email: action.payload.email.value,
                first_name: action.payload.first_name.value,
                last_name: action.payload.last_name.value,
                avatar: action.payload.avatar.value,
            }

            for (let i = 0; i < state.value.length; i++) {
                if (Number(action.payload.id.value) === state.value[i].id) {
                    user.id = action.payload.id.value;
                    state.value[i] = user;
                }
            }


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
