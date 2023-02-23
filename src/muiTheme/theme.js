import { createTheme } from "@mui/material";

export const colors = {
    primary: "#D99938 ",
    primary__dark: "#825c22",
    primary__hover_bg: "#100D09",
    secondary: "#59A5DE",
    success: "#2e7d32",
    info: "#0dcaf0",
    danger: "#da2929",
    warning: "#F08E1C",
    dark: "#121212",
    light: "#f8f9fa",
    muted: "#494949",
    border: "#c8c8c8",
    text__color: "#fafafa",
    text__color__dark: "#969696",
    inverse: "",
    shaft: "",
    body__bg: "#f7f7f7",
    dark__card: '#1E1E1E',
    darker__card: '#242424',
    white: "#fff",
    black: "#000",
    link__primary: "#F08A32"
};

export const speed = {
    slow: 1000,
    medium: 600,
    fast: 300
};

const fonts = {
    poppins: "Poppins",
    montserrat: "Montserrat"
}

export const transition = (speed) => `all ${speed === 'fast' ? '200ms' : '600ms'} ease 0s`

export const drawerWidth = 240;

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary,
            contrastText: colors.white
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.white
        },
        error: {
            main: colors.danger,

        },
        warning: {
            main: colors.warning
        },
        success: {
            main: colors.success
        },
        buttonOnPrimary: {
            main: colors.dark__card,
            contrastText: colors.white
        },
        muted: {
            main: colors.muted,
            contrastText: colors.white
        }
    },
    typography: {
        fontFamily: fonts.montserrat,
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        allVariants: {
            color: colors.text__color
        },
        button: {
            textTransform: 'none'
        }
    },
    MuiLinkButton: {
        styleOverrides: {
            root: {
                '&[disabled]': {
                    color: colors.muted,
                    pointerEvents: 'none',
                },
            },
        },
    },
    props: {
        MuiButtonBase: {
            TouchRippleProps: {
                classes: {
                    root: {
                        color: colors.primary
                    }
                }
            }
        }
    },
}); 