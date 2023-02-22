import {useDispatch} from "react-redux";
import {increase, decrease, init} from "../reducer/snackSlice";

const SnackButton = () => {
    let dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(increase()); }}>+</button>
            <button onClick={() => { dispatch(decrease); }}>-</button>
            <button onClick={() => { dispatch(init()); }}>초기화</button>
        </div>
    )
};

export default SnackButton