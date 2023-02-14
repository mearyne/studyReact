import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {ProSidebarProvider} from "react-pro-sidebar";
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
        {/*    <App/>*/}
        {/*</Provider>*/}
        <ProSidebarProvider>
            <App/>
        </ProSidebarProvider>
    </React.StrictMode>
);
