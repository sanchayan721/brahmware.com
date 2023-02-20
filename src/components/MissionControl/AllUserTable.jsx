import React, { useState } from 'react';
import { Box, Card, Typography, Avatar, LinearProgress, IconButton, Button, Dialog, Slide } from '@mui/material';
import Chip from '../ChipComponent/Chip';
import { useEffect, useMemo } from 'react';
import DataGrid from '../DataGridComponent/DataGrid';
import { useDeleteUserMutation, useGetAllUsersMutation } from '../../features/users/usersApiSclice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers, setEditable } from '../../features/users/usersSlice';
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Block as BlockIcon
} from '@mui/icons-material';
import { getRoleName } from '../../utils/rolesList';


const AllUserTable = () => {

    const [getAllUsers, { isLoading }] = useGetAllUsersMutation();
    const [deleteUser, { isloading }] = useDeleteUserMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers);
    },
        [
            dispatch,
            getAllUsers
        ]
    );

    const users = useSelector(selectAllUsers);

    const onDelete = async (params) => {

        try {

            const username = params.row?.username;
            if (username) {
                console.log(username)
                dispatch(deleteUser(username));
            };
            await getAllUsers();

        } catch (error) {
            console.log(error);
        }
    }

    const onEdit = (params) => {
        dispatch(setEditable({ username: params.row.username }));
    }

    const columns = useMemo(
        () => [
            {
                field: 'user',
                headerName: 'User',
                width: 250,
                renderCell: (params) => {
                    return (
                        <Box
                            display={'flex'}
                            justifyContent={'flex-start'}
                            alignItems={'center'}
                            gap={'1em'}
                        >
                            <Avatar
                                alt={params.row?.username}
                                src={params.row?.profilePicture}
                            />
                            <Typography color={'primary'}>{params.row?.username}</Typography>
                        </Box>
                    )
                }
            },
            {
                field: 'email',
                width: 300,
                headerName: 'Email',
            },
            {
                field: 'name',
                headerName: 'Name',
                width: 200,
                valueGetter: (params) => {
                    return (
                        `${params.row?.fullName?.firstName || ''}
                        ${params.row?.fullName?.middleName || ''}
                        ${params.row?.fullName?.lastName || ''}`
                    )
                }
            },

            {
                field: 'roles',
                headerName: 'Roles',
                width: 250,
                renderCell: (params) => {

                    const userRoles = params.row?.roles?.map((code) =>
                        Number(code)
                    ).sort().reverse();

                    return (
                        <Box
                            display={'flex'}
                            justifyContent={'flex-start'}
                            flexWrap={'wrap'}
                            alignItems={'center'}
                            gap="0.5em"
                        >
                            {
                                userRoles.map((roleCode, index) =>
                                    getRoleName(roleCode) !== -1 &&
                                    <Chip
                                        key={index}
                                        label={getRoleName(roleCode)}
                                    />
                                )
                            }
                        </Box>
                    )
                }
            },

            {
                field: 'blocked',
                width: 100,
                headerName: 'Blocked',
                renderCell: (params) => {

                    return (
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <IconButton
                                aria-label='edit user'
                                color='muted'

                            >
                                <BlockIcon />
                            </IconButton>

                        </Box>
                    )
                }
            },

            {
                field: 'actions',
                headerName: 'Actions',
                renderCell: (params) => {
                    return (
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={'0.5em'}
                        >

                            <IconButton
                                aria-label='delete user'
                                color='error'
                                onClick={() => onDelete(params)}
                            >
                                <DeleteIcon />
                            </IconButton>

                            <IconButton
                                aria-label='edit user'
                                color='warning'
                                onClick={() => onEdit(params)}
                            >
                                <EditIcon />
                            </IconButton>

                        </Box>
                    )
                }
            },

        ], [onDelete, onEdit]
    );



    return (

        <Box
            sx={{ padding: '1.5em', margin: '1.5em', height: '40em' }}>
            {
                isLoading ?
                    <LinearProgress color="primary" /> :
                    <DataGrid
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        columns={columns}
                        rows={users}
                        disableSelectionOnClick
                        density='comfortable'
                        disableColum
                        getRowId={(row) => row._id}
                        sx={{
                            "& .MuiTablePagination-displayedRows": {
                                padding: 0,
                                margin: 0
                            }
                        }}
                    />
            }
        </Box>
    )
}

export default AllUserTable;
