import {useDispatch} from "react-redux";
import {decrease, increase, init} from "../reducer/counterSlice";

const CounterButtonSlice = () => {
    let dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase(2));
    };

    const onDecrease = () => {
        dispatch(decrease(3));
    }

    const onInit = () => {
        dispatch(init());
    };

    return (
        <div>
            <button onClick={onIncrease}>2증가</button>
            <button onClick={onDecrease}>3감소</button>
            <button onClick={onInit}>초기화</button>
        </div>
    );
};

export default CounterButtonSlice