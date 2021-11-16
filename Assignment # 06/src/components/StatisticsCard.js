import React from 'react'
import { Box, Card, Stack, Typography, SvgIcon, Paper,Grid } from '@mui/material'

export default function StatisticsCard({cardTitle,cardData,cardIcon,bgColor}) {
    // const {cardTitle} = props
    return (
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card elevation={0}>
                <Paper elevation={0} sx={{ py: 2, px: 3, backgroundColor:bgColor }} children={
                    <Box>
                        {/* <Stack direction='row' alignItems="center" justifyContent="space-between"> */}
                            <Typography align='left' sx={{ color: '#303030', textTransform: 'uppercase' }}>{cardTitle}
                            </Typography>
                            {/* <SvgIcon sx={{ color: '#ff5f5f', fontSize: '24px' }}> {cardIcon}
                            </SvgIcon> */}
                        {/* </Stack > */}
                        <Typography align='left' variant='h3' sx={{ pt: 4, fontWeight: 'bold', fontSize: '2em', color: '#303030' }}>
                            {new Intl.NumberFormat().format(cardData)}
                        </Typography>
                    </Box >

                } />
            </Card >
        </Grid>
    )
}




