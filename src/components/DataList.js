import React from 'react';
import 'devextreme/dist/css/dx.light.css';

import {
    Column,
    DataGrid
} from 'devextreme-react/data-grid';

import {contents} from './data/contents'
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useSelector} from "react-redux";


const DataList = () => {
    let status = useSelector(state => state.userData.status);
    let value = useSelector(state => state.userData.status);


    return (
        <DataGrid id="dataGrid"
                  dataSource={value}>
            {/* Configuration goes here */}
            <Column dataField="id"/>
            <Column dataField="email"/>
        </DataGrid>
    )
};

export default DataList;