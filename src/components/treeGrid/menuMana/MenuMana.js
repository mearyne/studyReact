import React from 'react';

import TreeList, {
    Column, HeaderFilter, SearchPanel, Selection
} from 'devextreme-react/tree-list';
import {menuData} from "../../data/menuData";


const MenuMana = () => {


    return (
        <TreeList
            dataSource={menuData}
            showBorders={true} // 가장 바깥선 경계선 표시 여부
            columnAutoWidth={true} // column 자동 크기 조절
            wordWrapEnabled={true} // 단어 자동 줄넘기기 여부
            parentIdExpr="Task_Parent_ID" // 누군가의 자식인지 기준점
            id="menu"
        >
            <SearchPanel visible={true} width={250}/>
            <HeaderFilter visible={true}/>
            <Selection mode="multiple"/>

            <Column dataField="menuNmKr"
                    width={300}
                    caption="메뉴명"
            />
            <Column
                dataField="menuNmEn"
                caption="메뉴명(영문)"
            />
            <Column
                dataField="menuNmJp"
                caption="메뉴명(일문)"
            />
            <Column
                dataField="menuNmCn"
                caption="메뉴명(중문)"
            />
            <Column
                dataField="url"
            />
            <Column
                dataField="note"
                caption="비고"
                minWidth={100}
            />
            <Column
                dataField="usedYn"
                caption="사용여부"
            />

        </TreeList>
    );
};

export default MenuMana;
