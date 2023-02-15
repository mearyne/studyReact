import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {
    Column,
    DataGrid
} from 'devextreme-react/data-grid';

import {useDispatch, useSelector} from "react-redux";
import {asyncUser} from "../../reducer/userDataAsync";

const DataApi = () => {
    let value = useSelector(state => state.userDataAsync.value);

    let dispatch = useDispatch();

    return (
        <div>
            <Button variant="outlined" onClick={() => {
                dispatch(asyncUser());
            }} startIcon={<SearchOutlinedIcon/>}>조회</Button>
            <DataGrid id="dataGrid"
                      dataSource={value}>
                <Column dataField="id"/>
                <Column dataField="email"/>
                <Column dataField="first_name"/>
                <Column dataField="last_name"/>
                <Column dataField="avatar"/>
            </DataGrid>

        </div>
    )
};

export default DataApi;
