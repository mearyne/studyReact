import Counter from "../Counter";
import CounterButton from "../CounterButton";
import Weight from "../Weight";
import WeightButton from "../WeightButton";
import Snack from "../Snack";
import SnackButton from "../SnackButton";
import CounterSlice from "../CounterSlice";
import CounterButtonSlice from "../CounterButtonSlice";
import CounterAsync from "../CounterAsync";
import ActiveUsers from "../ActiveUsers";
import UseMemoTest from "../UseMemoTest";
import TestCount from "./TestCount";
import TestCountButton from "./TestCountButton";

const Before = () => {
    return (
        <div>
            <Weight/>
            <WeightButton/>
            <Snack/>
            <SnackButton/>
            <CounterSlice/>
            <CounterButtonSlice/>
            <CounterAsync/>
            <ActiveUsers/>
            <TestCount/>
            <TestCountButton/>
        </div>
    );

};

export default Before;
