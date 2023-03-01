import TreeList, {HeaderFilter, SearchPanel} from "devextreme-react/tree-list";
import {menuData} from "TreeList"

const dataSource = {}

export default function TreeListTemplate(props) {

    return (
        <TreeList
            dataSource={props.dataSource}
            columnAutoWidth={true}
            wordWrapEnabled={true}
            keyExpr={props.keyExpr}
            parentIdExpr={props.parentIdExpr}
            id={props.id}
        >
            <SearchPanel visible={true} width={250} />
            <HeaderFilter visible={true} />



        </TreeList>

    );
};
