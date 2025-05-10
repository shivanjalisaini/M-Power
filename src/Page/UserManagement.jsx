import React from 'react'
import SideBar from '../Component/SideBar'
import { Box, Typography } from '@mui/material'

function UserManagement() {
  return (
    <Box sx={{display:'flex'}}>
    <SideBar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
      
    <Typography variant='h4'>
       User Management
    </Typography>

    </Box>
  </Box>
  )
}

export default UserManagement

