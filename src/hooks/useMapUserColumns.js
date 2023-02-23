import { useDispatch } from "react-redux";
import {
    useDeleteUserMutation,
    useGetAllUsersMutation
} from "../features/users/usersApiSclice";
import { useMemo, useState } from "react";
import { Avatar, Box, Chip, IconButton, Typography } from "@mui/material";
import { getRoleName } from "../utils/rolesList";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    Block as BlockIcon
} from '@mui/icons-material';
import { setEditable } from "../features/users/usersSlice";
import LoadingIconButton from "../components/LoadingIconButton/LoadingIconButton";

const useMapUserColumns = () => {

    const [getAllUsers] = useGetAllUsersMutation();
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    const dispatch = useDispatch();

    const [target, setTarget] = useState("");

    const columns = useMemo(() => {

        const onDelete = async (username) => {

            try {
                setTarget(username);

                if (username) {
                    await deleteUser(username);
                };
                await getAllUsers();

            } catch (error) {
                console.log(error);
            }
        }

        const onEdit = (username) => {
            dispatch(setEditable({ username }));
        }

        return (
            [
                {
                    field: 'User',
                    headerName: 'User',
                    headerClassName: 'table__header',
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
                    headerClassName: 'table__header',
                    headerName: 'Email',
                },
                {
                    field: 'name',
                    headerName: 'Name',
                    headerClassName: 'table__header',
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
                    headerClassName: 'table__header',
                    minWidth: 250,
                    sortable: false,
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
                    headerAlign: 'center',
                    sortable: false,
                    headerClassName: 'table__header',
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
                    headerAlign: 'center',
                    sortable: false,
                    hidable: true,
                    headerClassName: 'table__header',
                    renderCell: (params) => {

                        const { username } = params.row;

                        return (
                            <Box
                                width={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={'0.5em'}
                            >

                                <LoadingIconButton
                                    aria-label='delete user'
                                    color='error'
                                    onClick={() => onDelete(username)}
                                    isLoading={
                                        username === target &&
                                        isDeleting
                                    }
                                >
                                    <DeleteIcon />
                                </LoadingIconButton>

                                <IconButton
                                    aria-label='edit user'
                                    onClick={() => onEdit(username)}
                                >
                                    <EditIcon />
                                </IconButton>

                            </Box>
                        )
                    }
                },

            ]
        )
    },
        [deleteUser, dispatch, getAllUsers, isDeleting, target]
    );

    return [columns]
};

export default useMapUserColumns;