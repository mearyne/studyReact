import {Route, Routes} from "react-router-dom";
import {menuData} from "../data/menuData";

const Mains = () => {
    return (
        <main>
            <Routes>
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
