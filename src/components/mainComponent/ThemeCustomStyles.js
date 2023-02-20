import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
        color: theme.status.danger,
    },
}));

export default function CustomStyles() {
    return (
        <ThemeProvider theme={theme}>
            <CustomCheckbox defaultChecked />
        </ThemeProvider>
    );
}