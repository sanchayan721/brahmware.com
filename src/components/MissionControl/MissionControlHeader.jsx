import React from 'react';
import { useSelector } from 'react-redux';
import { drawerWidth } from '../../muiTheme/theme';
import {
    selectCurrentToken,
    selectCurrentUser
} from '../../features/auth/authSlice';
import {
    IconButton,
    Toolbar,
    Typography,
    styled,
    AppBar as MuiAppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const MissionControlHeader = ({ open, handleDrawerOpen }) => {

    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MissionControlHeader