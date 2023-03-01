import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {ProSidebarProvider} from "react-pro-sidebar";
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ProSidebarProvider>
                <BrowserRouter>
                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
                    >
                        <App/>
                    </DevSupport>
                </BrowserRouter>
            </ProSidebarProvider>
        </Provider>
    </React.StrictMode>
);
