import {combineReducers} from "redux";
import weight from "./weight";
import counter from "./counter";
import snackSlice from "./snackSlice";
import counterSlice from "./counterSlice";
import counterAsync from "./counterAsync";
import userDataAsync from "./userDataAsync";

const rootReducer = combineReducers({
    // counter: counter,
    weight: weight,
    snack: snackSlice.reducer,
    counterSlice: counterSlice.reducer,
    counterAsync: counterAsync.reducer,
    userDataAsync: userDataAsync.reducer,

});

export default rootReducer;