import { createTheme } from '@mui/material';
import '@mui/lab/themeAugmentation';
import { baseColors } from './baseColors';
import { colors } from './colors';
import { sidebar } from './sidebar';
import { palette } from './palette';
import { components } from './components';
import { typography } from './typography';

export const PureLightTheme = createTheme({
    colors: colors ,
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '4px',
        borderRadius: '6px',
        borderRadiusLg: '10px',
        borderRadiusXl: '18px'
    },
    sidebar: sidebar,
    header: {
        height: 'auto',
        background: baseColors.alpha.white[100],
        boxShadow: baseColors.shadows.cardSm,
        textColor: baseColors.secondary.main
    },
    spacing: 8,
    palette: palette ,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840
        }
    },
    components: components ,
    shape: {
        borderRadius: 6
    },
    typography: typography ,
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none'
    ]
});
