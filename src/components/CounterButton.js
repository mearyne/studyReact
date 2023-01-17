import {useDispatch} from "react-redux";
import {countDecrease, countIncrease, countInit} from "../reducer/counter";

const CounterButton = () => {
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch({type: countIncrease});
    };

    const onDecrease = () => {
        dispatch({type: countDecrease})
    }


    function onInit() {
        dispatch({type: countInit});
    }

    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={onInit}>초기화</button>
        </div>
    )

};

export default CounterButton