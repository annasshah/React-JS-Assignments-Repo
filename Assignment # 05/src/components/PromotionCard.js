import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper';

export default function PromotionCard({title,imgSrc}) {
    return (
        <Paper elevation={0} sx={{ backgroundColor: '#f2f3f7', px: 2, py: 2 }} children={
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
                    <Typography sx={{ fontWeight: 'bold', color: '#333333' }}>
                    {title}
                    </Typography>
                    <img src={imgSrc} width='75px' alt="" />
                </Box>
            </Box>
        } />
    )
}
