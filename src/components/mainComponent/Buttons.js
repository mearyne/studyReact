import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {useDispatch} from "react-redux";
import {asyncUser} from "../../reducer/userDataAsync";


export default function Buttons() {
    let dispatch = useDispatch();

    const alerts = () => {
        alert("삭제 안됨!");
    };

    return (
        <Stack spacing={0.5} direction="row">
            <Button variant="outlined" startIcon={<DeleteIcon/>}>초기화</Button>
            <Button variant="outlined" onClick={() => {
                dispatch(asyncUser());
            }} startIcon={<SearchOutlinedIcon/>}>조회</Button>
            <Button variant="outlined" startIcon={<AddCircleOutlineOutlinedIcon/>}>추가</Button>
            <Button variant="outlined" startIcon={<ArticleOutlinedIcon/>}>수정</Button>
            <Button variant="outlined" onClick={alerts} startIcon={<HighlightOffOutlinedIcon/>}>삭제</Button>
            <Button variant="outlined" startIcon={<PrintOutlinedIcon/>}>인쇄</Button>
            <Button variant="outlined" startIcon={<IosShareOutlinedIcon/>}>내보내기</Button>
            <Button variant="outlined" startIcon={<GetAppOutlinedIcon/>}>가져오기</Button>
            <Button variant="outlined" startIcon={<EmailOutlinedIcon/>}>메일</Button>
            <Button variant="outlined" startIcon={<SmsOutlinedIcon/>} disabled>SMS</Button>
            <Button variant="outlined" startIcon={<SendOutlinedIcon/>} disabled>결재</Button>
        </Stack>
    );
}

