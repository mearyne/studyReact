import {useSelector} from "react-redux";

const CounterSlice = () => {
    let count = useSelector(state => state.counterSlice.count);

    return (
        <div>
            <h1> {count}</h1>
        </div>
    );
};

export default CounterSlice
