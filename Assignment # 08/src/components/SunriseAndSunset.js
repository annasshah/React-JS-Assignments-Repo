import { Divider, Grid, SvgIcon, Stack, Typography } from '@mui/material';
import { BsSunrise, BsSunset } from "react-icons/bs";
import { useSelector } from 'react-redux';

export default function SunriseAndSunset() {

    const apiData = useSelector((state) => state)
    // const apiData.data = apiData.data


    let getSunRiseAndSetTime = (unix) => {
        let date = new Date(unix * 1000);
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()
        let time = `${hours}:${minutes}`

        return time
        
    }

    return (
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} sx={{ paddingRight: '7px' }}>
                <SvgIcon sx={{ overflow: 'visible', fontSize: '30px' }} color='primary'>
                    <BsSunrise />
                </SvgIcon>

                <SvgIcon sx={{ overflow: 'visible', fontSize: '30px' }} color='primary'>
                    <BsSunset />
                </SvgIcon>
            </Stack>

            <Divider orientation='horizontal' variant="fullWidth" sx={{ backgroundColor: 'var(--primary)', height: '1px', px: '0px', mx: '0px' }} />

            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ my: 1 }}>
                <Stack><Typography>Sunrise</Typography> <Typography>{getSunRiseAndSetTime(apiData.data.sys.sunrise)}</Typography></Stack>
                <Stack><Typography align='right'>Sunset</Typography> <Typography  align='right'>{getSunRiseAndSetTime(apiData.data.sys.sunset)}</Typography></Stack>
            </Stack>

        </Grid>
    )
}
