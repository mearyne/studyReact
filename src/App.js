
import './custom.css'
import React from 'react';
import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import Body from "./components/fragments/Body";

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );

}

export default App;
