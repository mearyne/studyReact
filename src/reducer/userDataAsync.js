import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userData} from "../components/data/userData";

export const asyncUser = createAsyncThunk(
    'user/table',
    async () => {
        // const response = await axios.get('https://reqres.in/api/users');
        // return await response.data.data;

        // data 폴더 안에 있는 데이터를 가져옴
        return userData.data;
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
        init: (state, action) => {
            state.value = [];
        },
        add: (state, action) => {
            state.value.push(action.payload);
        },
        remove: (state, action) => {
            state.value.splice(action.payload, 1);
        },
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
export const {init, add, remove} = userDataAsync.actions;