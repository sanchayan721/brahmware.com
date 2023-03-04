import { styled } from '@mui/system';
import React, { useState } from 'react'
import { drawerWidth, colors, transition } from '../../muiTheme/theme';
import {
    IconButton,
    useTheme,
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Avatar,
    Typography,
    Box,
    Button
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { drawerItems, editContents } from '../../features/managableContents/drawerItems';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { usePath } from '../../hooks/usePath';
import { LogoutIcon, MissionControlLogoFull, SeedOfLifeIcon } from '../../assets/icons';
import { Divider } from '../DividerComponent/DividerComponent';
import { SwitchComponent } from '../SwitchComponent/SwitchComponent';


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const listItemStyle = {
    display: 'block',
    '& #light, & #dark': {
        transition: transition('fast'),
        opacity: '1 !important',
        '& path': {
            transition: transition('fast'),
            opacity: '1 !important'
        }
    },

    '& #light': {
        fill: colors.text__color,
        '& path': {
            fill: colors.text__color,
        }
    },

    '& #dark': {
        fill: colors.muted,
        '& path': {
            fill: colors.muted,
        }
    },

    '& .icon__avatar': {
        border: `2px solid ${colors.text__color__dark}`,
        transition: transition('fast'),
    },

    '& :hover': {

        '& .item__name > span': {
            color: colors.primary
        },

        '& #dark': {
            fill: colors.primary,
            '& path': {
                fill: colors.primary
            }
        },

        '& .icon__avatar': {
            border: `2px solid ${colors.primary}`,
        },
    }
}


const MissionControlDrawer = ({ /* open, */ handleDrawerControle }) => {

    const [open, setOpen] = useState(false);

    const history = useHistory();
    const path = usePath();
    const user = useSelector(selectCurrentUser);

    return (
        <Drawer variant="permanent" open={open}
            sx={{
                position: 'absolute',
                zIndex: 1,
            }}
        >
            <DrawerHeader sx={{ ...listItemStyle, justifyContent: 'center', p: 0 }}>
                <Button
                    component={Link}
                    to='/mission-control'
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                >
                    <SeedOfLifeIcon />
                    <Box
                        width={0}
                        height={'100%'}
                        position="relative"
                    >
                        <Box position={'absolute'} height={'100%'} sx={{ p: '1em' }}>
                            {
                                open &&
                                <MissionControlLogoFull height={'100%'} />
                            }
                        </Box>
                    </Box>
                </Button>
            </DrawerHeader>
            <Divider />

            <List>
                {
                    drawerItems.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={
                                    { ...listItemStyle }
                                }
                                selected={`/mission-control${item.path}` === path}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => history.replace(`/mission-control${item.path}`)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 25,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.name}
                                        className={'item__name'}
                                        sx={{
                                            opacity: open ? 1 : 0,
                                            '& span': {
                                                transition: transition('fast'),
                                                fontWeight: 'medium'
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
            <Divider />

            <List>
                {
                    editContents.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={listItemStyle}
                                selected={`/mission-control${item.path}` === path}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => history.replace(`/mission-control${item.path}`)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 25,
                                            maxHeight: 25,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.name}
                                        className={'item__name'}
                                        sx={{
                                            opacity: open ? 1 : 0,
                                            '& span': {
                                                transition: transition('fast'),
                                                fontWeight: 'medium'
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
            <List sx={{ marginTop: 'auto' }}>
                <SwitchComponent
                    size='small'
                    color='default'
                    onColor={colors.primary}
                    offColor={colors.text__color}
                    onChange={() => setOpen(!open)}
                />
                <ListItem
                    disablePadding
                    sx={listItemStyle}
                    selected={`/mission-control/account` === path}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={() => history.replace('/mission-control/account')}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 25,
                                maxHeight: 48,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center'
                            }}
                        >
                            <Avatar
                                className={"icon__avatar"}
                                alt="Cindy Baker"
                                sx={{
                                    width: 48,
                                    height: 48,
                                }}
                                src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                        </ListItemIcon>
                        <ListItemText
                            className={'item__name'}
                            sx={{
                                opacity: open ? 1 : 0,
                                '& span': {
                                    transition: transition('fast'),
                                    fontWeight: 'medium'
                                }
                            }}
                            primary={
                                <Typography
                                    component='h3'
                                    fontSize={'1.25em'}
                                >
                                    {user.charAt(0).toUpperCase() + user.slice(1)}
                                </Typography>
                            }
                            secondary={
                                <LoadingButton
                                    loading={false}
                                    loadingPosition="end"
                                    endIcon={<LogoutIcon height={'0.5em'} width={'0.5em'} />}
                                    sx={{
                                        padding: 0,
                                        margin: '0.2em 0',
                                        justifyContent: 'start',
                                        fontWeight: 'light',
                                        fontSize: '0.8em'
                                    }}
                                >
                                    Logout
                                </LoadingButton>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default MissionControlDrawer;