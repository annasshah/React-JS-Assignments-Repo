import React from 'react'
import { Paper, Typography, Box } from '@mui/material';


export default function TopBar({topBarTitle}) {
    return (
        <Box>
            <Paper elevation={1} sx={{ backgroundColor: 'red', mb: 4, py: 2 }} square={true} children={

                <Typography align='center' variant='h5' sx={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {topBarTitle}
                </Typography >
            } />
        </Box>
    )
}
