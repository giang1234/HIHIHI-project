import { alpha, lighten, darken } from '@mui/material';
import { baseColors } from './baseColors';
import { themeColors } from './themeColors';

export const colors = {
    gradients: {
        blue1: baseColors.gradients.blue1,
        blue2: baseColors.gradients.blue2,
        blue3: baseColors.gradients.blue3,
        orange1: baseColors.gradients.orange1,
        orange2: baseColors.gradients.orange2,
        purple1: baseColors.gradients.purple1,
        pink1: baseColors.gradients.pink1,
        pink2: baseColors.gradients.pink2,
        green1: baseColors.gradients.green1,
        black1: baseColors.gradients.black1
    },
    shadows: {
        success: baseColors.shadows.success,
        error: baseColors.shadows.error,
        primary: baseColors.shadows.primary,
        warning: baseColors.shadows.warning
    },
    alpha: {
        white: {
            5: alpha(themeColors.white, 0.02),
            10: alpha(themeColors.white, 0.1),
            30: alpha(themeColors.white, 0.3),
            50: alpha(themeColors.white, 0.5),
            70: alpha(themeColors.white, 0.7),
            100: themeColors.white
        },
        trueWhite: {
            5: alpha(themeColors.white, 0.02),
            10: alpha(themeColors.white, 0.1),
            30: alpha(themeColors.white, 0.3),
            50: alpha(themeColors.white, 0.5),
            70: alpha(themeColors.white, 0.7),
            100: themeColors.white
        },
        black: {
            5: alpha(themeColors.black, 0.02),
            10: alpha(themeColors.black, 0.1),
            30: alpha(themeColors.black, 0.3),
            50: alpha(themeColors.black, 0.5),
            70: alpha(themeColors.black, 0.7),
            100: themeColors.black
        }
    },
    secondary: {
        lighter: alpha(themeColors.secondary, 0.1),
        light: lighten(themeColors.secondary, 0.3),
        main: themeColors.secondary,
        dark: darken(themeColors.secondary, 0.2)
    },
    primary: {
        lighter: alpha(themeColors.primary, 0.1),
        light: lighten(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: darken(themeColors.primary, 0.2)
    },
    success: {
        lighter: alpha(themeColors.success, 0.1),
        light: lighten(themeColors.success, 0.3),
        main: themeColors.success,
        dark: darken(themeColors.success, 0.2)
    },
    warning: {
        lighter: alpha(themeColors.warning, 0.1),
        light: lighten(themeColors.warning, 0.3),
        main: themeColors.warning,
        dark: darken(themeColors.warning, 0.2)
    },
    error: {
        lighter: alpha(themeColors.error, 0.1),
        light: lighten(themeColors.error, 0.3),
        main: themeColors.error,
        dark: darken(themeColors.error, 0.2)
    },
    info: {
        lighter: alpha(themeColors.info, 0.1),
        light: lighten(themeColors.info, 0.3),
        main: themeColors.info,
        dark: darken(themeColors.info, 0.2)
    }
}