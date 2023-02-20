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
import {useDispatch} from "react-redux";
import {add, asyncUser, init} from "../../reducer/userDataAsync";
import DataApi from "./DataApi";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContext from "@mui/material/Dialog/DialogContext";
import {DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import TextBox from "../mui/TextBox";


export default function Buttons() {
    let dispatch = useDispatch();
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const onInit = () => {
        dispatch(init());
    }

    return (
        <div>
            <Stack spacing={0.5} direction="row">
                <Button variant="outlined" onClick={onInit} startIcon={<DeleteIcon/>}>초기화</Button>
                <Button variant="outlined" onClick={() => {
                    dispatch(asyncUser());
                }} startIcon={<SearchOutlinedIcon/>}>조회</Button>
                <Button variant="outlined" onClick={handleDialogOpen}
                        startIcon={<AddCircleOutlineOutlinedIcon/>}>추가</Button>
                <Button variant="outlined" onClick={onInit} startIcon={<ArticleOutlinedIcon/>}>수정</Button>
                <Button variant="outlined" onClick={onInit} startIcon={<HighlightOffOutlinedIcon/>}>삭제</Button>
                <Button variant="outlined" startIcon={<PrintOutlinedIcon/>} disabled>인쇄</Button>
                <Button variant="outlined" startIcon={<IosShareOutlinedIcon/>} disabled>내보내기</Button>
                <Button variant="outlined" startIcon={<GetAppOutlinedIcon/>} disabled>가져오기</Button>
                <Button variant="outlined" startIcon={<EmailOutlinedIcon/>} disabled>메일</Button>
                <Button variant="outlined" startIcon={<SmsOutlinedIcon/>} disabled>SMS</Button>

                <Dialog open={dialogOpen} onClose={handleDialogClose}>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        dispatch(add(event.target.elements));
                        handleDialogClose();
                    }}>
                        <DialogTitle>유저 등록</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                유저 정보를 입력하시오
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="id"
                                label="id"
                                fullWidth
                                variant="standard"
                                required={true}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                label="Email"
                                variant="standard"
                                fullWidth
                                required
                            />
                            <TextField
                                margin="dense"
                                id="first_name"
                                label="First Name"
                                fullWidth
                                variant="standard"
                                required={true}
                            />
                            <TextField
                                margin="dense"
                                id="last_name"
                                label="Last Name"
                                fullWidth
                                variant="standard"
                                required={true}
                            />
                            <TextField
                                margin="dense"
                                id="avatar"
                                label="Avatar"
                                fullWidth
                                variant="standard"
                                required={true}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Stack>


            <DataApi/>
        </div>
    );
}

