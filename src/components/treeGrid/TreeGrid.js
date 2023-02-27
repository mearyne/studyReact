import React from 'react';

import {Template} from 'devextreme-react/core/template';
import TreeList, {
    Column, HeaderFilter, SearchPanel, Selection, Lookup,
} from 'devextreme-react/tree-list';

import {employees, priorities, tasks} from './data.js';
import EmployeeCell from './EmployeeCell.js';

const expandedKeys = [1, 2];
const selectedKeys = [1, 29, 42];

const TreeGrid = () => {


    return (
        <TreeList
            dataSource={dataSourceOptions}
            showBorders={true} // 가장 바깥선 경계선 표시 여부
            columnAutoWidth={true} // column 자동 크기 조절
            wordWrapEnabled={true} // 단어 자동 줄넘기기 여부
            defaultExpandedRowKeys={expandedKeys} // 기본적으로 열려있는 키
            defaultSelectedRowKeys={selectedKeys} // 기본적으로 선택되어 있는 키
            keyExpr="Task_ID" // 컬럼의 ID 기준점
            parentIdExpr="Task_Parent_ID" // 누군가의 자식인지 기준점
            id="tasks"
        >
            <SearchPanel visible={true} width={250}/>
            <HeaderFilter visible={true}/>
            <Selection mode="multiple"/>

            <Column dataField="Task_Subject" width={300}/>
            <Column
                dataField="Task_Assigned_Employee_ID"
                caption="Assigned"
                allowSorting={true}
                minWidth={200}
                cellTemplate="employeeTemplate"
            >
                <Lookup dataSource={employees} displayExpr="Name" valueExpr="ID"/>
            </Column>
            <Column
                dataField="Task_Status"
                caption="Status"
                minWidth={100}
            >
                <Lookup dataSource={statuses}/>
            </Column>
            <Column
                dataField="Task_Priority"
                caption="Priority"
                visible={false}
            >
                <Lookup dataSource={priorities} valueExpr="id" displayExpr="value"/>
            </Column>
            <Column
                dataField="Task_Completion"
                caption="% Completed"
                minWidth={100}
                customizeText={customizeTaskCompletionText}
                visible={false}
            />
            <Column
                dataField="Task_Start_Date"
                caption="Start Date"
                dataType="date"
            />
            <Column
                dataField="Task_Due_Date"
                caption="Due Date"
                dataType="date"
            />

            <Template name="employeeTemplate" render={EmployeeCell}/>
        </TreeList>
    );
};

const dataSourceOptions = {
    store: tasks.map((task) => {
        employees.forEach((employee) => {
            if (task.Task_Assigned_Employee_ID === employee.ID) {
                task.Task_Assigned_Employee = employee;
            }
        });
        return task;
    }),
};

function customizeTaskCompletionText(cellInfo) {
    return `${cellInfo.valueText}%`;
}

const statuses = [
    'Not Started',
    'Need Assistance',
    'In Progress',
    'Deferred',
    'Completed',
];

export default TreeGrid;