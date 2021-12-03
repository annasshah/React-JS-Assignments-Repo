import { Grid, Hidden, Stack, Typography, SvgIcon } from '@mui/material'
import { useSelector } from 'react-redux';
import { BsCloudFog2 } from "react-icons/bs";
import { WiStrongWind } from "react-icons/wi";
import { MdOutlineWaterDrop } from "react-icons/md";

export const WindAirAndHumidity = () => {
    const apiData = useSelector((state) => state)
    const globalData = apiData.data


    return (
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <Hidden smDown>
                <Stack spacing={3} direction='row' justifyContent='flex-end' >
                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon color='primary' fontSize='medium'><BsCloudFog2 />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.clouds.all}%</Typography>
                    </Stack>

                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon color='primary' fontSize='medium'><WiStrongWind />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.wind.speed}m/s</Typography>
                    </Stack>

                    <Stack spacing={1} direction='row' alignItems='center' > <SvgIcon color='primary' fontSize='medium'><MdOutlineWaterDrop />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.clouds.all}%</Typography>
                    </Stack>

                </Stack>
            </Hidden>

            <Hidden smUp>
                <Stack spacing={4} direction='row' justifyContent='center' sx={{ my: 2 }}>
                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon color='primary' fontSize='medium'><BsCloudFog2 />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.clouds.all}%</Typography>
                    </Stack>

                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon color='primary' fontSize='medium'><WiStrongWind />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.wind.speed}m/s</Typography>
                    </Stack>

                    <Stack spacing={1} direction='row' alignItems='center' > <SvgIcon color='primary' fontSize='medium'><MdOutlineWaterDrop />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)', fontWeight: '500' }} variant='h6' >{globalData.clouds.all}%</Typography>
                    </Stack>

                </Stack>
            </Hidden>
        </Grid>
    )
}
