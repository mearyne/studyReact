import {useDispatch} from "react-redux";
import {increase, decrease, init} from "../reducer/snackSlice";

const SnackButton = () => {
    let dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onInit = () => {
        dispatch(init());
    };

    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={onInit}>초기화</button>
        </div>
    )

};

export default SnackButton