import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { getAllUsersActions } from '../redux/actions/userActions';
const DashUsers = () => {

    const dispatch=useDispatch()
    const { users } = useSelector(state => state.allusers);

    useEffect(()=>{
        dispatch(getAllUsersActions())
    },[dispatch])

    let data = [];
    data = (users !== undefined && users.length > 0) ? users : []


    
    const columns = [

        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },

        {
            field: 'email',
            headerName: 'E_mail',
            width: 150,
        },

        {
            field: 'role',
            headerName: 'User status',
            width: 150,
            renderCell: (params) => (
                params.row.role === 1 ? "Admin" : "Regular user"
            )
        },

        {
            field: 'createdAt',
            headerName: 'Creation date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
            )
        }
    ];
  return (
    
    <>
    <Box >

        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
            All users
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
            <Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button>
        </Box>
        <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    sx={{

                        '& .MuiTablePagination-displayedRows': {
                            color: 'white',
                        },
                        color: 'white',
                        [`& .${gridClasses.row}`]: {
                            bgcolor: (theme) =>
                                theme.palette.secondary.main
                        },
                        button: {
                            color: '#ffffff'
                        }

                    }}
                    getRowId={(row) => row._id}
                    rows={data}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    checkboxSelection
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </Paper>

    </Box>
</>
  )
}

export default DashUsers
