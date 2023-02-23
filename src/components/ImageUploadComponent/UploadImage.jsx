import { Box, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../muiTheme/theme'
import LoadingIconButton from '../LoadingIconButton/LoadingIconButton'

const UploadImage = ({ elementClassName, ariaLabel, color, message, children }) => {


    return (
        <Box
            className={elementClassName}
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: '0.5em',
                border: `1px solid ${color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                '&:hover': {
                    border: `1.5px solid ${colors.white}`,
                }
            }}
        >
            <LoadingIconButton
                aria-label={ariaLabel ? ariaLabel : 'upload-file'}
                color={color}
                component="label"
            >
                <input hidden accept="image/*" type="file" />
                {children}
            </LoadingIconButton>
            {
                message &&
                <Typography
                    textAlign={'center'}
                    noWrap
                    component={'h4'}
                    fontWeight={'medium'}
                    className='noselect'
                >
                    {message}
                </Typography>
            }
        </Box>
    )
}

export default UploadImage