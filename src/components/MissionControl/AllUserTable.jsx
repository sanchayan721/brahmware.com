import React from 'react';
import { Box, Card, LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import DataGrid from '../DataGridComponent/DataGrid';
import { useGetAllUsersMutation } from '../../features/users/usersApiSclice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../features/users/usersSlice';
import useMapUserColumns from '../../hooks/useMapUserColumns';
import { colors } from '../../muiTheme/theme';


const AllUserTable = () => {

    const [getAllUsers, { isLoading }] = useGetAllUsersMutation();

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

    const [columns] = useMapUserColumns(users);


    return (

        <Card
            elevation={3}
            sx={{
                margin: '3em',
                borderRadius: '0.5em',
                overflow: 'hidden',
            }}
        >
            <DataGrid
                loading={isLoading}
                columns={columns}
                rows={users}
                disableSelectionOnClick
                disableColum
                disableColumnMenu
                headerHeight={'50'}
                rowHeight={90}
                getRowId={(row) => row._id}
                sx={{
                    height: 'calc(100vh - 26em)',
                    border: 0,
                    outline: 0,
                    backgroundColor: colors.dark,
                    boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.5)',
                    "& .MuiTablePagination-displayedRows": {
                        padding: 0,
                        margin: 0
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.black,
                        border: 0
                    },
                    "& .MuiDataGrid-footerContainer": {
                        display: 'none'
                    },
                }}
            />
        </Card>
    )
}

export default AllUserTable;
