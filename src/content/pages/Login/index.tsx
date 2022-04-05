import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme: any = createTheme();

export default function Login(): JSX.Element {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md">
                    <Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '15%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textAlign: 'center'
                        }}>
                            <Box sx={{ mt: 5 }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '25px', color: '#0056A8' }}>
                                    NON-RESIDENTIAL GW REMOTE CONTROL SYSTEM
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}