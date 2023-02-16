import TextBox from "../mui/TextBox";

const TextType = () => {

    return (
        <div className="searchOptionField">
            <TextBox text="프로젝트 번호"/>
            <TextBox text="발주번호"/>
            <TextBox text="발주담당자"/>
            <TextBox text="구매요청자"/>
            <TextBox text="파트번호"/>
            <TextBox text="파트명"/>
            <TextBox text="파트규격"/>
        </div>
    )
};

export default TextType
