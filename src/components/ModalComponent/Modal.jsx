import { Box, Zoom } from '@mui/material'
import React from 'react'
import { colors } from '../../muiTheme/theme'

const ModalContent = ({ inCondition, children }) => {
    return (
        <Box
            height={'100%'}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ backgroundColor: `${colors.transparent__black} !important`, }}
        >
            <Zoom in={inCondition}>
                {children}
            </Zoom>
        </Box>
    )
}

export default ModalContent