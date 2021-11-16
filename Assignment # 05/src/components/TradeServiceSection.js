import { Container, Divider, Grid, Paper, Typography, Box, Button, Stack, Hidden } from '@mui/material'
import { GoDash } from "react-icons/go";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiAmazonpay } from "react-icons/si";
import { RiFileSearchFill } from "react-icons/ri";
import { IoMdGlobe } from "react-icons/io";
import SvgIcon from '@mui/material/SvgIcon';


export default function TradeServiceSection() {
    return (
        <Container sx={{ my: '40px' }}>
            <Hidden mdDown={true}>
                <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', pr: '20px' }}><Typography sx={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>OUR TRADE SERVICES ARE HERE FOR YOU</Typography>
                    </Box>

                    <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                </Box>

                <Typography sx={{ fontSize: 13, color: '#666666', mt: 2 }}>Alibaba.com's trade services help ensure that your purchases are protected.
                </Typography>

            </Hidden>

            <Hidden mdUp={true} >
                <Box>
                    <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#333333' }}>OUR TRADE SERVICES ARE HERE FOR YOU</Typography>
                        </Box>

                        <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                    </Box>
                    <Typography align='center' sx={{ fontSize: 13, color: '#666666', mt: 3 }}>Alibaba.com's trade services help ensure that your purchases are protected.
                    </Typography>
                </Box>
            </Hidden>



            <Grid container sx={{ my: 1 }} spacing={2}>
                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                    <Paper children={
                        <Box>
                            <Box sx={{ height: '200px', minWidth: '100%', maxWidth: '100%', overflow: 'hidden', backgroundImage: 'url(https://i.alicdn.com/img/tfs/TB1uRJAxnqWBKNjSZFxXXcpLpXa-1180-360.png)', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%', backgroundSize: 'cover' }} >
                                <Box sx={{ height: '200px', width: '100%', p: 3, display: 'flex', alignItems: 'center' }}>
                                    <Box> <SvgIcon sx={{ color: 'white', mb: 2 }}><GoDash />
                                    </SvgIcon>
                                        <Typography variant='body1' sx={{ color: 'white', fontSize: 15 }} align='left'>Trade Assurance is a free order protection service offered by Alibaba.com.</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box><Typography variant='h6' sx={{color:'#4f74b3', fontWeight: 'bold', fontSize: '17px' }}>Trade Assurance</Typography>
                                    <Typography variant='h6' sx={{
                                        fontSize: '12px', color: 'rgba(102, 102, 102, 0.8)'
                                    }}>ORDER PROTECTION</Typography>
                                </Box>


                                <Box>
                                    <SvgIcon sx={{color:'orange'}}>
                                        <AiFillSafetyCertificate />
                                    </SvgIcon>
                                </Box>

                            </Box>






                        </Box>
                    } />

                </Grid>

                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                    <Paper children={
                        <Box>
                            <Box sx={{ height: '200px', minWidth: '100%', maxWidth: '100%', overflow: 'hidden', backgroundImage: 'url(//gw.alicdn.com/imgextra/i3/O1CN017MSDFT1euu038qE9l_!!6000000003932-0-tps-1180-360.jpg)', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%', backgroundSize: 'cover' }} >
                                <Box sx={{ height: '200px', width: '100%', p: 3, display: 'flex', alignItems: 'center' }}>
                                    <Box> <SvgIcon sx={{ color: 'white', mb: 2 }}><GoDash />
                                    </SvgIcon>
                                        <Typography variant='body1' sx={{ color: 'white', fontSize: 15 }} align='left'>Fast payment and settlement, supporting 6 major global card types and 21 local currencies</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box><Typography variant='h6' sx={{color:'#4f74b3', fontWeight: 'bold', fontSize: '17px' }}>Payment</Typography>
                                    <Typography variant='h6' sx={{
                                        fontSize: '12px', color: 'rgba(102, 102, 102, 0.8)'
                                    }}>PAYMENT SOLUTION</Typography>
                                </Box>


                                <Box>
                                    <SvgIcon sx={{color:'#63a642'}}>
                                        <SiAmazonpay />
                                    </SvgIcon>
                                </Box>

                            </Box>
                        </Box>
                    } />

                </Grid>

                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                    <Paper children={
                        <Box>
                            <Box sx={{ height: '200px', minWidth: '100%', maxWidth: '100%', overflow: 'hidden', backgroundImage: 'url(//i.alicdn.com/img/tfs/TB10TSmw67nBKNjSZLeXXbxCFXa-1180-360.png)', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%', backgroundSize: 'cover' }} >
                                <Box sx={{ height: '200px', width: '100%', p: 3, display: 'flex', alignItems: 'center' }}>
                                    <Box> <SvgIcon sx={{ color: 'white', mb: 2 }}><GoDash />
                                    </SvgIcon>
                                        <Typography variant='body1' sx={{ color: 'white', fontSize: 15 }} align='left'>Production monitoring and inspection services on your Alibaba.com Trade Assurance orders.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box><Typography variant='h6' sx={{color:'#4f74b3', fontWeight: 'bold', fontSize: '17px' }}>Inspection solution</Typography>
                                    <Typography variant='h6' sx={{
                                        fontSize: '12px', color: 'rgba(102, 102, 102, 0.8)'
                                    }}>INSPECTION</Typography>
                                </Box>


                                <Box>
                                    <SvgIcon sx={{color:'#e2705d'}}>
                                        <RiFileSearchFill />
                                    </SvgIcon>
                                </Box>

                            </Box>

                        </Box>
                    } />

                </Grid>

                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                    <Paper children={
                        <Box>
                            <Box sx={{ height: '200px', minWidth: '100%', maxWidth: '100%', overflow: 'hidden', backgroundImage: 'url(//i.alicdn.com/img/tfs/TB17KqGN7zoK1RjSZFlXXai4VXa-1180-360.png)', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%', backgroundSize: 'cover' }} >
                                <Box sx={{ height: '200px', width: '100%', p: 3, display: 'flex', alignItems: 'center' }}>
                                    <Box> <SvgIcon sx={{ color: 'white', mb: 2 }}><GoDash />
                                    </SvgIcon>
                                        <Typography variant='body1' sx={{ color: 'white', fontSize: 15 }} align='left'>Fast, reliable shipping by ocean or air</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box><Typography variant='h6' sx={{color:'#4f74b3', fontWeight: 'bold', fontSize: '17px' }}>Ocean and air shipping</Typography>
                                    <Typography variant='h6' sx={{
                                        fontSize: '12px', color: 'rgba(102, 102, 102, 0.8)'
                                    }}>LOGISTICS SERVICE</Typography>
                                </Box>


                                <Box>
                                    <SvgIcon sx={{color:'#4f74b3'}}>
                                        <IoMdGlobe/>
                                    </SvgIcon>
                                </Box>

                            </Box>
                        </Box>
                    } />
                </Grid>


            </Grid>
















        </Container>
    )
}
