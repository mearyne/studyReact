import Main from "./Main";
import SideMenu from "./SideMenu";

const Body = () => {
    return (
        <div id="app" style={({height: "100vh"}, {display: "flex"})}>
            <SideMenu/>
            <Main/>
        </div>
    )
};

export default Body;
