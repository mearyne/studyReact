import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    history: [],
    current: ""
}

const historySlice = createSlice({
    name: 'historySlice',
    initialState: {
        value: initialState,
    },
    reducers: {
        /**
         * history에 지금껏 들어간 메뉴 기록을 저장한다
         * 이미 존재하는 메뉴는 저장하지 않는다
         */
        add: (state, action) => {
            let exist = false;
            for (let i = 0; i < state.value.history.length; i++) {
                if (state.value.history[i] === action.payload) {
                    state.value.current = action.payload;
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                state.value.history.push(action.payload);
                state.value.current = action.payload;
            }
        },
        /**
         * history 기록을 삭제한다
         */
        remove: (state, action) => {
            let deleteIdx = -1;
            console.log(state.value.history.length);
            for (let i = 0; i < state.value.history.length; i++) {
                if (state.value.history[i] === action.payload) {
                    deleteIdx = i;
                }
            }
            state.value.history.splice(deleteIdx, 1);
        },
        changeCurrent: (state, action) => {
            state.value.current = action.payload;
        }

    },
})

export default historySlice
export const {add, remove, changeCurrent} = historySlice.actions
