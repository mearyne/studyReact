import Before from "../mainComponent/Before";
import Buttons from "../mainComponent/Buttons";
import Data from "../mainComponent/Data";
import CustomizedSnackbars from "../mainComponent/CustomizedSnackbars";
import DataApi from "../mainComponent/DataApi";
import BadgeVisibility from "../mainComponent/Badge";
import TextType from "../mainComponent/TextType";
import OptionSelect from "../mainComponent/OptionSelect";
import Day from "../mainComponent/Day";
import AutoComplete from "../mui/AutoComplete";
import Genshin from "../mainComponent/Genshin";
import TreeGrid from "../treeGrid/TreeGrid";


export const menuData = [
    // {
    //     path: "before",
    //     element: <Before/>
    // },
    // {
    //     path: "buttons",
    //     element: <Buttons/>
    // },
    // {
    //     path: "data",
    //     element: <Data/>
    // },
    // {
    //     path: "customizedSnackbars",
    //     element: <CustomizedSnackbars/>
    // },
    // {
    //     path: "dataApi",
    //     element: <DataApi/>
    // },
    // {
    //     path: "badgeVisibility",
    //     element: <BadgeVisibility/>
    // },
    // {
    //     path: "textType",
    //     element: <TextType/>
    // },
    // {
    //     path: "option-select",
    //     element: <OptionSelect/>
    // },
    // {
    //     path: "day",
    //     element: <Day/>
    // },
    // {
    //     path: "autoComplete",
    //     element: <AutoComplete/>
    // },
    // {
    //     path: "genshin",
    //     element: <Genshin/>
    // },
    // {
    //     path: "treeGrid",
    //     element: <TreeGrid/>
    //
    // }
    {
        menuId: 1,
        menuParentId: -1,
        menuNm: "메뉴명1",
        menuNmEn: "영어메뉴명1",
        menuNmJp: "일어메뉴명1",
        menuNmCn: "중문메뉴명1",
        url: "경로1",
        rema: "비고1",
        usedYn: "사용여부1",
    },
    {
        menuId: 2,
        menuParentId: -1,
        menuNm: "메뉴명2",
        menuNmEn: "영어메뉴명2",
        menuNmJp: "일어메뉴명2",
        menuNmCn: "중문메뉴명2",
        url: "경로2",
        rema: "비고2",
        usedYn: "사용여부2",
    },
    {
        menuId: 3,
        menuParentId: -1,
        menuNm: "메뉴명3",
        menuNmEn: "영어메뉴명3",
        menuNmJp: "일어메뉴명3",
        menuNmCn: "중문메뉴명3",
        url: "경로3",
        rema: "비고3",
        usedYn: "사용여부3",
    },
    {
        menuId: 4,
        menuParentId: 1,
        menuNm: "메뉴명4",
        menuNmEn: "영어메뉴명4",
        menuNmJp: "일어메뉴명4",
        menuNmCn: "중문메뉴명4",
        url: "경로4",
        rema: "비고4",
        usedYn: "사용여부4",
    },
    {
        menuId: 5,
        menuParentId: 1,
        menuNm: "메뉴명5",
        menuNmEn: "영어메뉴명5",
        menuNmJp: "일어메뉴명5",
        menuNmCn: "중문메뉴명5",
        url: "경로5",
        rema: "비고5",
        usedYn: "사용여부5",
    },
    {
        menuId: 6,
        menuParentId: 5,
        menuNm: "메뉴명6",
        menuNmEn: "영어메뉴명6",
        menuNmJp: "일어메뉴명6",
        menuNmCn: "중문메뉴명6",
        url: "경로6",
        rema: "비고6",
        usedYn: "사용여부6",
    },
    {
        menuId: 7,
        menuParentId: 6,
        menuNm: "메뉴명7",
        menuNmEn: "영어메뉴명7",
        menuNmJp: "일어메뉴명7",
        menuNmCn: "중문메뉴명7",
        url: "경로7",
        rema: "비고7",
        usedYn: "사용여부7",
    },
]
