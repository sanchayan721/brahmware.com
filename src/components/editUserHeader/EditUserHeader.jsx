import { Paper, Button, Typography, IconButton } from '@mui/material';
import React from 'react';
import { colors } from '../../muiTheme/theme';
import { Close as CloseIcon } from '@mui/icons-material';
import { TooltipComponent } from '../TooltipComponent/TooltipComponent';
import { useSelector } from 'react-redux';
import { selectedUser } from '../../features/users/usersSlice';



const EditUserHeader = ({ handleClose }) => {

    const currentlyEditting = useSelector(selectedUser);

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '5em',
                padding: '0.6em 0.6em 0.6em 1.2em',
                backgroundColor: colors.black,
            }}
        >
            <Typography
                variant='h5'
                component='h5'
                fontWeight={'medium'}
                color={colors.primary}
            >
                {`Editting ${currentlyEditting.username}'s profile`}
            </Typography>
            <TooltipComponent
                color={colors.danger}
                title="Close Window"
            >
                {/* <Button
                    onClick={handleClose}
                    variant='contained'
                    color={'buttonOnPrimary'}
                    startIcon={
                        <CloseIcon
                            color='error'
                            sx={{
                                height: '1.25em',
                                width: '1.25em'
                            }}
                        />
                    }
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1em',

                        padding: '0.5em !important',
                        minWidth: 'unset',
                        borderRadius: '50% !important',

                        "& .MuiButton-startIcon": {
                            padding: '0 !important',
                            margin: '0 !important',
                        }
                    }}
                /> */}

                <IconButton
                    onClick={handleClose}
                    color='error'
                >
                    <CloseIcon sx={{ height: '1.25em', width: '1.25em' }} />
                </IconButton>
            </TooltipComponent>
        </Paper>
    )
}

export default EditUserHeader