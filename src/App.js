import Header from "./components/fragments/Header";
import './custom.css'
import React from 'react';
import Body from "./components/fragments/Body";
import Footer from "./components/fragments/Footer";

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
