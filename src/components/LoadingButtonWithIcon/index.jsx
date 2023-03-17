import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';
import { colors, transition } from '../../muiTheme/theme';

const commonProperties = {
    height: '100%',
    borderRadius: '0.33em',

    '& svg, & p, & span': {
        transition: transition('fast')
    },

    '& #light': {
        fill: colors.darker__card,
        '& path': {
            fill: colors.darker__card,
        }
    },

    '& #dark': {
        fill: colors.primary__dark,
        '& path': {
            fill: colors.primary__dark,
        }
    },

    "&.Mui-disabled": {
        '& svg': {
            '& #light': {
                fill: colors.disabled__text,
                '& path': {
                    fill: colors.disabled__text,
                }
            },

            '& #dark': {
                fill: colors.dark__card,
                '& path': {
                    fill: colors.dark__card,
                }
            },
        },

        '& p, & span': {
            color: colors.disabled__text
        }
    },

    '&:has(.MuiLoadingButton-loadingIndicator)': {
        '& .MuiButton-startIcon': {
            display: 'none'
        }
    },
}

export const LoadingButtonBig = styled(LoadingButton)({
    ...commonProperties,
    padding: 0,
    margin: 0,

    justifyContent: 'center',
    gap: '1em',

    '& .MuiButton-startIcon': {
        margin: 0,

        '& svg': {
            height: '2em',
            width: '2em',
        },
    },

    '& .MuiLoadingButton-loadingIndicator': {
        fontSize: '22px',
        height: '2em',
        width: '2em',
        left: 'unset !important',
        justifyContent: 'center',
        alignItems: 'center',

        '&>span': {
            height: '75% !important',
            width: '75% !important'
        }

    }

});

export const LoadingButtonSmall = styled(LoadingButton)({
    ...commonProperties,
    padding: '1.5em',
    gap: '0.5em',

    '& svg': {
        height: '1em',
        width: '1em'
    }
})