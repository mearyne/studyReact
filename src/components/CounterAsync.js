import {useDispatch, useSelector} from "react-redux";
import {asyncUpFetch} from "../reducer/counterAsync";

const CounterAsync = () => {
    let status = useSelector(state => state.counterAsync.status);
    let value = useSelector(state => state.counterAsync.value);
    let dispatch = useDispatch();

    return (
        <div>
            <h1>async</h1>
            <h3>state : {status}</h3>
            <button onClick={() => {
                dispatch(asyncUpFetch())
            }}>네트워크 통신
            </button>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>last_name</th>
                </tr>
                </thead>
                <tbody>
                {value.map((data) => {
                    return (
                        <tr key={data.id}>
                            <th>{data.id}</th>
                            <th>{data.email}</th>
                            <th>{data.last_name}</th>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
};

export default CounterAsync