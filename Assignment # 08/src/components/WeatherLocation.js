import { Grid, Hidden, Stack,Typography, SvgIcon  } from '@mui/material'
import { useSelector } from 'react-redux';
import { GoLocation } from "react-icons/go";

export default function WeatherLocation() {

    const apiData = useSelector((state) => state)
    // const apiData.data = apiData.data
    return (
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >

            <Hidden smDown >
                <Stack spacing={1} direction='column' >
                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon sx={{ fontWeight: 'bold' }} color='primary' fontSize='medium'><GoLocation />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)' }} variant='h5' >{apiData.data.name}, {apiData.data.sys.country}</Typography>
                    </Stack>
                </Stack>
            </Hidden>
            <Hidden smUp >
                <Stack spacing={1} direction='column' alignItems='center' >
                    <Stack spacing={1} direction='row' alignItems='center'> <SvgIcon sx={{ fontWeight: 'bold' }} color='primary' fontSize='medium'><GoLocation />
                    </SvgIcon><Typography sx={{ color: 'var(--primary)' }} variant='h5' >{apiData.data.name}, {apiData.data.sys.country}</Typography>
                    </Stack>
                </Stack>
            </Hidden>
        </Grid>
    )
}
