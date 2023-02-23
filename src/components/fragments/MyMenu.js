import Menu, {MenuItem, SubMenu} from "rc-menu";
import "rc-menu/assets/index.css";
import {useNavigate} from "react-router-dom";
import {menuData} from "../data/menuData";
import {useDispatch} from "react-redux";
import {add} from "../../reducer/historySlice";

function MyMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Menu className={"menu"} mode={"horizontal"} style={{marginTop: "0"}}>
            {/*<SubMenu title={"depth-1"}>*/}
            {/*    <SubMenu title={"depth-2"}>*/}
            {/*        <SubMenu title={"depth-3"}>*/}
            {/*            <MenuItem>hello</MenuItem>*/}
            {/*            <MenuItem>hello</MenuItem>*/}
            {/*            <MenuItem>hello</MenuItem>*/}
            {/*            <MenuItem>hello</MenuItem>*/}
            {/*            <MenuItem>hello</MenuItem>*/}
            {/*        </SubMenu>*/}
            {/*        <MenuItem>hello</MenuItem>*/}
            {/*        <MenuItem>hello</MenuItem>*/}
            {/*        <MenuItem>hello</MenuItem>*/}
            {/*    </SubMenu>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*    <MenuItem>hello</MenuItem>*/}
            {/*</SubMenu>*/}
            {
                menuData.map((menu, idx) => {
                    return <MenuItem className={"prevent-select"} key={idx} onClick={() => {
                        dispatch(add(menu.path));
                        navigate('/' + menu.path);
                    }
                    }>{menu.path}</MenuItem>
                })
            }

            <SubMenu title={"depth-1"}>
                <SubMenu title={"depth-2"}>
                    <SubMenu title={"depth-3"}>
                        <MenuItem>hello</MenuItem>
                        <MenuItem>hello</MenuItem>
                        <MenuItem>hello</MenuItem>
                        <MenuItem>hello</MenuItem>
                        <MenuItem>hello</MenuItem>
                    </SubMenu>
                    <MenuItem>hello</MenuItem>
                    <MenuItem>hello</MenuItem>
                    <MenuItem>hello</MenuItem>
                </SubMenu>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
            </SubMenu>

        </Menu>

    );
}

export default MyMenu;