import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
    Column,
    DataGrid
} from 'devextreme-react/data-grid';
import {useDispatch, useSelector} from "react-redux";
import {add, asyncUser, hey, init, remove} from "../../reducer/userDataAsync";

function DeleteIcon() {
    return null;
}

const DataApi = () => {
    let value = useSelector(state => state.userDataAsync.value);
    let dispatch = useDispatch();

    const dummyData = {
        id: "1",
        email: "mearyne@naver.com",
        first_name: "Lee",
        last_name: "Jung mok",
        avatar: "http://dummy"
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => {
                dispatch(init());
            }} startIcon={<DeleteIcon/>}>초기화</Button>
            <Button variant="outlined" onClick={() => {
                dispatch(asyncUser());
            }} startIcon={<SearchOutlinedIcon/>}>조회</Button>
            <Button variant="outlined" onClick={() => {
                dispatch(add(dummyData));
            }}>추가</Button>
            <Button variant="outlined" onClick={() => {
                dispatch(hey(1));
            }}>삭제</Button>
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
