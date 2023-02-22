import {useSelector} from "react-redux";

const TestCount = () => {
    const testCount = useSelector(state => state.testCounters.value);

    return (
        <h1> {testCount} </h1>
        // <h1>  안뇽 </h1>
    );

};

export default TestCount;
