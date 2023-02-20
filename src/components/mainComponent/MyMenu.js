import Menu, {MenuItem, SubMenu} from "rc-menu";
import "rc-menu/assets/index.css";
import {useNavigate} from "react-router-dom";

function MyMenu() {

    const navigate = useNavigate();

    return (
        <Menu className="menu" mode="horizontal" style={{marginTop: 0}}>
            <MenuItem onClick={() => {
                navigate("/before")
            }}>Before</MenuItem>
            <MenuItem onClick={() => {
                navigate("/buttons")
            }}>Buttons&Data</MenuItem>
            <SubMenu title="Input">
                <MenuItem onClick={() => {
                    navigate("/textType");
                }}>TextType</MenuItem>
                <MenuItem onClick={() => {
                    navigate("/autoComplete");
                }}>AutoComplete</MenuItem>
                <MenuItem onClick={() => {
                    navigate("/option-select");
                }}>Option-Select</MenuItem>
                <MenuItem onClick={() => {
                    navigate("/day");
                }}>Tag</MenuItem>
                <SubMenu title={"depth-1"}>
                    <SubMenu title={"depth-2"}>
                        <SubMenu title={"depth-3"}>
                            <MenuItem>hello</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </SubMenu>
        </Menu>
    );
}

export default MyMenu;