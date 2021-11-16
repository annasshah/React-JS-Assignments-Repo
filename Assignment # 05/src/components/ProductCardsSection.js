import React from 'react'
import { Container, Divider, Grid, Paper, Typography, Box, Button, Stack, Hidden } from '@mui/material'
import ProductCard from './ProductCard'


export default function ProductCardsSection() {
    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 1 }}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                    <Hidden mdDown={true}>
                        <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', pr: '20px' }}><Typography sx={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>JUST FOR YOU</Typography>
                            </Box>

                            <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                        </Box>
                    </Hidden>

                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>JUST FOR YOU</Typography>
                                </Box>

                                <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                            </Box>
                        </Grid>
                    </Hidden>



                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ my: 1 }}>

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />


                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/Hb7eae8469c00471e935ff7b3b51802d3x.jpg'} ProductTitle={'Hip Hop Gold Plated Hip Hop Iced Out Micro  Diamond Wholesale Luxury Watch Jewelry Men Woiced Out Quartz Watches'} priceRange={'Rs 3,902.27 - 4,411.48'} minOrders={'2 Sets (Min. Order)'} />


                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H6e36bed7fb2744c4aecb8e2f6ecff952J.jpg'} ProductTitle={'Beautiful Large Capacity Handbags for Women, Colorful Silicone Handle Satchel Shoulder Bag'} priceRange={'Rs 828.32'} minOrders={'1.0 Pieces (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H1a57d29bc6704ec0ab00203a7741ecbaw.jpg'} ProductTitle={'I12 Pro Max 6.7-inch High-definition Face Recognition Original Smartphone 12gb+512GB Long Standby Time Android Mobile Phone'} priceRange={'Rs 13,524 - 14,828'} minOrders={'1 Piece (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

                <ProductCard imgSrc={'https://s.alicdn.com/@sc04/kf/H10b1271a245e4f71a54da2d084ff74d2F.jpg'} ProductTitle={'10Pcs soup & stock pots classic model non stick cookware sets non stick frying pan cooking pot household utensils'} priceRange={'Rs 7,459.96 - 7,634.79'} minOrders={'4 Sets (Min. Order)'} />

            </Grid>






        </Container>
    )
}
