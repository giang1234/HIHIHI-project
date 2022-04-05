import { Box, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Theme } from '@mui/material';

import { styled } from '@mui/material/styles';
import TopMenu from './TopMenu';
import SearchMenu from './SearchMenu';
import RightMenu from './SidebarMenu';

const TabBarContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, $open }: { theme?: Theme, $open: boolean }) => ({
        width: '100%',
        height: theme.header.height,
        color: theme.header.textColor,
        padding: theme.spacing(0, 2),
        zIndex: 5,
        backgroundColor: theme.header.background,
        boxShadow: theme.header.boxShadow,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between'
    }),
);

function TabBar() {
    return (
        <>
            <TabBarContainer $open={true} sx={{display: 'block'}}>
                <Box sx={{display: 'flex'}}>
                    <TopMenu />
                </Box>
                <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                    <Grid item md={2}>
                        <Box className="logo-content">
                            <img src="/static/images/logo/logo.png" height="83px" alt=""/>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ mx: 3}}>
                            <Box className="search-box">
                                <FormControl sx={{ width: '100%'}} variant="outlined" color='primary'>
                                    <InputLabel htmlFor="outlined-adornment-password">Tìm kiếm sản phẩm</InputLabel>
                                    <OutlinedInput
                                        sx={{borderRadius: '15px'}}
                                        id="outlined-adornment-password"
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            >
                                            {
                                                <img src="/static/images/icon/search.png" width="20px" alt=""/>
                                            }
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Tìm kiếm nội dung"
                                    />
                                </FormControl>
                            </Box>
                            <Box className="searchMenu">
                                <SearchMenu />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <RightMenu /> 
                        </Box>
                    </Grid>
                </Grid>
            </TabBarContainer>
        </>
    );
}

export default TabBar;
