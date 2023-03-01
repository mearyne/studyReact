import {useState} from "react";
import {menuData} from "../data/menuData";
import Button from "@mui/material/Button";

export default function Test1() {
    const [menus, setMenus] = useState(menuData);

    const add = () => {

    };

    const remove = (index) => {
        setMenus(menus.filter(menu => menu.path !== menus[index].path));
    };


    return (
        <div>
            <Button onClick={add}>add</Button>
            <Button></Button>
            <ul>
                {
                    menus.map((menu, index) => <li key={index} onClick={() => {
                        remove(index)
                    }}>{menu.path}</li>)
                }
            </ul>
        </div>
    );

};