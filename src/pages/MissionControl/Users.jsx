import { Box, Button, Card, Collapse, Typography } from '@mui/material';
import AddUser from '../../components/MissionControl/AddUser';
import AllUserTable from '../../components/MissionControl/AllUserTable';
import { useState } from 'react';
import { colors, transition } from '../../muiTheme/theme';
import {
    PersonAddAlt1 as AddUserIcon,
    CloseFullscreen as MinimizeIcon
} from '@mui/icons-material';

const Users = () => {

    const [dialogueOpen, setDialogueOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                px: '2em'
            }}
        >
            <Card
                sx={{ margin: '1.75em 0' }}
                style={{
                    width: '100%',
                    maxHeight: '100%',
                    overflow: 'hidden'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: colors.primary,
                        padding: '1em 1em 1em 3em',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '5em'
                    }}
                >
                    <Typography
                        variant='h4'
                        component={'h4'}
                        color={colors.dark__card}
                        fontWeight={'bold'}
                    >
                        Users
                    </Typography>

                    <Button
                        variant='contained'
                        color={'buttonOnPrimary'}
                        startIcon={
                            dialogueOpen ?
                                <MinimizeIcon /> :
                                <AddUserIcon />
                        }
                        sx={{
                            px: '1.5em',
                            height: '3em',
                            width: !dialogueOpen ? '8em' : '3em',
                            overflow: 'hidden',
                            transition: transition('fast'),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1em',

                            padding: dialogueOpen && '0 !important',
                            minWidth: 'unset',
                            borderRadius: dialogueOpen && '50% !important',

                            "& .MuiButton-startIcon": {
                                padding: '0 !important',
                                margin: '0 !important',
                            }
                        }}
                        onClick={() => setDialogueOpen(!dialogueOpen)}
                    >
                        {!dialogueOpen && 'Add'}
                    </Button>
                </Box>

                <Collapse
                    in={dialogueOpen}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <AddUser />
                </Collapse>

                <AllUserTable />
            </Card>
        </Box>
    );
};

export default Users;