import Menu, {MenuItem, SubMenu} from "rc-menu";
import "rc-menu/assets/index.css";
import {menuData} from "../data/menuData";

const recursiveMenu = (menuParentId = -1) => { // 해당 함수는 매개변수로 받은 menuParentId와 일치하는 것들만 고려된다

    const checkHavingChild = (menuId) => {
        let cnt = 0;
        for (const menuDatum of menuData) {
            if (menuDatum.menuParentId === Number(menuId)) cnt++;
        }
        return cnt > 1;
    }

    return (
        <>
            {
                menuData.filter((menu) => menu.menuParentId === menuParentId)
                    .map((menu) => {
                        if (checkHavingChild(menu.menuId)) {
                            return <SubMenu title={menu.menuNm} key={menu.menuNm}>{recursiveMenu(menu.menuId)}</SubMenu>
                        } else {
                            return <MenuItem className={"prevent-select"} key={menu.menuNm}>{menu.menuNm}</MenuItem>
                        }
                    })
            }
        </>
    );
};

const HorizantalMenu = () => {
    return (
        <Menu className={"menu"} mode={"horizontal"} style={{marginTop: "0"}}>
            {recursiveMenu()}
        </Menu>
    );
};

export default HorizantalMenu;
 