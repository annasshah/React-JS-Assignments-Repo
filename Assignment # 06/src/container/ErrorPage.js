import {Stack, Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
    const navigate = useNavigate()
    const toHomePage = () => {
        navigate("/");
      };

    return (
        <Stack spacing={3} direction='column' justifyContent='center' alignItems='center' sx={{height:'90vh'}}>
        <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
        404 Page Not Found
        </Typography>
        <Button variant="outlined" color='error' size='large' onClick={toHomePage}>Go Back To Home</Button>
        </Stack>
    )
}
