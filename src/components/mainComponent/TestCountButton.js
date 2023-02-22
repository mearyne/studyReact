import {useDispatch} from "react-redux";
import {decrease, increase, init} from "../../reducer/testCountSlice";

const TestCountButton = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(increase(10)) }}> up </button>
            <button onClick={() => { dispatch(decrease(3)) }}> down </button>
            <button onClick={() => { dispatch(init()) }}> init </button>
        </div>

    );

};

export default TestCountButton;
