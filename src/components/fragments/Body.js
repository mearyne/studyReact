import Mains from "./Mains";
import SideMenu from "./SideMenu";
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu';
import MyMenu from "../mainComponent/MyMenu";
import MenuHistory from "./MenuHistory";


const Body = () => {
    return (
        <div style={({display: "flex", height: "100vh"})}>
            {/*<SideMenu/>*/}
            <MenuHistory />
            <Mains/>
        </div>
    )
};

export default Body;
