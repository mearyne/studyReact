import Main from "./Main";
import SideMenu from "./SideMenu";

const Body = () => {
    return (
        <div style={({display: "flex", height: "100vh"})}>
            <SideMenu/>
            <Main/>
        </div>
    )
};

export default Body;
