import { Container, Grid, Hidden, Paper } from '@mui/material'
import Slider from './Slider'
import React from 'react'
import { Box } from '@mui/system'
import MyMarket from './MyMarket'
import ProBuyerExective from './ProBuyerExective'
import HomeGarden2021 from './HomeGarden2021'
import PromotionCard from './PromotionCard'

export default function SliderMainSection() {
    return (

        <>
            <Container sx={{ my: 1, py: 2 }} >
                <Paper elevation={2} square={true} children={
                    <Grid container>
                        <Hidden mdDown={true}>
                            <Grid item md={3} lg={3}>

                                <MyMarket />

                            </Grid>
                        </Hidden>



                        <Grid item md={9} lg={9} sm={12} >

                            <Slider />

                            <Grid container spacing={2} sx={{ my: 1 }}>

                                <Grid item md={6} lg={3} sm={6} xs={12}>
                                    <ProBuyerExective />
                                </Grid>

                                <Grid item md={6} lg={3} sm={6} xs={12}>
                                    <HomeGarden2021 />
                                </Grid>

                                <Grid item md={6} lg={3} sm={6} xs={12}>
                                    <PromotionCard title={'Digital Booths'} imgSrc={'https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png'} />
                                </Grid>

                                <Grid item md={6} lg={3} sm={6} xs={12}>
                                    <PromotionCard title={'Top-Ranking Products'} imgSrc={'https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png'} />
                                </Grid>
                            </Grid>

                        </Grid>

                        {/* <Grid item md={2} lg={3}>
                            
                       
                        </Grid> */}



                    </Grid>

                } />
            </Container>
        </>

    )
}
