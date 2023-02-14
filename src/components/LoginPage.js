import {Box, Container, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color={"text.secondary"} align={"center"} {...props}>

            {'Copyright c'}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'Column',
                        alignItems: 'center',
                    }}
                >

                </Box>
            </Container>
        </ThemeProvider>
    )

};
