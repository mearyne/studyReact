import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {changeCurrent, remove} from "../../reducer/historySlice";
import {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const MenuHistory = () => {
    const historys = useSelector(state => state.historySlice.value.history);
    const current = useSelector(state => state.historySlice.value.current);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentStyle = (history) => {
        return current === history
            ? {color: "red", borderRight: "1.5px solid", marginLeft: "15px"} // 내가 현재 위치한 메뉴창이 history와 일치할때
            : {color: "black", borderRight: "1.5px solid", marginLeft: "15px"}; // 일치하지 않을때
    };


    return (
        <ul style={{display: "flex", listStyle: "none"}}>
            {
                historys.map((history, idx) => {
                    return (
                        <li className={"prevent-select"} key={idx} style={currentStyle(history)} onClick={() => {
                            dispatch(changeCurrent(history));
                            navigate('/' + history);
                        }}
                        >
                            {history}
                            <IconButton onClick={() => {
                                dispatch(remove(history));
                            }}> <CloseIcon/></IconButton>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default MenuHistory;
