import { useState } from 'react';
import Box from '@mui/material/Box';
import MissionControlHeader from '../../components/MissionControl/MissionControlHeader';
import MissionControlDrawer, { DrawerHeader } from '../../components/MissionControl/MissionControlDrawer';
import { Switch as Router, Route } from 'react-router-dom';
import { drawerItems, editContents } from '../../features/managableContents/drawerItems';
import Account from './Account';


const MissionControl = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <MissionControlHeader
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />

            <MissionControlDrawer
                open={open}
                handleDrawerClose={handleDrawerClose}
            />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Router>
                    {
                        [...drawerItems, ...editContents].map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact={item.name === 'Home' && true}
                                    path={`${process.env.PUBLIC_URL + "/mission-control" + item.path}`}
                                    component={item.component}
                                />
                            )
                        })
                    }
                    <Route
                        path={`${process.env.PUBLIC_URL + "/mission-control/account"}`}
                        component={Account}
                    />
                </Router>
            </Box>
        </Box>
    );
}

export default MissionControl;