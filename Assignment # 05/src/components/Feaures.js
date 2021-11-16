import { Container, Grid, Paper, Typography, SvgIcon, Stack, Box, Hidden } from '@mui/material'


export default function Feaures() {
    return (
        <Container sx={{ my: 3 }} >
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>

                <Grid item md={6} lg={6} sm={12} xs={12} >
                    <Paper sx={{ p: 3 }} elevation={false} children={
                        <Box>

                            <Grid container>
                                <Grid item md={8} lg={8} xl={8} sm={8} xs={8} spacing={2}>
                                    <Box>
                                    <Typography noWrap variant='h5' sx={{ fontWeight: 'bold', fontSize: 28, color: '#333333' }}>Customized products
                                        </Typography>
                                        <Hidden mdDown={true}>
                                            <Typography variant='body1' sx={{ color: '#666666' }}>Partner with one of 60,000 experienced manufacturers with design & production...
                                            </Typography>
                                        </Hidden>

                                        <Hidden mdUp={true}>
                                            <Typography noWrap variant='body1' sx={{ color: '#666666' }}>Partner with one of 60,000 experienced manufacturers with design & production...
                                            </Typography>
                                        </Hidden>
                                    </Box>

                                </Grid>
                                <Grid item md={4} lg={4} xl={4} sm={4} xs={4} sx={{ overflow: 'hidden' }} spacing={2}>
                                    <Box sx={{ maxWidth: '200px', minWidth: '100px' }}>
                                        <img src="https://img.alicdn.com/tfs/TB1SkTnbcKfxu4jSZPfXXb3dXXa-242-148.jpg" width='100%' alt="" />
                                    </Box>
                                </Grid>
                            </Grid>



                            <Grid container spacing={3}>
                                <Grid item md={6} lg={6} xl={6} sm={6} xs={6} spacing={2}>
                                    <Paper elevation={false} sx={{ backgroundColor: '#f7f7f7', py: 2, px: 2 }} children={
                                        <Box>
                                            <Box>
                                                <Typography noWrap variant='h5' align='center' sx={{ pb: 4, fontWeight: 'bold', fontSize: 15, color: '#333333' }}>Premium OEM Factories
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Grid container spacing={3} sx={{ overflow: 'hidden' }}>
                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/Hb00022b1557246a0b1afa48ebe098b965.jpg_100x100xz.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/Hb81daf4ceeeb4a3db25f2ceeb3b4e96bk.jpg_100x100xz.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Hidden mdDown={true}>
                                                        <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                            <Box>
                                                                <img src="https://s.alicdn.com/@sc04/kf/Hd7348e94fae6418eafc2134b1feb9e912.jpg_100x100xz.jpg" width='60px' alt="" />
                                                            </Box>
                                                        </Grid>
                                                    </Hidden>
                                                </Grid>
                                            </Box>

                                        </Box>

                                    } />

                                </Grid>
                                <Grid item md={6} lg={6} xl={6} sm={6} xs={6} spacing={2}>
                                    <Paper elevation={false} sx={{ backgroundColor: '#f7f7f7', py: 2, px: 2 }} children={
                                        <Box>
                                            <Box>
                                                <Typography noWrap variant='h5' align='center' sx={{ pb: 4, fontWeight: 'bold', fontSize: 15, color: '#333333' }}>Top-ranking suppliers
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Grid container spacing={3} sx={{ overflow: 'hidden' }}>
                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/H3d3e08f6aa3648bd8fa47090e9fbc3a66.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/Hf0bd52e48a65421b9ecd1790dee0a656O.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>
                                                    <Hidden mdDown={true}>
                                                        <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                            <Box>
                                                                <img src="https://s.alicdn.com/@sc04/kf/H79154a7817064dd4b611a68808c6948co.jpg_220x220.jpg" width='60px' alt="" />
                                                            </Box>
                                                        </Grid>
                                                    </Hidden>
                                                </Grid>
                                            </Box>

                                        </Box>

                                    } />

                                </Grid>

                            </Grid>
                        </Box>
                    } />
                </Grid>


                <Grid item md={6} lg={6} sm={12} xs={12} >
                    <Paper sx={{ p: 3 }} elevation={false} children={
                        <Box>

                            <Grid container>
                                <Grid item md={8} lg={8} xl={8} sm={8} xs={8} spacing={2}>
                                    <Box>
                                        <Typography noWrap variant='h5' sx={{ fontWeight: 'bold', fontSize: 28, color: '#333333' }}>Ready-to-ship products
                                        </Typography>

                                        <Hidden mdDown={true}>
                                            <Typography variant='body1' sx={{ color: '#666666' }}>Source from 15 million products that are ready to ship, and leave the facility within 15 days.
                                            </Typography>
                                        </Hidden>

                                        <Hidden mdUp={true}>
                                            <Typography noWrap variant='body1' sx={{ color: '#666666' }}>Source from 15 million products that are ready to ship, and leave the facility within 15 days.
                                            </Typography>
                                        </Hidden>


                                    </Box>

                                </Grid>
                                <Grid item md={4} lg={4} xl={4} sm={4} xs={4} spacing={2}>
                                    <Box sx={{ maxWidth: '200px', minWidth: '100px' }}>
                                        <img src="https://img.alicdn.com/tfs/TB1F99dzrY1gK0jSZTEXXXDQVXa-221-131.jpg" width='100%' alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item md={6} lg={6} xl={6} sm={6} xs={6} spacing={2}>
                                    <Paper elevation={false} sx={{ backgroundColor: '#f7f7f7', py: 2, px: 2 }} children={
                                        <Box>
                                            <Box>
                                                <Typography noWrap variant='h5' align='center' sx={{ pb: 4, fontWeight: 'bold', fontSize: 15, color: '#333333' }}>Fast Dispatch
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ overflow: 'hidden' }}>
                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/H8938dd1b9dad421fa75147be926b85d5a.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/H07c5dcbfcf8145718af1e721325a0cden.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Hidden mdDown={true}>
                                                        <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                            <Box>
                                                                <img src="https://s.alicdn.com/@sc04/kf/H73fe65ddfd5741e6a94381df92bfe08b3.jpg_220x220.jpg" width='60px' alt="" />
                                                            </Box>
                                                        </Grid>
                                                    </Hidden>
                                                </Grid>
                                            </Box>

                                        </Box>

                                    } />

                                </Grid>
                                <Grid item md={6} lg={6} xl={6} sm={6} xs={6} spacing={2}>
                                    <Paper elevation={false} sx={{ backgroundColor: '#f7f7f7', py: 2, px: 2 }} children={
                                        <Box>
                                            <Box>
                                                <Typography noWrap variant='h5' align='center' sx={{ pb: 4, fontWeight: 'bold', fontSize: 15, color: '#333333' }}>Weekly Deals
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Grid container spacing={3} sx={{ overflow: 'hidden' }}>
                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/H5bde7fe4e9dd4dba871ffe03f8dbf410R.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                        <Box>
                                                            <img src="https://s.alicdn.com/@sc04/kf/H74a3eeec088548cbaad49c0d32987faes.jpg_220x220.jpg" width='60px' alt="" />
                                                        </Box>
                                                    </Grid>

                                                    <Hidden mdDown={true}>
                                                        <Grid item md={4} lg={4} xl={4} sm={6} xs={6} spacing={2}>
                                                            <Box>
                                                                <img src="https://s.alicdn.com/@sc04/kf/H4620992130904a408e4942567eb6492cZ.jpg_220x220.jpg" width='60px' alt="" />
                                                            </Box>
                                                        </Grid>
                                                    </Hidden>
                                                </Grid>
                                            </Box>

                                        </Box>

                                    } />

                                </Grid>

                            </Grid>









                        </Box>
                    } />
                </Grid>





            </Grid>



        </Container>
    )
}
