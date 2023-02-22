import Mains from "./Mains";
import MenuHistory from "./MenuHistory";


const Body = () => {
    return (
        <div style={({display: "flex", flexDirection: "column", height: "100vh"})}>
            {/*<SideMenu/>*/}
            <MenuHistory style={{ height: "100px"}} />
            <hr style={{broder: "10px"}}/>
            <Mains/>
        </div>
    )
};

export default Body;
