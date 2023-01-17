import {useSelector} from "react-redux";

const Weight = () => {
    let weight = useSelector(state => state.weight);

    return (
        <div>
            <h1>My Weight : {weight}</h1>
        </div>
    )
};

export default Weight