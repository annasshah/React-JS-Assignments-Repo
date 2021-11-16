import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function HomeGarden2021() {
    return (
        <div>

            <Paper elevation={0} sx={{ backgroundColor: '#FF4F00', px: 2, py: 2 }} children={
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', pb: 1 }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                        Home & Garden 2021 Online Trade Show
                        </Typography>
                    </Box>
                    <Button sx={{ fontSize: '12px', backgroundColor: 'white', color: '#FF4F00', p: 0, py: '3px',px:2, borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                        Upgrade
                    </Button>
                </Box>
            } />










            


        </div>
    )
}
