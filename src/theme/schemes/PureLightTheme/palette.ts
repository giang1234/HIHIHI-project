import { PaletteOptions } from '@mui/material';
import { baseColors } from './baseColors';

export const palette: PaletteOptions = {
    common: {
        black: baseColors.alpha.black[100],
        white: baseColors.alpha.white[100]
    },
    mode: 'light',
    primary: {
        light: baseColors.primary.light,
        main: baseColors.primary.main,
        dark: baseColors.primary.dark
    },
    secondary: {
        light: baseColors.secondary.light,
        main: baseColors.secondary.main,
        dark: baseColors.secondary.dark
    },
    error: {
        light: baseColors.error.light,
        main: baseColors.error.main,
        dark: baseColors.error.dark,
        contrastText: baseColors.alpha.white[100]
    },
    success: {
        light: baseColors.success.light,
        main: baseColors.success.main,
        dark: baseColors.success.dark,
        contrastText: baseColors.alpha.white[100]
    },
    info: {
        light: baseColors.info.light,
        main: baseColors.info.main,
        dark: baseColors.info.dark,
        contrastText: baseColors.alpha.white[100]
    },
    warning: {
        light: baseColors.warning.light,
        main: baseColors.warning.main,
        dark: baseColors.warning.dark,
        contrastText: baseColors.alpha.white[100]
    },
    grey: {
        50: '#FBFBFB',
        100: '#F3F5F6',
        200: '#E8EAED',
        300: '#DCE0E5',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161'
    },
    text: {
        primary: baseColors.alpha.black[100],
        secondary: baseColors.alpha.black[70],
        disabled: baseColors.alpha.black[50]
    },
    background: {
        paper: baseColors.alpha.white[100],
        default: baseColors.layout.general.bodyBg
    },
    action: {
        active: baseColors.alpha.black[100],
        hover: baseColors.primary.lighter,
        hoverOpacity: 0.1,
        selected: baseColors.alpha.black[10],
        selectedOpacity: 0.1,
        disabled: baseColors.alpha.black[50],
        disabledBackground: baseColors.alpha.black[5],
        disabledOpacity: 0.38,
        focus: baseColors.alpha.black[10],
        focusOpacity: 0.05,
        activatedOpacity: 0.12
    },
    tonalOffset: 0.5
}