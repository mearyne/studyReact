import React from "react";
import {useSelector} from "react-redux";

const Counter = () => {
    let state = useSelector((state) => state.counter);

    return (
        <div>
            <h1>My Count : {state.count} </h1>
        </div>
    )
};

export default Counter