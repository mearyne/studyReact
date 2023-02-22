import {Route, Routes} from "react-router-dom";
import {menuData} from "../data/menuData";

const Mains = () => {
    return (
        <main>
            <Routes>
                {/*<Route path="/before" element={<Before/>}></Route>*/}
                {/*<Route path="/buttons" element={<Buttons/>}></Route>*/}
                {/*<Route path="/data" element={<Data/>}></Route>*/}
                {/*<Route path="/dataApi" element={<DataApi/>}></Route>*/}
                {/*<Route path="/customizedSnakebars" element={<CustomizedSnackbars/>}></Route>*/}
                {/*<Route path="/badgeVisibility" element={<BadgeVisibility/>}></Route>*/}
                {/*<Route path="/textType" element={<TextType/>}></Route>*/}
                {/*<Route path="/option-select" element={<OptionSelect/>}></Route>*/}
                {/*<Route path="/day" element={<Day/>}></Route>*/}
                {/*<Route path="/autoComplete" element={<AutoComplete/>}></Route>*/}
                {
                    menuData.map(({path, element}) =>
                        <Route exact key={path} path={path} element={element}></Route>
                    )
                }
            </Routes>
        </main>
    )
};

export default Mains
