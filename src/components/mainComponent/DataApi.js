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
    const selected = useSelector(state => state.selected.value);
    const onSelectionChanged = (e) => {
        // const currentSelectedRowKeys = e.currentSelectedRowKeys;
        // const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
        const allSelectedRowKeys = e.selectedRowKeys;
        // const allSelectedRowsData = e.selectedRowsData;
        dispatch(changeSelected(allSelectedRowKeys));

        console.log('이벤트로관리되는 selected: ', allSelectedRowKeys);
        console.log('state관리되는 selected: ', selected);

    }

    return (
        <div>
            <DataGrid id="dataGrid"
                      dataSource={value}
                      onSelectionChanged={onSelectionChanged}
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
