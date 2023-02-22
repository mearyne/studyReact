import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import {
    Column,
    DataGrid, Selection
} from 'devextreme-react/data-grid';
import {useDispatch, useSelector} from "react-redux";
import {changeSelected} from "../../reducer/selectedSlice";

const DataApi = () => {
    const dispatch = useDispatch();

    let value = useSelector(state => state.userDataAsync.value);
    const onSelectionChanged = (e) => {
        // const currentSelectedRowKeys = e.currentSelectedRowKeys;
        // const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
        const allSelectedRowKeys = e.selectedRowKeys;
        // const allSelectedRowsData = e.selectedRowsData;
        dispatch(changeSelected(allSelectedRowKeys));

    }

    return (
        <div>
            <DataGrid id="dataGrid"
                      dataSource={value}
                      onSelectionChanged={onSelectionChanged}
                      columnAutoWidth={true}
            >
                <Selection mode={"multiple"}/>
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
