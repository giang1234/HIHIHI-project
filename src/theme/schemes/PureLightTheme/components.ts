import { alpha, Components, darken, lighten } from '@mui/material';
import { baseColors } from './baseColors';
import { themeColors } from './themeColors';

export const components: Components = {
    MuiBackdrop: {
        styleOverrides: {
            root: {
                marginTop: '113px',
                backgroundColor: alpha(darken(themeColors.primaryAlt, 0.4), 0.2),
                backdropFilter: 'blur(2px)',

                '&.MuiBackdrop-invisible': {
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(2px)',
                }
            }
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                marginLeft: 8,
                marginRight: 8,
                fontWeight: 'bold'
            }
        }
    },
    MuiCssBaseline: {
        styleOverrides: {
            'html, body, #root': {
                width: '100%',
                height: '100%'
            },
            '#nprogress .bar': {
                background: baseColors.primary.main
            },
            '#nprogress .spinner-icon': {
                borderTopColor: baseColors.primary.main,
                borderLeftColor: baseColors.primary.main
            },
            '#nprogress .peg': {
                boxShadow:
                    '0 0 10px ' +
                    baseColors.primary.main +
                    ', 0 0 5px' +
                    baseColors.primary.main
            },
            ':root': {
                '--swiper-theme-color': baseColors.primary.main
            },
            "*::-webkit-scrollbar": {
                width: "8px"
            },
            "*::-webkit-scrollbar-track": {
                background: "#f2f2f2",
                borderRadius: "3px"
            },
            "*::-webkit-scrollbar-thumb": {
                background: "#d4d4d4",
                borderRadius: "3px"
            },
            code: {
                background: baseColors.info.lighter,
                color: baseColors.info.dark,
                borderRadius: 4,
                padding: 4
            },
            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(.8)',
                    opacity: 1
                },
                '100%': {
                    transform: 'scale(2.8)',
                    opacity: 0
                }
            },
            '@keyframes float': {
                '0%': {
                    transform: 'translate(0%, 0%)'
                },
                '100%': {
                    transform: 'translate(3%, 3%)'
                }
            }
        }
    },
    MuiSelect: {
        styleOverrides: {
            iconOutlined: {
                color: baseColors.alpha.black[50]
            },
            icon: {
                top: 'calc(50% - 14px)'
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                    paddingRight: 6,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: baseColors.alpha.black[50]
                },
                '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: baseColors.primary.main
                }
            }
        }
    },
    MuiListSubheader: {
        styleOverrides: {
            colorPrimary: {
                fontWeight: 'bold',
                lineHeight: '40px',
                fontSize: 13,
                background: baseColors.alpha.black[5],
                color: baseColors.alpha.black[70]
            }
        }
    },
    MuiCardHeader: {
        styleOverrides: {
            action: {
                marginTop: -5,
                marginBottom: -5
            },
            title: {
                fontSize: 15
            }
        }
    },
    MuiRadio: {
        styleOverrides: {
            root: {
                borderRadius: '50px'
            }
        }
    },
    MuiChip: {
        styleOverrides: {
            colorSecondary: {
                background: baseColors.alpha.black[5],
                color: baseColors.alpha.black[100],

                '&:hover': {
                    background: baseColors.alpha.black[10]
                }
            },
            deleteIcon: {
                color: baseColors.error.light,

                '&:hover': {
                    color: baseColors.error.main
                }
            }
        }
    },
    MuiAccordion: {
        styleOverrides: {
            root: {
                boxShadow: 'none',

                '&.Mui-expanded': {
                    margin: 0
                },
                '&::before': {
                    display: 'none'
                }
            }
        }
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            colorDefault: {
                background: baseColors.alpha.black[30],
                color: baseColors.alpha.white[100]
            }
        }
    },
    MuiAvatarGroup: {
        styleOverrides: {
            root: {
                alignItems: 'center'
            },
            avatar: {
                background: baseColors.alpha.black[10],
                fontSize: 13,
                color: baseColors.alpha.black[70],
                fontWeight: 'bold',

                '&:first-of-type': {
                    border: 0,
                    background: 'transparent'
                }
            }
        }
    },
    MuiListItemAvatar: {
        styleOverrides: {
            alignItemsFlexStart: {
                marginTop: 0
            }
        }
    },
    MuiPaginationItem: {
        styleOverrides: {
            page: {
                fontSize: 13,
                fontWeight: 'bold',
                transition: 'all .2s'
            },
            textPrimary: {
                '&.Mui-selected': {
                    boxShadow: baseColors.shadows.primary
                },
                '&.MuiButtonBase-root:hover': {
                    background: baseColors.alpha.black[5]
                },
                '&.Mui-selected.MuiButtonBase-root:hover': {
                    background: baseColors.primary.main
                }
            }
        }
    },
    MuiButton: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: {
                fontWeight: 'bold',
                textTransform: 'none',
                paddingLeft: 16,
                paddingRight: 16,

                '.MuiSvgIcon-root': {
                    transition: 'all .2s'
                },
                '&:disabled': {
                    border: '1px solid rgb(37 39 42 / 12%) !important'
                }
            },
            endIcon: {
                marginRight: -8
            },
            containedSecondary: {
                backgroundColor: baseColors.secondary.main,
                color: baseColors.alpha.white[100],
                border: '1px solid ' + baseColors.alpha.black[30]
            },
            outlinedSecondary: {
                backgroundColor: baseColors.alpha.white[100],

                '&:hover, &.MuiSelected': {
                    backgroundColor: baseColors.alpha.black[5],
                    color: baseColors.alpha.black[100]
                }
            }
        }
    },
    MuiButtonBase: {
        defaultProps: {
            disableRipple: false
        },
        styleOverrides: {
            root: {
                borderRadius: 6
            }
        }
    },
    MuiToggleButton: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: {
                color: baseColors.primary.main,
                background: baseColors.alpha.white[100],
                transition: 'all .2s',

                '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                    color: baseColors.alpha.white[100],
                    background: baseColors.primary.main
                }
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: 6,

                '& .MuiTouchRipple-root': {
                    borderRadius: 6
                }
            },
            sizeSmall: {
                padding: 4
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                margin: 0
            }
        }
    },

    MuiDivider: {
        styleOverrides: {
            root: {
                background: baseColors.alpha.black[10],
                border: 0,
                height: 1
            },
            vertical: {
                height: 'auto',
                width: 1,

                '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                    height: 'auto'
                },
                '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                    height: '100%'
                }
            },
            withChildren: {
                '&:before, &:after': {
                    border: 0
                }
            },
            wrapper: {
                background: baseColors.alpha.white[100],
                fontWeight: 'bold',
                height: 24,
                lineHeight: '24px',
                marginTop: -12,
                color: 'inherit',
                textTransform: 'uppercase'
            }
        }
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                padding: 0,
            },
            elevation0: {
                boxShadow: 'none'
            },
            elevation: {
                boxShadow: baseColors.shadows.card
            },
            elevation2: {
                boxShadow: baseColors.shadows.cardSm
            },
            elevation24: {
                boxShadow: baseColors.shadows.cardLg
            }
        }
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                borderRadius: 6,
                height: 6
            }
        }
    },
    MuiSlider: {
        styleOverrides: {
            root: {
                '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                    transform: 'none'
                },
                '& .MuiSlider-valueLabel': {
                    borderRadius: 6,
                    background: baseColors.alpha.black[100],
                    color: baseColors.alpha.white[100]
                }
            }
        }
    },
    MuiList: {
        styleOverrides: {
            root: {
                padding: 0,

                '& .MuiListItem-button': {
                    transition: 'all .2s',

                    '& > .MuiSvgIcon-root': {
                        minWidth: 34
                    },

                    '& .MuiTouchRipple-root': {
                        opacity: 0.2
                    }
                },
                '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                    backgroundColor: baseColors.alpha.black[10]
                }
            },
            padding: {
                padding: '12px',

                '& .MuiListItem-button': {
                    borderRadius: 6,
                    margin: '1px 0'
                }
            }
        }
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                height: 38,
                minHeight: 38,
                overflow: 'visible'
            },
            indicator: {
                height: 38,
                minHeight: 38,
                borderRadius: 6,
                border: '1px solid ' + baseColors.primary.dark
            },
            scrollableX: {
                overflow: 'visible !important'
            }
        }
    },
    MuiTab: {
        styleOverrides: {
            root: {
                padding: 0,
                height: 38,
                minHeight: 38,
                borderRadius: 6,
                transition: 'color .2s',
                textTransform: 'capitalize',

                '&.MuiButtonBase-root': {
                    minWidth: 'auto',
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginRight: 4
                },
                '&.Mui-selected, &.Mui-selected:hover': {
                    color: baseColors.alpha.white[100],
                    zIndex: 5
                },
                '&:hover': {
                    color: baseColors.alpha.black[100]
                }
            }
        }
    },
    MuiMenu: {
        styleOverrides: {
            paper: {
                padding: 12
            },
            list: {
                padding: 12,

                '& .MuiMenuItem-root.MuiButtonBase-root': {
                    fontSize: 14,
                    marginTop: 1,
                    marginBottom: 1,
                    transition: 'all .2s',
                    color: baseColors.alpha.black[70],

                    '& .MuiTouchRipple-root': {
                        opacity: 0.2
                    },

                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: baseColors.alpha.black[100],
                        background: lighten(baseColors.primary.lighter, 0.5)
                    }
                }
            }
        }
    },
    MuiListItem: {
        styleOverrides: {
            root: {
                '&.MuiButtonBase-root': {
                    color: baseColors.secondary.main,

                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: baseColors.alpha.black[100],
                        background: lighten(baseColors.primary.lighter, 0.5)
                    }
                }
            }
        }
    },
    MuiAutocomplete: {
        styleOverrides: {
            tag: {
                margin: 1
            },
            root: {
                '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                    right: 14
                }
            },
            clearIndicator: {
                background: baseColors.error.lighter,
                color: baseColors.error.main,
                marginRight: 8,

                '&:hover': {
                    background: baseColors.error.lighter,
                    color: baseColors.error.dark
                }
            },
            popupIndicator: {
                color: baseColors.alpha.black[50],

                '&:hover': {
                    background: baseColors.primary.lighter,
                    color: baseColors.primary.main
                }
            }
        }
    },
    MuiTablePagination: {
        styleOverrides: {
            toolbar: {
                '& .MuiIconButton-root': {
                    padding: 8
                }
            },
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                }
            }
        }
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                minHeight: '0 !important',
                padding: '0 !important'
            }
        }
    },
    MuiTableRow: {
        styleOverrides: {
            head: {
                background: baseColors.alpha.black[5]
            },
            root: {
                transition: 'background-color .2s',

                '&.MuiTableRow-hover:hover': {
                    backgroundColor: lighten(baseColors.alpha.black[5], 0.5)
                }
            }
        }
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderBottomColor: baseColors.alpha.black[10],
                fontSize: 14
            },
            head: {
                textTransform: 'uppercase',
                fontSize: 13,
                fontWeight: 'bold',
                color: baseColors.alpha.black[70]
            }
        }
    },
    MuiAlert: {
        styleOverrides: {
            message: {
                lineHeight: 1.5,
                fontSize: 14
            },
            standardInfo: {
                color: baseColors.info.main
            },
            action: {
                color: baseColors.alpha.black[70]
            }
        }
    },
    MuiTimelineDot: {
        styleOverrides: {
            root: {
                margin: 0,
                zIndex: 5,
                position: 'absolute',
                top: '50%',
                marginTop: -6,
                left: -6
            },
            outlined: {
                backgroundColor: baseColors.alpha.white[100],
                boxShadow: '0 0 0 6px ' + baseColors.alpha.white[100]
            },
            outlinedPrimary: {
                backgroundColor: baseColors.alpha.white[100],
                boxShadow: '0 0 0 6px ' + baseColors.alpha.white[100]
            }
        }
    },
    MuiTimelineConnector: {
        styleOverrides: {
            root: {
                position: 'absolute',
                height: '100%',
                top: 0,
                borderRadius: 50,
                backgroundColor: baseColors.alpha.black[10]
            }
        }
    },
    MuiTimelineItem: {
        styleOverrides: {
            root: {
                minHeight: 0,
                padding: '8px 0',

                '&:before': {
                    display: 'none'
                }
            },
            missingOppositeContent: {
                '&:before': {
                    display: 'none'
                }
            }
        }
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                backgroundColor: alpha(baseColors.alpha.black['100'], 0.95),
                padding: '8px 16px',
                fontSize: 13
            },
            arrow: {
                color: alpha(baseColors.alpha.black['100'], 0.95)
            }
        }
    },
    MuiSwitch: {
        styleOverrides: {
            root: {
                height: 33,
                overflow: 'visible',

                '& .MuiButtonBase-root': {
                    position: 'absolute',
                    padding: 6,
                    transition:
                        'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                },
                '& .MuiIconButton-root': {
                    borderRadius: 100
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    opacity: 0.3
                }
            },
            thumb: {
                backgroundColor: baseColors.alpha.white[100],
                border: '1px solid ' + baseColors.alpha.black[30],
                boxShadow:
                    '0px 9px 14px ' +
                    baseColors.alpha.black[10] +
                    ', 0px 2px 2px ' +
                    baseColors.alpha.black[10]
            },
            track: {
                backgroundColor: baseColors.alpha.black[5],
                border: '1px solid ' + baseColors.alpha.black[10],
                boxShadow: 'inset 0px 1px 1px ' + baseColors.alpha.black[10],
                opacity: 1
            },
            colorPrimary: {
                '& .MuiSwitch-thumb': {
                    backgroundColor: baseColors.alpha.white[100]
                },

                '&.Mui-checked .MuiSwitch-thumb': {
                    backgroundColor: baseColors.primary.main
                }
            }
        }
    },
    MuiStepper: {
        styleOverrides: {
            root: {
                paddingTop: 20,
                paddingBottom: 20,
                background: baseColors.alpha.black[5]
            }
        }
    },
    MuiStepIcon: {
        styleOverrides: {
            root: {
                '&.MuiStepIcon-completed': {
                    color: baseColors.success.main
                }
            }
        }
    },
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                h1: 'h1',
                h2: 'h2',
                h3: 'div',
                h4: 'div',
                h5: 'div',
                h6: 'div',
                subtitle1: 'div',
                subtitle2: 'div',
                body1: 'div',
                body2: 'div'
            }
        },
        styleOverrides: {
            gutterBottom: {
                marginBottom: 4
            },
            paragraph: {
                fontSize: 17,
                lineHeight: 1.7
            }
        }
    },
    MuiDialog: {
        styleOverrides: {
            root: {
                '.MuiDialog-paper': {
                    boxShadow: 'none !important',
                }
            }
        }
    },
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: 20
            }
        }
    },
    MuiDialogContent: {
        styleOverrides: {
            root: {
                paddingTop: '8px !important'
            }
        }
    },
    MuiDialogActions: {
        styleOverrides: {
            root: {
                padding: '16px 24px'
            }
        }
    }
}