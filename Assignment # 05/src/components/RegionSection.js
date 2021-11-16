import { Container, Divider, Grid, Paper, Typography, Box, Button, Stack, Hidden } from '@mui/material'


export default function RegionSection() {
    return (
        <Container>
            <Hidden mdDown={true}>
                <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', pr: '20px' }}><Typography sx={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>CHOOSE YOUR SUPPLIERS BY REGIONS</Typography>
                    </Box>

                    <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                </Box>

            </Hidden>

            <Hidden mdUp={true} >
                <Box>
                    <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <Box sx={{ position: 'absolute', backgroundColor: '#f2f3f7', zIndex: 'tooltip', px: '20px', alignSelf: 'center' }}><Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#333333' }}>CHOOSE YOUR SUPPLIERS BY REGIONS</Typography>
                        </Box>

                        <Divider sx={{ position: 'relative' }} sx={{ py: '2px', color: '#a3a2a2' }} />
                    </Box>
                </Box>
            </Hidden>


            <Box sx={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', my: 3, alignItems: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/ru.png 2x`}
                        alt=""
                    /><Typography noWrap>Russia</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/us.png 2x`}
                        alt=""
                    /><Typography noWrap>USA</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/it.png 2x`}
                        alt=""
                    /><Typography noWrap>Italy</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/tr.png 2x`}
                        alt=""
                    /><Typography noWrap>Turkey</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/th.png 2x`}
                        alt=""
                    /><Typography noWrap>Thailand</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/my.png 2x`}
                        alt=""
                    /><Typography noWrap>Malaysia</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/kr.png 2x`}
                        alt=""
                    /><Typography noWrap>South Korea</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/vn.png 2x`}
                        alt=""
                    /><Typography noWrap>Vietnam</Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', pr: 3, py: 2 }}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/jp.png 2x`}
                        alt=""
                    /><Typography noWrap>Japan</Typography>
                </Stack>

                <Typography noWrap sx={{ color: '#1688cc' }}>More Regions</Typography>

            </Box>









        </Container>
    )
}
