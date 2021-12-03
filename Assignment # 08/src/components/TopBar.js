import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';


export default function TopBar() {
    const apiData = useSelector((state) => state)
    const globalData = apiData.data
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} position="static">
                <Container>
                    <Typography align='center' variant="h5" component="div" sx={{color: 'white',textTransform:'uppercase',py:2}}>
                       {globalData.name} Weather Updates
                    </Typography>
                </Container>
            </AppBar>
        </Box>
    );
}
