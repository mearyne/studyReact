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

export const menuData = [
    {
        path: "before",
        element: <Before/>
    },
    {
        path: "buttons",
        element: <Buttons/>
    },
    {
        path: "data",
        element: <Data/>
    },
    {
        path: "customizedSnackbars",
        element: <CustomizedSnackbars/>
    },
    {
        path: "dataApi",
        element: <DataApi/>
    },
    {
        path: "badgeVisibility",
        element: <BadgeVisibility/>
    },
    {
        path: "textType",
        element: <TextType/>
    },
    {
        path: "option-select",
        element: <OptionSelect/>
    },
    {
        path: "day",
        element: <Day/>
    },
    {
        path: "autoComplete",
        element: <AutoComplete/>
    },
]
