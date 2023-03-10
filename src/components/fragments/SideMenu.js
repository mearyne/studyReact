import {Link} from "react-router-dom";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {Menu, MenuItem, Sidebar, SubMenu, useProSidebar} from "react-pro-sidebar";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';

const SideMenu = () => {
    const {collapseSidebar} = useProSidebar();

    return (
        <Sidebar style={{height: "100vh"}}>
            <Menu>
                <MenuItem
                    icon={<MenuOutlinedIcon/>}
                    onClick={() => {
                        collapseSidebar();
                    }}
                    style={{textAlign: "center"}}
                >
                    {" "}
                    <h2>메뉴바</h2>
                </MenuItem>
                <MenuItem component={<Link to="/before"/>} icon={<HistoryOutlinedIcon/>}>Before</MenuItem>
                <MenuItem component={<Link to="/buttons"/>} icon={<CheckBoxOutlinedIcon/>}>Buttons</MenuItem>
                <SubMenu label={'Input'} icon={<PlagiarismOutlinedIcon/>}>
                    <MenuItem component={<Link to="/textType"/>}>TextType</MenuItem>
                    <MenuItem component={<Link to="/autoComplete"/>}>AutoComplete</MenuItem>
                    <MenuItem component={<Link to="/option-select"/>}>Option-Select</MenuItem>
                    <MenuItem component={<Link to="/day"/>}>Day</MenuItem>
                </SubMenu>
                <MenuItem component={<Link to="/data"/>} icon={<InsertChartOutlinedOutlinedIcon/>}>Data</MenuItem>
                <MenuItem component={<Link to="/dataApi"/>} icon={<HelpOutlineOutlinedIcon/>}>DataApi</MenuItem>
                <MenuItem component={<Link to="/customizedSnackbars"/>} icon={<ErrorOutlinedIcon/>}>Alert</MenuItem>
                <MenuItem component={<Link to="/badgeVisibility"/>} icon={<LoyaltyOutlinedIcon/>}>badge</MenuItem>
            </Menu>

        </Sidebar>
    );
};

export default SideMenu;
