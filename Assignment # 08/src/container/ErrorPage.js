import { Stack,Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <Stack direction='column' sx={{height:'90vh',width:'100%'}} justifyContent='center' alignItems='center' >
            <Stack direction='column' spacing={2} alignItems='center'>
                <Typography variant='h3'>404 Error!</Typography>
                <Typography variant='h5'>Page not found</Typography>
                <Button onClick={() => navigate('/')} variant='contained' >Go Back to Home</Button>
            </Stack>
        </Stack>
    )
}
