import {useSelector} from "react-redux";

const Snack = () => {

    let snack = useSelector(state => state.snack.number);
    console.log(snack);

    return (
        <div>
            <h1>과자는 {snack}개 있습니다.</h1>
        </div>
    )

};

export default Snack
 