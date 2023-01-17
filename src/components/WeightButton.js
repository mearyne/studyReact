import {useDispatch} from "react-redux";
import {weightDecrease, weightIncrease} from "../reducer/weight";

const WeightButton = () => {

    let dispatch = useDispatch();

    const onIncrease = () => {
        dispatch({type: weightIncrease});
    };

    const onDecrease = () => {
        dispatch({type: weightDecrease});
    }


    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )

};

export default WeightButton