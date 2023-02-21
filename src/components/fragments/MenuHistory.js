import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {remove} from "../../reducer/historySlice";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from "react-router-dom";

const MenuHistory = () => {
    const historys = useSelector(state => state.historySlice.value.history);
    const current = useSelector(state => state.historySlice.value.current);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <ul>
            {
                historys.map((history, idx) => {
                    return (
                        <li
                            key={idx}
                            style={{color: "blue"}}
                            onClick={() => {
                                navigate('/' + history);
                            }}
                        >
                            {history}
                            <IconButton onClick={() => {
                                dispatch(remove(history));
                            }}> <DeleteOutlineIcon/> </IconButton>
                        </li>)
                })
            }
        </ul>
    );
};

export default MenuHistory;
