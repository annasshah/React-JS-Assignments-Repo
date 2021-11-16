import { Container, Grid, Paper, Typography, SvgIcon, Stack, Box } from '@mui/material'
import { FcBookmark } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FcGlobe } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcReading } from "react-icons/fc";




export default function AfterSliderMain() {
    return (
        <div>

            <Container sx={{ my: 1 }} >
                <Grid container spacing={3} sx={{display:'flex', justifyContent:'center'}}>

                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <FcBookmark /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                        New Arrivals
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>

                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 221.52
                                        </Typography>

                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            Trending Now
                                        </Typography>

                                    </Grid>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H32546062957b4de98f8c5b4143cd8d1aM.png_120x120.png" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 221.52
                                        </Typography>

                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            Trending Now
                                        </Typography>

                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>


                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <FcPositiveDynamic /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                        Top-ranked Products
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>

                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 6,789.81
                                        </Typography>

                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            1 Piece
                                        </Typography>

                                    </Grid>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 412.13
                                        </Typography>

                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            2 Piece
                                        </Typography>

                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>
                    
                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <AiOutlineFileProtect /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                        Personal Protective Equipment
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/U80ddf7153264404f915053794c51b36az.png_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 5.16
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            3 Piece
                                        </Typography>


                                    </Grid>

                                    <Grid md={6} lg={6} sm={6} xs={6} xl={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H475e3e5e505642ce99b197a9c10b8a4dn.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 2,060.64
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            2 Piece
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>


                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <FcPaid /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                        Dropshipping
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hbd9fa7e8c0ec47ac9da77be5d7ae3712h.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                        Rs 532.34
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            1 Pair
                                        </Typography>


                                    </Grid>

                                    <Grid md={6} lg={6} sm={6} xs={6} xl={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hbf5b06a9f6ff47f29269d1339c76825d7.png_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                        Rs 341.73
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            1 Piece
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>
                    






                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <FcGlobe /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                    Global Original Sources
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 5.16
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            3 Piece
                                        </Typography>


                                    </Grid>

                                    <Grid md={6} lg={6} sm={6} xs={6} xl={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H524face07b6f4e77866abab13e408ef4M.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 2,060.64
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            2 Piece
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>




                    <Grid item md={6} lg={4} sm={12} xs={12}>
                        <Paper elevation={false} children={
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
                                    <SvgIcon sx={{ fontSize: 20 }} > <FcReading /> </SvgIcon> <Typography align='left' sx={{ fontWeight: 'bold' }} >
                                    True View
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', py: 2 }}>


                                    <Grid md={6} lg={6} sm={6} xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/H02a9eaf0310c4e878ef867740ffa3aafK.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 500.16
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            3 Piece
                                        </Typography>


                                    </Grid>

                                    <Grid md={6} lg={6} sm={6} xs={6} xl={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <Box sx={{ backgroundColor: '#f2f3f7' }}>
                                            <img src="https://s.alicdn.com/@sc04/kf/Hfc02d13dd5724a9c88646363df76c7a7r.jpg_120x120xz.jpg" alt="" />
                                        </Box>
                                        <Typography noWrap color='disabled' sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                                            Rs 2,060.64
                                        </Typography>
                                        <Typography noWrap variant='subtitle1' sx={{ fontSize: '13px' }}>
                                            2 Piece
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>
                        } />
                    </Grid>

                </Grid>



            </Container>


        </div>
    )
}
