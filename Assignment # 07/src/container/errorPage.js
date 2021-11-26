import { Button, Typography,Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
    const navigate = useNavigate()


    return (
        <Box sx={{textAlign:'center'}}>

            <Typography variant='h4'>
                No Page Found!
            </Typography>

            <Button onClick={()=>navigate('/')}>Go back to Home</Button>
            
        </Box>
    )
}
