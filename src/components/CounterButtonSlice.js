import {useDispatch} from "react-redux";
import {decrease, increase, init} from "../reducer/counterSlice";

const CounterButtonSlice = () => {
    let dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {dispatch(increase);}}>2증가</button>
            <button onClick={() => {dispatch(decrease);}}>3감소</button>
            <button onClick={() => {dispatch(init);}}>초기화</button>
        </div>
    );
};

export default CounterButtonSlice