import React from 'react';
import { Box, Typography } from '@mui/material';
import { Contacts as ContactsIcon } from '@mui/icons-material';
import { BrahmNautIcon, You, YouIcon } from '../../assets/icons';
import { colors } from '../../muiTheme/theme';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { TooltipComponent } from '../TooltipComponent/TooltipComponent';

const User = ({ params }) => {

    const { fullName, email, username } = params.row;

    const currentUser = useSelector(selectCurrentUser);

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={'3em'}
            className={'noselect'}
            padding={'0 3em'}
        >

            <Box
                flexGrow={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                gap={'0.25em'}
            >
                {/* Full Name */}
                <Typography
                    component={'h3'}
                    fontSize={'2em'}
                    fontWeight={'medium'}
                    gap={'1em'}
                >
                    {fullName?.firstName || ''} {fullName?.middleName || ''} {fullName?.lastName || ''}
                </Typography>

                {/* Username */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    gap={'1em'}
                    alignItems={'center'}
                >
                    {
                        username === currentUser ?
                            <YouIcon
                                height={'2em'}
                                width={'2em'}
                                fill={colors.success}
                            />
                            :
                            <BrahmNautIcon
                                height={'2em'}
                                width={'2em'}
                                fill={colors.primary}
                            />
                    }
                    <Typography
                        component={'h5'}
                        variant='h5'
                        color={username === currentUser ? colors.success : 'primary'}
                        fontWeight={username === currentUser && 'medium'}
                    >
                        {username}
                    </Typography>

                </Box>

                {/* Email */}
                <Box
                    display={'flex'}
                    gap={'1.1em'}
                    alignItems={'center'}
                >
                    <ContactsIcon sx={{ height: '1.125em', width: '1.125em' }} />
                    <Typography padding={'0.5em 0'}>{email}</Typography>
                </Box>
            </Box>
            {
                username === currentUser &&
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    alignSelf={'center'}
                    gap={'1em'}
                    ml={'auto'}
                >
                    {/* <YouIcon
                        height={'5em'}
                        width={'5em'}
                        fill={colors.success}
                    /> */}
                    <You height={'3em'} width={'3em'} fill={colors.primary} />
                    {/* <Typography fontWeight={'medium'} fontSize={'1.5em'} color={colors.primary}>YOU</Typography> */}
                </Box>
            }
        </Box>
    )
}

export default User