import { Button, ListItem } from "@mui/material";
import { NavLink as RouterLink } from 'react-router-dom';
import Box from "@mui/material/Box";
import { t } from "i18next";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from 'src/store/app';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface PropsInterface {
    data: any // Add modal interface
    isReload: boolean
}

const BreadcrumbContainer = (props: PropsInterface): JSX.Element => {
    const {data, isReload, ...propsData} = props;
    const dispatch = useDispatch();
    const appBr: any[] = useSelector(selectors.breadcrumdSelector);
    useMemo(() => {
        let dataBr = [...appBr, data];
        dispatch(actions.updateBrSuccess(dataBr));
    }, [isReload]);
    
    return <>
        <Box sx={{ display: 'flex', alignItems:'center' }}>
            {
                appBr.map((v: any, index: number): JSX.Element => {
                    return <Box key={'breacdcrumd_' + index} sx={{display: 'flex', alignItems: 'center'}}>
                        <ListItem component="div" {...propsData}>
                            {v.url ?
                            <Button
                                component={RouterLink}
                                to={v.url}
                                color='primary'
                                sx={{ padding: '0 10px!important', fontSize: '12px!important' }}
                            >
                                {t(`trans_menu.${v.name}`)}
                            </Button> : <span>{v.name}</span>}
                        </ListItem>
                        {index < appBr.length - 1 && <ChevronRightIcon />}
                    </Box>
                })
            }
        </Box>
    </>
};

export default BreadcrumbContainer;