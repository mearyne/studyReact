import {Route, Routes} from "react-router-dom";
import Before from "../mainComponent/Before";
import Data from "../mainComponent/Data";
import Buttons from "../mainComponent/Buttons"
import Input from "../mainComponent/Input";
import DataApi from "../mainComponent/DataApi";
import CustomizedSnackbars from "../mainComponent/CustomizedSnackbars";
import BadgeVisibility from "../mainComponent/Badge";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/before" element={<Before/>}></Route>
                <Route path="/buttons" element={<Buttons/>}></Route>
                <Route path="/input" element={<Input/>}></Route>
                <Route path="/data" element={<Data/>}></Route>
                <Route path="/dataApi" element={<DataApi/>}></Route>
                <Route path="/customizedSnakebars" element={<CustomizedSnackbars/>}></Route>
                <Route path="/badgeVisibility" element={<BadgeVisibility/>}></Route>
            </Routes>

        </main>
    )
};

export default Main
