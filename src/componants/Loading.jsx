import React from 'react'
import { Box, CircularProgress } from '@mui/material'
const Loading = () => {
return <Box sx={{width:"100%", height:"100vh" ,display:"flex",justifyContent:"center",alignItems:"center" }}>
    <CircularProgress />
    </Box>
}

export default Loading
