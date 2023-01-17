import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import Weight from "./components/Weight";
import WeightButton from "./components/WeightButton";
import Snack from "./components/Snack";
import SnackButton from "./components/SnackButton";
import CounterSlice from "./components/CounterSlice";
import CounterButtonSlice from "./components/CounterButtonSlice";

function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<CounterButton/>*/}
            {/*<Weight/>*/}
            {/*<WeightButton/>*/}
            <Snack/>
            <SnackButton/>
            <CounterSlice/>
            <CounterButtonSlice/>
        </div>
    );

}

export default App;
