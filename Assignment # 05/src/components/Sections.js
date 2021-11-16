import { Container, Divider, Grid, Paper, Typography, Box, Button, Stack, Hidden } from '@mui/material'
import React from 'react'
import { VscVerified } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineFeed } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import SvgIcon from '@mui/material/SvgIcon';

export default function Sections(props) {
    const imgSize = '80px'

    return (
        <div>
            <Container sx={{ my: 1 }}>
                <Box>
                    <Hidden mdDown={true} >
                        <Box sx={{ my: 3, height: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', paddingRight: '20px' }}><Typography sx={{ fontWeight: 'bold', fontSize: 24, color: '#333333' }}>{props.title}  </Typography>
                            </Box>


                            <Divider sx={{ position: 'relative' }} variant='fullWidth' sx={{ py: '2px', color: '#a3a2a2' }} />
                        </Box>
                    </Hidden>

                    <Hidden mdUp={true} >
                        <Box sx={{ my: 3,  height: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ fontWeight: 'bold', fontSize: 24, color: '#333333' }}>{props.title}  </Typography>
                            </Box>

                            <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                        </Box>
                    </Hidden>
                </Box>


                <Paper sx={{ px: 1 }} elevation={false} children={
                    <Grid container spacing={1}>
                        <Grid item md={3} lg={3} xl={3} sm={12} xs={12}>
                            <Hidden mdDown={true}>
                                <Box sx={{ maxWidth: '100%', maxHeight: '350px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${props.BgImgUrl})`, backgroundRepeat: 'no-repeat' }} >
                                    <Box sx={{ height: '300px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography variant='h3' sx={{ color: 'white', fontSize: 22 }} align='left'>{props.imgTitle}</Typography>


                                        <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                            Source Now
                                        </Button>
                                    </Box>
                                </Box>
                            </Hidden>

                            <Hidden mdUp={true}>
                                <Box sx={{ maxWidth: '100%', maxHeight: '150px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }} >
                                    <Box sx={{ height: '150px', width: '100%', p: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography variant='h3' sx={{ color: 'white', fontSize: 22 }} align='center'>{props.imgTitle}</Typography>


                                        <Button size='small' disableFocusRipple sx={{ fontSize: '14px', backgroundColor: 'white', color: '#333333', px: 3, py: '5px', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px' }} variant='contained'>
                                            Source Now
                                        </Button>
                                    </Box>
                                </Box>
                            </Hidden>

                        </Grid>


                        <Grid item md={9} lg={9} xl={9} sm={12} xs={12}>

                            <Grid container spacing={3}>

                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box>
                                            <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <SvgIcon sx={{ fontSize: 20, color: 'green' }} color={'disabled'}> <VscVerified /></SvgIcon>
                                                <Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Premium OEM Factories</Typography></Stack>
                                            <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography>


                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>
                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Top sales</Typography>
                                            <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <SvgIcon sx={{ fontSize: 20, color: 'green' }} color={'disabled'}> <AiOutlineBarChart /></SvgIcon><Typography noWrap sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography>
                                            </Stack>



                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/Hcc98420451124afc817c74455ac5ed43n.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>








                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box>

                                            <Typography align='left' variant='h6' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Computer Hardware & Software</Typography>
                                            {/* <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography> */}


                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>
                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Presentation Equipment</Typography>
                                            <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography>
                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/H74a3eeec088548cbaad49c0d32987faes.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>


                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Delivered Duty Paid (DDP)</Typography>
                                            <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <SvgIcon sx={{ fontSize: 20, color: 'green' }} color={'disabled'}> <MdOutlineFeed /></SvgIcon><Typography noWrap sx={{ fontSize: '13px' }} align='left' variant='body1'>include shipping and duty fees</Typography>
                                            </Stack>



                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <VscWorkspaceTrusted /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>

                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Presentation Equipment</Typography>
                                            <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Wedding Apparel & Accessories</Typography>
                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/H74a3eeec088548cbaad49c0d32987faes.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>
                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Women's Clothing</Typography>
                                            <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography>
                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/H74a3eeec088548cbaad49c0d32987faes.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>
                                <Grid item item md={3} lg={3} xl={3} sm={4} xs={6}>
                                    <Paper elevation={false} sx={{ py: 1 }} children={

                                        <Box><Typography align='left' variant='h6' noWrap sx={{ fontWeight: 'bold', fontSize: '15px' }}>Childrens Clothing</Typography>
                                            <Typography sx={{ fontSize: '13px' }} align='left' variant='body1'>Customization service available</Typography>
                                            <Box>
                                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    <SvgIcon sx={{ fontSize: 25 }} color={'disabled'}> <GrCertificate /></SvgIcon> <img src="https://s.alicdn.com/@sc04/kf/H74a3eeec088548cbaad49c0d32987faes.jpg_220x220.jpg" width={imgSize} alt="" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    } />
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                } />









            </Container>

        </div>
    )
}
