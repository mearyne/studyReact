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
import {useDispatch, useSelector} from "react-redux";
import {add, asyncUser, init, remove, update} from "../../reducer/userDataAsync";
import DataApi from "./DataApi";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";


export default function Buttons() {
    let dispatch = useDispatch();

    const selected = useSelector(state => state.selected.value);
    const datas = useSelector(state => state.userDataAsync.value);

    const [addDialogStatus, setAddDialogStatus] = React.useState(false);
    const [updateDialogStatus, setUpdateDialogStatus] = React.useState(false);
    const [maxId, setMaxId] = React.useState(1);
    const [selectedData, setSelectedData] = React.useState({});

    const onAdd = () => {
        getMaxId();
        setAddDialogStatus(true);
    };

    const updateOpen = () => {
        setUpdateDialogStatus(true);
    };

    const addClose = () => {
        setAddDialogStatus(false);
    };

    const updateClose = () => {
        setUpdateDialogStatus(false);
    }

    const onInit = () => {
        dispatch(init());
    }

    const onSearch = () => {
        dispatch(asyncUser());
    };

    const onDelete = () => {
        dispatch(remove(selected));
    };

    const onUpdate = () => {
        if (selected.length > 1) {
            alert('????????? ??????????????????');
        } else if (selected.length === 0) {
            alert('????????? ????????? ??????????????????');
        } else {
            setSelectedData(selected[0]);
            updateOpen();
        }
    };

    /**
     * ?????? ????????? ???????????? ?????? ????????? id?????? ???????????? ??????
     */
    const getSelectedId = () => {
        if (selected.length === 0) {
            return -1;
        }
        return selected[0].id;
    };


    /**
     * ?????? ???????????? id?????? data.id????????? '?????? ??? ???+1'?????? ?????????
     */
    function getMaxId() {
        let max = 0;
        if (datas.length > 0) {
            for (let i = 0; i < datas.length; i++) {
                if (max < Number(datas[i].id)) { // id ?????? String??? ??? ?????? ????????? ??????????????? ????????????
                    max = Number(datas[i].id);
                    setMaxId(max + 1);
                }
            }
        }
    }

    return (
        <div>
            <Stack spacing={0.5} direction="row">
                <Button variant="outlined" onClick={onInit} startIcon={<DeleteIcon/>}>?????????</Button>
                <Button variant="outlined" onClick={onSearch} startIcon={<SearchOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" onClick={onAdd} startIcon={<AddCircleOutlineOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" onClick={onUpdate} startIcon={<ArticleOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" onClick={onDelete} startIcon={<HighlightOffOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" disabled startIcon={<PrintOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" disabled startIcon={<IosShareOutlinedIcon/>}>????????????</Button>
                <Button variant="outlined" disabled startIcon={<GetAppOutlinedIcon/>}>????????????</Button>
                <Button variant="outlined" disabled startIcon={<EmailOutlinedIcon/>}>??????</Button>
                <Button variant="outlined" disabled startIcon={<SmsOutlinedIcon/>}>SMS</Button>
            </Stack>

            <Dialog open={addDialogStatus} onClose={addClose}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(add(event.target.elements));
                    addClose();
                }}>
                    <DialogTitle><h1>?????? ??????</h1></DialogTitle>
                    <DialogContent>
                        <DialogContentText> ?????? ????????? ???????????????. </DialogContentText>
                        <TextField
                            id="id"
                            value={maxId}
                            style={{display: "none"}}
                        />
                        <TextField
                            autoFocus
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
                            required
                        />
                        <TextField
                            margin="dense"
                            id="last_name"
                            label="Last Name"
                            fullWidth
                            variant="standard"
                            required
                        />
                        <TextField
                            margin="dense"
                            id="avatar"
                            label="Avatar"
                            fullWidth
                            variant="standard"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={addClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <Dialog open={updateDialogStatus} onClose={updateClose}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(update(event.target.elements));
                    updateClose();
                }}>
                    <DialogTitle><h1>?????? ????????????</h1></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ?????? ????????? ???????????????.
                        </DialogContentText>
                        <TextField
                            id="id"
                            value={getSelectedId()}
                            type="hidden"
                            style={{display: "none"}}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            variant="standard"
                            defaultValue={selectedData.email}
                            fullWidth
                            required
                        />
                        <TextField
                            margin="dense"
                            id="first_name"
                            label="First Name"
                            fullWidth
                            variant="standard"
                            defaultValue={selectedData.first_name}
                            required={true}
                        />
                        <TextField
                            margin="dense"
                            id="last_name"
                            label="Last Name"
                            fullWidth
                            variant="standard"
                            defaultValue={selectedData.last_name}
                            required={true}
                        />
                        <TextField
                            margin="dense"
                            id="avatar"
                            label="Avatar"
                            fullWidth
                            variant="standard"
                            defaultValue={selectedData.avatar}
                            required={true}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={updateClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <DataApi/>
        </div>
    );
}

