import { Container, Grid, Paper, Typography, SvgIcon, Stack, Box, Hidden, Divider, Button } from '@mui/material'

import { MdKeyboardArrowRight } from "react-icons/md";




export default function WeeklyDealSection() {
    return (
        <div>

            <Container sx={{ my: 2 }} >


                <Box>
                    <Hidden mdDown={true} >
                        <Box sx={{ height: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <Container sx={{ position: 'absolute' }}>
                                <Box sx={{ width: '95%', display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '15px' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>WEEKLY DEALS
                                        </Typography>
                                    </Box>

                                    <Box sx={{ backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '15px' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>ALIBABA.COM LIVESTREAMS</Typography>
                                    </Box>

                                    <Box sx={{ backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '15px' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>SMALL COMMODITIES MARKETPLACE
                                        </Typography>
                                    </Box>
                                </Box>
                            </Container>

                            <Box sx={{ position: 'relative' }} >
                                <Divider variant='fullWidth' sx={{ py: '2px', color: '#a3a2a2' }} />
                            </Box>
                        </Box>
                    </Hidden>
                </Box>



                <Grid container spacing={3} sx={{ my: 1 }}>


                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>WEEKLY DEALS</Typography>
                                </Box>

                                <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                            </Box>
                        </Grid>
                    </Hidden>


                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', px: 1, overflow: 'hidden' }}>

                                    <Hidden mdUp={true} smDown={true} >
                                        <Grid item sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(http://img.alicdn.com/tfs/TB1M5H4oRjTBKNjSZFwXXcG4XXa-720-400.png)', backgroundRepeat: 'no-repeat' }} >
                                                <Box sx={{ height: '250px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='left'>From 10% OFF</Typography>
                                                    <Box >
                                                        <Typography variant='h3' sx={{ color: 'white', fontSize: 15 }} align='left'>Deals end in:</Typography>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Box sx={{ my: 2, mr: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>03</Typography>
                                                            </Box>
                                                            <Box sx={{ my: 2, mx: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>15</Typography>
                                                            </Box>
                                                            <Typography sx={{ color: 'white' }}>:
                                                            </Typography>
                                                            <Box sx={{ my: 2, mx: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>13</Typography>
                                                            </Box>
                                                            <Typography sx={{ color: 'white' }}>:
                                                            </Typography>
                                                            <Box sx={{ my: 2, ml: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>45</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Hidden>




                                    <Hidden smUp={true}>
                                        <Grid item sm={4} xs={12}>
                                        <Box sx={{backgroundColor: '#f60'}} >
                                                <Box sx={{ height: '200px', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='center'>From 10% OFF</Typography>
                                                    <Box >
                                                        <Typography variant='h3' sx={{ color: 'white', fontSize: 15 }} align='center'>Deals end in:</Typography>
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Box sx={{ my: 2, mr: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>03</Typography>
                                                            </Box>
                                                            <Box sx={{ my: 2, mx: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>15</Typography>
                                                            </Box>
                                                            <Typography sx={{ color: 'white' }}>:
                                                            </Typography>
                                                            <Box sx={{ my: 2, mx: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>13</Typography>
                                                            </Box>
                                                            <Typography sx={{ color: 'white' }}>:
                                                            </Typography>
                                                            <Box sx={{ my: 2, ml: 1 }}>
                                                                <Typography variant='h3' sx={{ p: 1, backgroundColor: 'white', display: 'inline', color: '#FF4F00', fontSize: 15, fontWeight: 'bold' }} align='left'>45</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Hidden>













                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hb90cab1301a14436a84fb7c173c0aa6cv.jpg_220x220.jpg" width="150px" alt="" />
                                        </Box>

                                        <Hidden mdDown={true}>
                                            <Button endIcon={<MdKeyboardArrowRight />} size='small' disableFocusRipple sx={{ fontSize: '12px', backgroundColor: '#FF4F00', color: 'white', px: 2, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                View more
                                            </Button >
                                        </Hidden>

                                        <Hidden mdUp={true}>
                                            <Typography sx={{ fontWeight: 'bold' }}>Rs 108.81</Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ textDecoration: 'line-through', mr: 1, color: '#333333' }}>Rs 144.51</Typography>
                                                <Box sx={{ display: 'inline', backgroundColor: '#f60', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', color: 'white', padding: '1px 5px' }}>
                                                    <Typography sx={{ fontSize: 12 }}>-25%</Typography>
                                                </Box>
                                            </Box>

                                        </Hidden>


                                    </Grid>


                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="https://cdn-gateway.alibaba.com/@sc04/kf/H0edb9c2638c641878593c0009e89e9caP.jpg_220x220.jpg" width="150px" alt="" />
                                        </Box>


                                        <Typography sx={{ fontWeight: 'bold' }}>Rs 11,900.42</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{ textDecoration: 'line-through', mr: 1, color: '#333333' }}>Rs 23,800.83</Typography>
                                            <Box sx={{ display: 'inline', backgroundColor: '#f60', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', color: 'white', padding: '1px 5px' }}>
                                                <Typography sx={{ fontSize: 12 }}>-50%</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>


                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Box sx={{ my:1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>ALIBABA.COM LIVESTREAMS</Typography>
                                </Box>
                                <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                            </Box>
                        </Grid>
                    </Hidden>


                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', px: 1, overflow: 'hidden' }}>

                                    <Hidden mdUp={true} smDown={true} >
                                        <Grid item sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(http://img.alicdn.com/imgextra/i2/O1CN01bfldEW1bi89H65qiQ_!!6000000003498-0-tps-852-400.jpg)', backgroundRepeat: 'no-repeat' }} >
                                                <Box sx={{ height: '250px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='left'>Discover select products with real-time demonstrations</Typography>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Hidden>


                                    <Hidden smUp={true}>
                                        <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7797c7' }} >
                                                <Box sx={{ height: '180px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='center'>Discover select products with real-time demonstrations</Typography>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Hidden>



                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 2 }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="//s.alicdn.com/@sc04/kf/H6c97808db42743d68e41f7b4a2b15ea2x.jpg_220x220.jpg" width="150px" alt="" />
                                        </Box>

                                        <Hidden mdDown={true}>
                                            <Button endIcon={<MdKeyboardArrowRight />} size='small' disableFocusRipple sx={{ fontSize: '12px', backgroundColor: '#FF4F00', color: 'white', px: 2, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                View more
                                            </Button >
                                        </Hidden>

                                        <Hidden mdUp={true}>
                                            <Typography sx={{ fontWeight: 'bold' }}>Rs 338.32</Typography>
                                            <Box sx={{}}>
                                                <img width='15px' src="https://img.alicdn.com/imgextra/i3/O1CN01PlLiQH1nh0ZGfyQ3W_!!6000000005120-1-tps-51-45.gif" alt="" />

                                            </Box>

                                        </Hidden>


                                    </Grid>


                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H26f516eccda04e5f8cc8c51b23be16b1b.jpeg_220x220.jpeg" width="150px" alt="" />
                                        </Box>


                                        <Typography sx={{ fontWeight: 'bold' }}>Rs 170.01</Typography>
                                        <Box sx={{}}>
                                            <img width='15px' src="https://img.alicdn.com/imgextra/i3/O1CN01PlLiQH1nh0ZGfyQ3W_!!6000000005120-1-tps-51-45.gif" alt="" />

                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>


                    <Hidden mdUp={true} >
                        <Grid item sm={12} xs={12}>
                            <Box sx={{ my: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ fontWeight: 'bold', fontSize: 18, color: '#333333' }}>SMALL COMMODITIES MARKETPLACE</Typography>
                                </Box>

                                <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                            </Box>
                        </Grid>
                    </Hidden>








                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', px: 1, overflow: 'hidden' }}>

                                    <Hidden mdUp={true} smDown={true}>
                                        <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }} >
                                                <Box sx={{ height: '250px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='left'>A wide range of selected goods with fast free shipping</Typography>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Hidden>

                                    <Hidden smUp={true}>
                                        <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }} >
                                                <Box sx={{ height: '180px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                                    <Typography variant='h3' sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }} align='center'>A wide range of selected goods with fast free shipping</Typography>
                                                    <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                        View More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Hidden>



                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/HTB1teVCXeP2gK0jSZFoq6yuIVXaz.jpg_220x220.jpg" width="150px" alt="" />
                                        </Box>

                                        <Hidden mdDown={true}>
                                            <Button endIcon={<MdKeyboardArrowRight />} size='small' disableFocusRipple sx={{ fontSize: '12px', backgroundColor: '#FF4F00', color: 'white', px: 2, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                                View more
                                            </Button >
                                        </Hidden>

                                        <Hidden mdUp={true}>
                                            <Typography sx={{ fontWeight: 'bold' }}>Rs 338.32</Typography>
                                            <Typography sx={{ color: '#333333', fontSize: '15px' }}>5 Pieces(MOQ)</Typography>

                                        </Hidden>


                                    </Grid>


                                    <Grid md={6} lg={6} sm={4} xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7', my: 2 }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/HTB12l7JKrrpK1RjSZTEq6AWAVXau.jpg_220x220.jpg" width="150px" alt="" />
                                        </Box>


                                        <Typography sx={{ fontWeight: 'bold' }}>Rs 56.11</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{ textDecoration: 'line-through', mr: 1, color: '#333333' }}>Rs 93.51</Typography>
                                            <Box sx={{ display: 'inline', backgroundColor: '#f60', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', color: 'white', padding: '1px 5px' }}>
                                                <Typography sx={{ fontSize: 12 }}>-40%</Typography>
                                            </Box>
                                        </Box>




                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>
                </Grid>
            </Container>


        </div >
    )
}
