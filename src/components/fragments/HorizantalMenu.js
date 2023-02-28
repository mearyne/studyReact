import Menu, {MenuItem, SubMenu} from "rc-menu";
import "rc-menu/assets/index.css";
import {menuData} from "../data/menuData";

const recursiveMenu = (menuId) => {

    const checkHavingChild = (menu) => {
        let cnt = 0;
        for (const menuDatum of menuData) {
            if (menuDatum.menuId === Number(menu.menuId)) cnt++;
        }
        return cnt > 1;
    }

    return (
        <>
            {
                // menuData.map((menu, idx) => {
                //     return <MenuItem className={"prevent-select"} key={idx} onClick={() => {
                //         alert('Good!');
                //     }
                //     }>{menu.path}</MenuItem>
                // })

                menuData.map((menu, idx) => {
                    if (checkHavingChild(menu)) {
                        return <SubMenu title={menu.menuNm} key={idx}>recursiveMenu(menu.menuId)</SubMenu>
                    } else {
                        return <MenuItem className={"prevent-select"} key={idx}>{menu.menuNm}</MenuItem>
                    }
                })
            }
        </>
    );
};


const HorizantalMenu = () => {
    return (
        <Menu className={"menu"} mode={"horizontal"} style={{marginTop: "0"}}>
            {/*{*/}
            {/*    menuData.map((menu, idx) => {*/}
            {/*        return <MenuItem className={"prevent-select"} key={idx} onClick={() => {*/}
            {/*            alert('Good!');*/}
            {/*        }*/}
            {/*        }>{menu.path}</MenuItem>*/}
            {/*    })*/}
            {/*}*/}
            {recursiveMenu()}

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

        </Menu>
    );
};

export default HorizantalMenu;
 