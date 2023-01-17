import {combineReducers} from "redux";
import weight from "./weight";
import counter from "./counter";
import snackSlice from "./snackSlice";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
    // counter: counter,
    // weight: weight,
    snack: snackSlice.reducer,
    counterSlice: counterSlice.reducer,

});

export default rootReducer;