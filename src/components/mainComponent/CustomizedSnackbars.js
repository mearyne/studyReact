import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = props => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Button variant="outlined" onClick={handleClick}>
                {props.snackbar}
            </Button>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.snackbar} sx={{width: '100%'}}>
                    This is a {props.snackbar} message!
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default function CustomizedSnackbars() {
    return (
        <div>
            <CustomizedSnackbar snackbar="success"/>
            <CustomizedSnackbar snackbar="error"/>
            <CustomizedSnackbar snackbar="warning"/>
            <CustomizedSnackbar snackbar="info"/>
        </div>
    )
        ;
};
