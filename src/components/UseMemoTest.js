import {useMemo, useState} from "react";

const UseMemoTest = () => {
    const [value, setValue] = useState(0);

    const onclick = () => {
        setValue(0);
    };

    let memoValue = useMemo(() => {

    });


    console.log("랜더링 되었습니다~");
    return (
        <div>
            <h1>value : {value}</h1>
            <button onClick={onclick}>그대로 유지</button>
        </div>
    )

};

export default UseMemoTest