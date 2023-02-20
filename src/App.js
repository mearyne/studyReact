import Header from "./components/fragments/Header";
import './custom.css'
import React from 'react';
import Body from "./components/fragments/Body";
import Footer from "./components/fragments/Footer";
import {MenuItem, SubMenu} from "rc-menu";
import Menu from "rc-menu/es/Menu";
import MyMenu from "./components/mainComponent/MyMenu";

function App() {
    return (
        <div className="App">
            <Header/>
            <MyMenu/>
            <Body/>
            <Footer/>
        </div>
    );

}

export default App;
