import {Route, Routes} from "react-router-dom";
import Before from "../mainComponent/Before";
import Data from "../mainComponent/Data";
import Buttons from "../mainComponent/Buttons"
import DataApi from "../mainComponent/DataApi";
import CustomizedSnackbars from "../mainComponent/CustomizedSnackbars";
import BadgeVisibility from "../mainComponent/Badge";
import OptionSelect from "../mainComponent/OptionSelect";
import Day from "../mainComponent/Day";
import TextType from "../mainComponent/TextType";
import AutoComplete from "../mui/AutoComplete";
import {menuData} from "../data/menuData";


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/before" element={<Before/>}></Route>
                <Route path="/buttons" element={<Buttons/>}></Route>
                <Route path="/data" element={<Data/>}></Route>
                <Route path="/dataApi" element={<DataApi/>}></Route>
                <Route path="/customizedSnakebars" element={<CustomizedSnackbars/>}></Route>
                <Route path="/badgeVisibility" element={<BadgeVisibility/>}></Route>
                <Route path="/textType" element={<TextType/>}></Route>
                <Route path="/option-select" element={<OptionSelect/>}></Route>
                <Route path="/day" element={<Day/>}></Route>
                <Route path="/autoComplete" element={<AutoComplete/>}></Route>
                {/*{*/}
                {/*    menuData.map((el, index) =>*/}
                {/*        <Route key={index} path={'/' + el.path} element={`{<${el.element}/>}`}/>*/}
                {/*    )*/}
                {/*}*/}
            </Routes>

        </main>
    )
};

export default Main
