import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import Weight from "./components/Weight";
import WeightButton from "./components/WeightButton";
import Snack from "./components/Snack";
import SnackButton from "./components/SnackButton";
import CounterSlice from "./components/CounterSlice";
import CounterButtonSlice from "./components/CounterButtonSlice";
import CounterAsync from "./components/CounterAsync";
import ActiveUsers from "./components/ActiveUsers";
import UseMemoTest from "./components/UseMemoTest";
import ExperimentalAPIButton from "./components/ExperimentalAPIButton"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {Menu, MenuItem, Sidebar, useProSidebar} from "react-pro-sidebar";
import Button from "./components/mui/Button";
import Header from "./components/Header";
import TextBox from "./components/mui/TextBox";
import './custom.css'
import NativeSelectDemo from "./components/mui/NativeSelectDemo";
import NativePickers from "./components/mui/NativePickers";
import LoadingButtonsTransition from "./components/mui/LoadingButton";
import React from 'react';
import Chart, {
    ArgumentAxis,
    Series,
    Legend
} from 'devextreme-react/chart';
import DataList from "./components/DataList";


const data = [{
    arg: 1990,
    val: 5320816667
}, {
    arg: 2000,
    val: 6127700428
}, {
    arg: 2010,
    val: 6916183482
}];

function App() {
    const {collapseSidebar} = useProSidebar();
    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<CounterButton/>*/}
            {/*<Weight/>*/}
            {/*<WeightButton/>*/}
            {/*<Snack/>*/}
            {/*<SnackButton/>*/}
            {/*<CounterSlice/>*/}
            {/*<CounterButtonSlice/>*/}
            {/*<CounterAsync/>*/}
            {/*<ActiveUsers/>*/}
            {/*<UseMemoTest/>*/}
            {/*<ExperimentalAPIButton />*/}

            <div id="app" style={({height: "100vh"}, {display: "flex"})}>
                <Sidebar style={{height: "100vh"}}>
                    <Menu>
                        <MenuItem
                            icon={<MenuOutlinedIcon/>}
                            onClick={() => {
                                collapseSidebar();
                            }}
                            style={{textAlign: "center"}}
                        >
                            {" "}
                            <h2>메뉴바</h2>
                        </MenuItem>
                        <MenuItem icon={<PeopleOutlinedIcon/>}>Home</MenuItem>

                        <MenuItem icon={<ContactsOutlinedIcon/>}>Team</MenuItem>
                        <MenuItem icon={<ReceiptOutlinedIcon/>}>Contacts</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon/>}>FAQ</MenuItem>
                        <MenuItem icon={<CalendarTodayOutlinedIcon/>}>Calendar</MenuItem>
                    </Menu>

                </Sidebar>

                <main>
                    <h3>Part 발주/납품 정보</h3>

                    {/*<Button/>*/}

                    <div className="searchOptionField">
                        <TextBox text="프로젝트 번호"/>
                        <TextBox text="발주번호"/>
                        <TextBox text="발주담당자"/>
                        <TextBox text="구매요청자"/>
                        <TextBox text="파트번호"/>
                        <TextBox text="파트명"/>
                        <TextBox text="파트규격"/>
                    </div>

                    <div className="searchOptionField">
                        <NativeSelectDemo/>
                        <NativePickers/>
                    </div>

                    <LoadingButtonsTransition/>

                    <div className="dataGrid">
                        <Chart dataSource={data}>
                            <ArgumentAxis tickInterval={10}/>
                            <Series type="bar"/>
                            <Legend visible={false}/>
                        </Chart>
                    </div>

                    {/*<DataList/>*/}

                </main>


            </div>


        </div>
    );

}

export default App;
